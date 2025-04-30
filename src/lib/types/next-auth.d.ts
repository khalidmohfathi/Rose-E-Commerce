// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: "male" | "female" | "other";
      phone: string;
      photo: string;
      role: "user" | "admin" | "moderator";
      createdAt: string;
      token:string
    };
  }

  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "male" | "female" | "other";
    phone: string;
    photo: string;
    role: "user" | "admin" | "moderator";
    createdAt: string;
    token:string
  }
  
}

declare module "next-auth/jwt" {
    interface JWT {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: "male" | "female" | "other";
      phone: string;
      photo: string;
      role: "user" | "admin" | "moderator";
      createdAt: string;
      token:string

    }
  }