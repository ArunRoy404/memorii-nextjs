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