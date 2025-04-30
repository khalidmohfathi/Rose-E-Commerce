import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/common/FormInput";
import useModal from "@/hooks/useModal";
import { RegisterSchema } from "@/lib/schemas/Register.schema";
import { RegisterAction } from "@/lib/actions/Register.action";
import { toast } from "react-toastify";
import { z } from "zod";
import RadioGroup from "@/components/common/RadioGroup";
import { Loader2 } from "lucide-react"; // Import the Loader2 icon from Lucide

export type RegisterInputs = z.infer<typeof RegisterSchema>;

interface RegisterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const Register: React.FC = () => {
  const { setCurrentModalName } = useModal();
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterInputs>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange", // Real-time validation
  });

  const onSubmit = async (data: RegisterInputs) => {
    setSubmissionError(null);
    setLoading(true); // Set loading to true when form is submitting

    try {
      const response: RegisterResponse = await RegisterAction(data);
      console.log(response);

      if (!(response.message === "success")) {
        throw new Error(response.error || "Failed to register");
      }

      toast.success("Account created successfully");
      reset();
      setCurrentModalName("LoginModal");
    } catch (error) {
      console.log("Error in RegisterAction:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to register";
      setSubmissionError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Set loading to false after form submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-4 bg-white w-11/12 md:w-8/12 lg:w-1/3 p-4 sm:p-8 rounded-2xl shadow-lg "
    >
      <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>

      <FormInput
        register={register}
        name="firstName"
        error={errors.firstName}
        placeholder="Enter first name"
        type="text"
        label="First Name"
      />

      <FormInput
        register={register}
        name="lastName"
        error={errors.lastName}
        placeholder="Enter last name"
        type="text"
        label="Last Name"
      />

      <FormInput
        register={register}
        name="phone"
        error={errors.phone}
        placeholder="Enter phone number (optional)"
        type="tel"
        label="Phone Number"
      />

      <FormInput
        register={register}
        name="email"
        error={errors.email}
        placeholder="Enter email address"
        type="email"
        label="Email"
      />

      <FormInput
        register={register}
        name="password"
        error={errors.password}
        placeholder="Enter password"
        type="password"
        label="Password"
      />

      <FormInput
        register={register}
        name="rePassword"
        error={errors.rePassword}
        placeholder="Confirm password"
        type="password"
        label="Confirm Password"
      />

      <RadioGroup
        register={register("gender")}
        name="gender"
        error={errors.gender}
        label="Gender"
        options={genderOptions}
        required
      />

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setCurrentModalName("LoginModal")}
          className="text-[#F82BA9] hover:text-pink-600 underline font-medium"
        >
          Log in
        </button>
      </p>

      {submissionError && (
        <p className="text-red-500 text-sm text-center" role="alert">
          {submissionError}
        </p>
      )}

      <Button type="submit" className="rounded-4xl" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin mr-2 w-5 h-5" /> // Lucide loading spinner
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
};

export default Register;