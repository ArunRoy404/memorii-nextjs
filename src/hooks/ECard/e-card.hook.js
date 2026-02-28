import handleApiError from "@/lib/handleApiError";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";
import { useECardStore } from "@/store/storeGuestIds/useECardStore";


export const useCreateECard = () => {
    const addGuestToken = useECardStore((state) => state.addGuestToken);
    const axiosPrivate = useAxiosPrivate();
    const router = useRouter();

    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/e-card", data);
            return res?.data;
        },

        onSuccess: (res) => {
            const { id, guest_token, creator_id } = res.data;
            if (!creator_id && guest_token) {
                addGuestToken(id, guest_token);
            }
        },

        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to create ECard" });
        }
    })
}