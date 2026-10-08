"use client";

import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useAuth } from "@/components/Auth/AuthProvider";

export default function GoogleSignIn() {
    const { setAuth } = useAuth();

    const handleSuccess = async (
        credentialResponse: CredentialResponse
    ) => {
        const googleToken = credentialResponse.credential;

        if (!googleToken) {
            console.error("Google token not received");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8000/api/auth/login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials:"include",
                    body: JSON.stringify({
                        token: googleToken,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.error("Login failed:", data);
                return;
            }
            console.log(data.name)
            console.log(data.email)

            // Store authentication information
            setAuth(data.access, {
                name: data.name,
                email: data.email,
            });

            console.log("Login successful");
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.error("Google Login Failed")}
        />
    );
}