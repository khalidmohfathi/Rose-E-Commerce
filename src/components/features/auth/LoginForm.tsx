"use client";
import React, { useState } from "react";
import FormInput from "@/components/common/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/lib/schemas/Login.schema";
import { useAuth } from "@/components/Providers/AuthProvider/AuthProvider";
import useModal from "@/hooks/useModal";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; // Import the Lucide Loader2 icon

type LoginFormInputs = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { setCurrentModalName, closeModal, openModal } = useModal();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: zodResolver(schema), mode: "all" });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true); // Set loading to true when form is submitting
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: "/",
      });
      if (res?.error) {
        console.log("Login Error:", res.error);
        setError(res.error);
      } else {
        console.log("Login Success:", res);
        const session = await getSession();
        setUser(session);
        toast.success("Login Successfully");
        setCurrentModalName("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  const LoginFields: {
    name: "email" | "password";
    placeholder: string;
    type: string;
  }[] = [
    {
      name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "Password",
    },
  ];

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 bg-white w-11/12 md:w-8/12 lg:w-1/3 p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center">
        Login to your account
      </h2>

      {LoginFields.map((input, index) => (
        <FormInput
          key={index}
          name={input.name}
          register={register}
          error={errors[input.name]}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}

      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="reminderMe" className="accent-primary" />
          Remember me
        </label>
        <span
          onClick={() => {
            closeModal("LoginModal");
            openModal("forgetpasswordmodal");
            setCurrentModalName("forgetpasswordmodal");
          }}
          className="text-sm text-[#F82BA9] underline"
        >
          Forgot Password?
        </span>
      </div>

      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm">
          No account?{" "}
          <span
            onClick={() => {
              setCurrentModalName("RegisterModal");
            }}
            className="text-[#F82BA9] underline cursor-pointer"
          >
            Create one here
          </span>
        </p>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <Button type="submit" className="rounded-4xl" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin mr-2 w-5 h-5" /> // Show spinner when loading
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;