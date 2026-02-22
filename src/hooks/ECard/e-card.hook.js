import handleApiError from "@/lib/handleApiError";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";


export const useCreateECard = () => {
    const axiosPrivate = useAxiosPrivate();
    const router = useRouter();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/e-card", data);
            return res?.data;
        },
        // onSuccess: (data) => {
        //     toast.success("ECard created successfully");
        //     // router.replace("/e-card");
        // },
        // onError: (error) => {
        //     handleApiError({ error, errorMessage: "Failed to create ECard" });
        // }
    })
}
