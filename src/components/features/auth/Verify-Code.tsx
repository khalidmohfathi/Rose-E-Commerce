import Button from "@/components/common/Button";
import FormInput from "@/components/common/FormInput";
import useModal from "@/hooks/useModal";
import { ForgetPasswordAction } from "@/lib/actions/ForgetPassword.action";
import { VerifyCodeAction } from "@/lib/actions/VerifyCode.action";
import { verifyCodeSchema } from "@/lib/schemas/VerifyCode.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type VerifyCodeInputs = z.infer<typeof verifyCodeSchema>;

const VerifyCode = () => {
  const { setCurrentModalName } = useModal();
  const [error, setError] = React.useState<string | null>(null);
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
    // Handle form submission logic here
    try {
      const res = await VerifyCodeAction(data.resetCode);
      const dataB = await res.json();
      console.log(dataB);
      if (dataB.error) {
        setError(dataB.error);
        return;
      }
      setCurrentModalName("SetNewPasswordModal");
    } catch (error) {
      setError("Invalid code");
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
      <Button type="submit" label="Recover Password" />
    </form>
  );
};

export default VerifyCode;
