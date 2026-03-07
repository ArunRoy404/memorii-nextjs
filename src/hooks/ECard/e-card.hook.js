import handleApiError from "@/lib/handleApiError";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";
import { useECardStore } from "@/store/storeGuestIds/useECardStore";
import { useSession } from "next-auth/react";
import { toast } from "sonner";


export const useCreateECard = () => {
    const addGuestToken = useECardStore((state) => state.addGuestToken);
    const axiosPrivate = useAxiosPrivate();
    const router = useRouter();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/e-card", data);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('Creating your E-Card...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            const { id, guest_token, creator_id } = res.data;
            if (!creator_id && guest_token) {
                addGuestToken(id, guest_token);
            }
            toast.success('E-Card created successfully!', { id: context.toastId });
            router.push(`/e-card/${id}`);
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to create ECard" });
            toast.error(error?.message || 'Failed to create E-Card', { id: context.toastId });
        }
    })
}



export const useGetECard = (id) => {
    const axiosPrivate = useAxiosPrivate();
    const { status } = useSession();
    return useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosPrivate.get(`/ecard/${id}`);
            return res.data.data;
        },
        enabled: !!axiosPrivate && status === "authenticated",
    });
};



export const useSaveECard = (id) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post(`/ecard/update-pages/${id}`, data);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('Saving E-Card...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            toast.success('E-Card Saved successfully!', { id: context.toastId });
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to save ECard" });
            toast.error(error?.message || 'Failed to save E-Card', { id: context.toastId });
        }
    })
}
