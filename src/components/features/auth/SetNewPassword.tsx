import FormInput from "@/components/common/FormInput";
import useModal from "@/hooks/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SetNewPasswordSchema } from "@/lib/schemas/SetNewPassword.schema";
import { SetNewPasswordAction } from "@/lib/actions/SetNewPassword.action";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; // Import the Loader2 icon from Lucide

type SetNewPasswordInputs = z.infer<typeof SetNewPasswordSchema>;

const SetNewPassword = () => {
  const { setCurrentModalName } = useModal();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false); // Add loading state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetNewPasswordInputs>({
    resolver: zodResolver(SetNewPasswordSchema),
    mode: "all",
  });

  const onSubmit = async (data: SetNewPasswordInputs) => {
    console.log("Form Data:", data);
    setLoading(true); // Set loading to true when form is submitting
    try {
      await SetNewPasswordAction(
        data.newPassword,
        localStorage.getItem("email") || ""
      );
      setCurrentModalName("LoginModal");
    } catch (error) {
      console.error("Error in SetNewPasswordAction:", error);
      setError("Invalid password or email");
    } finally {
      setLoading(false); // Set loading to false after form submission
    }
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-white w-11/12 md:w-8/12 lg:w-1/3 p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl ">Forgot Your Password?</h2>
      <FormInput
        key={1}
        register={register}
        name="newPassword"
        error={errors.newPassword}
        placeholder="Create Password"
        type="password"
      />
      <FormInput
        key={2}
        register={register}
        name="confirmPassword"
        error={errors.confirmPassword}
        placeholder="Re-enter Password"
        type="password"
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <Button type="submit" className="rounded-4xl" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin mr-2 w-5 h-5" /> // Lucide loading spinner
        ) : (
          "Set Password"
        )}
      </Button>
    </form>
  );
};

export default SetNewPassword;