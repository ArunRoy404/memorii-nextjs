import { toast } from "sonner";

const handleApiError = ({ error, errorMessage = "Network Error", throwError = false, setAlert }) => {
    const errors = error?.response?.data?.errors
    const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        errorMessage

    if (message) toast.error(message);
    if (setAlert) {
        if (errors) {
            setAlert({
                message: message,
                type: "error",
                errors
            })
        } else {
            setAlert({
                message: message,
                type: "error",
            })
        }
    }
    if (throwError) throw new Error(message);
};

export default handleApiError;