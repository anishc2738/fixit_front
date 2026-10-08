"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
    name: string;
    email: string;
    isStaff: boolean;
}

interface AuthContextType {
    accessToken: string | null;
    user: User | null;
    setAuth: (accessToken: string, user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const setAuth = (newAccessToken: string, newUser: User) => {
        setAccessToken(newAccessToken);
        setUser(newUser);
    };
    const logout = async () => {
        try {
            const data = await fetch("http://localhost:8000/api/auth/logout/", {
                method: "POST",
                credentials: "include"
            })
            const res=await data.json()
            console.log("Logout response:", res.message);
        } catch (error) {
            console.error("Logout error:", error);
        }
        finally {
            setAccessToken(null);
            setUser(null);
        }

    }
    useEffect(() => {
        const restoreSession = async () => {
            const response = await fetch("http://localhost:8000/api/auth/refresh/", {
                method: "POST",
                credentials: "include"

            })
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                console.log("No active session");
                return;
            }
            setAccessToken(data.access)
            console.log("data.isStaff:", data.isStaff)
            setUser({
                name: data.name,
                email: data.email,
                isStaff: data.isStaff
            })
        }
        restoreSession()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                user,
                setAuth,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}