"use client";

import { getSession, signOut } from "next-auth/react";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Define User Type
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female" | "other";
  phone: string;
  photo: string;
  role: "user" | "admin" | "moderator";
  createdAt: string;
}

// Define Session Data Type
export interface SessionData {
  user: User;
}

// Define Auth Context Type
interface AuthContextType {
  user: SessionData | null|undefined;
  setUser: (user: SessionData | null|undefined) => void;
  logout: () => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionData | null|undefined>(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const session = await getSession();
        if (session) {
          setUser(session);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    }
    fetchSession();
  }, []);

  // Logout function
  const logout = async () => {
    await signOut({ redirect: false });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook to Use Auth Context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
