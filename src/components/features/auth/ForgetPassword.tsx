import {Button} from "@/components/ui/button";
import FormInput from "@/components/common/FormInput";
import { ForgetPasswordAction } from "@/lib/actions/ForgetPassword.action";
import useModal from "@/hooks/useModal";
import { forgetpasswordSchema } from "@/lib/schemas/forgetpassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

type ForgetPasswordInputs = z.infer<typeof forgetpasswordSchema>;

const ForgetPassword = () => {
  const { setCurrentModalName } = useModal();
  const [error, setError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordInputs>({
    resolver: zodResolver(forgetpasswordSchema),
    mode: "all",
  });

  const onSubmit = async (data: ForgetPasswordInputs) => {
    try {
      await ForgetPasswordAction(data.email);
      localStorage.setItem("email", data.email);
      toast.success("Email send to your Email");
      setCurrentModalName("VerifyCodeModal");
    } catch {
      toast.error("Invalid email or phone number");
      setError("Invalid email or phone number");
    }
  };
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-white w-11/12 md:w-8/12 lg:w-1/3 p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl ">Forgot Your Password ?</h2>
      <FormInput
        key={1}
        register={register}
        name="email"
        error={errors.email}
        placeholder="Email Or Phone Number"
        type="email"
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <Button type="submit" className="rounded-4xl">Recover Password</Button>
    </form>
  );
};

export default ForgetPassword;