import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import handleApiError from "@/lib/handleApiError";
import { useSession } from "next-auth/react";
import useAxiosPrivate from "../axios/useAxiosPrivate";


export const useGetStats = () => {
    const axiosPrivate = useAxiosPrivate();
    const { status } = useSession();
    return useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/user/dashboard");
            return res.data.data;
        },
        staleTime: 5 * 60 * 1000,
        enabled: !!axiosPrivate && status === "authenticated",
    });
};

export const useGetAllDrafts = () => {
    const axiosPrivate = useAxiosPrivate();
    const { status } = useSession();
    return useQuery({
        queryKey: ["all-drafts"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/all-drafts");
            return res.data.data;
        },
        staleTime: 5 * 60 * 1000,
        enabled: !!axiosPrivate && status === "authenticated",
    });
};


