import { toast } from "sonner";

export const showOtpToast = (otp) => {
    toast.success("OTP sent successfully", {
        description: `Your verification code is: ${otp}`,
        duration: 10000,
        action: {
            label: "Copy Code",
            onClick: () => {
                navigator.clipboard.writeText(otp.toString());
                toast.success("OTP copied to clipboard");
            },
        },
    });
};
