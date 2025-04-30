import FormInput from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { ForgetPasswordAction } from "@/lib/actions/ForgetPassword.action";
import { VerifyCodeAction } from "@/lib/actions/VerifyCode.action";
import { verifyCodeSchema } from "@/lib/schemas/VerifyCode.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react"; // Import the Lucide loader icon

type VerifyCodeInputs = z.infer<typeof verifyCodeSchema>;

const VerifyCode = () => {
  const { setCurrentModalName } = useModal();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false); // Add loading state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeInputs>({
    resolver: zodResolver(verifyCodeSchema),
    mode: "all",
  });

  const onSubmit = async (data: VerifyCodeInputs) => {
    console.log("Form Data:", data);
    setLoading(true); // Set loading to true on form submission
    try {
      const dataB = await VerifyCodeAction(data.resetCode);
      console.log(dataB);
      if (dataB.error) {
        setError(dataB.error);
        setLoading(false); // Set loading to false on error
        return;
      }
      setCurrentModalName("SetNewPasswordModal");
      setLoading(false); // Set loading to false after successful submission
    } catch (error) {
      setError("Invalid code");
      setLoading(false); // Set loading to false on error
      console.error("Error in ForgetPasswordAction:", error);
    }
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-white w-11/12 md:w-8/12 lg:w-1/3 p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl ">Verify Code</h2>
      <FormInput
        key={1}
        register={register}
        name="resetCode"
        error={errors.resetCode}
        placeholder="Enter Code"
        type="text"
      />
      <p className="text-end">
        Didn’t receive a code?{" "}
        <span
          onClick={() => {
            (async function ResendEmail() {
              const email = localStorage.getItem("email");
              if (email) {
                try {
                  const res = await ForgetPasswordAction(email);
                  console.log(await res.json());
                } catch (error) {
                  console.error("Error in ForgetPasswordAction:", error);
                }
              }
            })();
          }}
          className="text-[#F82BA9] underline"
        >
          Resend
        </span>
      </p>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <Button type="submit" className="rounded-4xl" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin mr-2 w-5 h-5" /> // Lucide loading spinner
        ) : (
          "Recover Password"
        )}
      </Button>
    </form>
  );
};

export default VerifyCode;