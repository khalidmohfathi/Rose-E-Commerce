"use client";
import React from "react";
import useModal from "@/hooks/useModal";
import LoginForm from "@/components/features/auth/LoginForm";
import ForgetPassword from "@/components/features/auth/ForgetPassword";
import VerifyCode from "@/components/features/auth/VerifyCode";
import SetNewPassword from "@/components/features/auth/SetNewPassword";
import Register from "@/components/features/auth/RegisterForm";
const AuthModal = () => {
  const { openModals, currentModalName, setCurrentModalName } = useModal();
  const modalNames = [
    "LoginModal",
    "RegisterModal",
    "forgetpasswordmodal",
    "VerifyCodeModal",
    "SetNewPasswordModal",
  ];
  const modalNameIndex = modalNames.indexOf(currentModalName);

  const forms = [
    <LoginForm key={1} />,
    <Register key={2} />,
    <ForgetPassword key={11} />,
    <VerifyCode key={12} />,
    <SetNewPassword key={13} />,
  ];
  return (
    openModals[modalNames[modalNameIndex]] && (
      <div
        onClick={() => {
          setCurrentModalName("");
        }}
        className="fixed z-50 top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center"
      >
        {forms[modalNameIndex]}
      </div>
    )
  );
};

export default AuthModal;
