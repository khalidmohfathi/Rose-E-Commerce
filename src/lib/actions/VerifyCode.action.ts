"use server";
export const VerifyCodeAction = async (resetCode: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}auth/verifyResetCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetCode }),
      }
    );
    return response;
  } catch (error) {
    console.error("Error in VerifyCodeAction:", error);
    throw error;
  }
};
