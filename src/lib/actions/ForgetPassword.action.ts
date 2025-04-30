"use server";
export const ForgetPasswordAction = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}auth/forgotPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error in ForgetPasswordAction:", error);
    throw error;
  }
};