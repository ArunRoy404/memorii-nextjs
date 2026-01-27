import handleApiError from "@/lib/handleApiError";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useSignIn = ({ setAlert }) => {
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleSignIn = async (data) => {
        setIsPending(true);
        try {
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe,
                redirect: false,
            });

            if (res?.ok) {
                setAlert({
                    type: "success",
                    message: "Login successful",
                });
                toast.success("Login successful");
                router.replace("/");
            } else {
                handleApiError({ errorMessage: "Invalid credentials", setAlert });
            }
        } catch (error) {
            handleApiError({ errorMessage: "Network error", setAlert });
        } finally {
            setIsPending(false);
        }
    }

    return {
        handleSignIn,
        isPending,
    }
}

export const useSignUp = ({ setAlert }) => {
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleSignUp = async (data) => {
        setIsPending(true);
        try {
            const res = await signIn("registration", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.confirmPassword,
                redirect: false,
            });

            if (res?.ok) {
                setAlert({
                    type: "success",
                    message: "Registration successful",
                });
                toast.success("Registration successful");
                router.replace("/");
            } else {

                let parsedErrors;
                try {
                    // Try to parse the error string back into an object
                    parsedErrors = JSON.parse(res.error);
                } catch (e) {
                    // If it's not JSON, it's a generic string error
                    parsedErrors = { general: res.error };
                }

                handleApiError({ error: parsedErrors, errorMessage: "Registration failed", setAlert });
            }
        } catch (error) {
            handleApiError({ error, errorMessage: "Network error", setAlert });
        } finally {
            setIsPending(false);
        }
    }

    return {
        handleSignUp,
        isPending,
    }
}
