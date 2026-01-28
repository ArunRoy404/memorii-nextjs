import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";
import { toast } from "sonner";
import handleApiError from "@/lib/handleApiError";
import { useMutation } from "@tanstack/react-query";


export const useGetProfile = () => {
    const axiosPrivate = useAxiosPrivate();
    return useQuery({
        queryKey: ["profileinfo"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/profileinfo");
            return res.data.data;
        },
        staleTime: 5 * 60 * 1000,
        enabled: !!axiosPrivate,
    });
};


export const useChangePassword = ({ setAlert }) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/change-password", data);
            return res?.data;
        },
        onSuccess: (data) => {
            if (setAlert) {
                setAlert({
                    message: data?.message || "Password changed successfully",
                    type: "success"
                })
            }
            toast.success("Password changed successfully");
        },
        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to change password", setAlert });
        }
    })
}