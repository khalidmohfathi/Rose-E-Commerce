"use server";
export const SetNewPasswordAction = async (
  newPassword: string,
  email: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}auth/resetPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, email }),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error in SetNewPasswordAction:", error);
    throw error;
  }
};
