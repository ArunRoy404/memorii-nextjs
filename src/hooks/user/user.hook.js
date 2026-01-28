import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";
import { toast } from "sonner";
import handleApiError from "@/lib/handleApiError";
import { useSession } from "next-auth/react";


export const useGetProfile = () => {
    const axiosPrivate = useAxiosPrivate();
    const { status } = useSession();
    return useQuery({
        queryKey: ["profileinfo"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/profileinfo");
            return res.data.data;
        },
        staleTime: 5 * 60 * 1000,
        enabled: !!axiosPrivate && status === "authenticated",
    });
};

export const useUpdateProfileInfo = ({ setAlert } = {}) => {
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/update-profileinfo", data);
            return res?.data;
        },
        onSuccess: (data) => {
            if (setAlert) {
                setAlert({
                    message: data?.message || "Profile updated successfully",
                    type: "success"
                })
            }
            toast.success("Profile updated successfully");
            queryClient.invalidateQueries({ queryKey: ["profileinfo"] });
        },
        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to update profile", setAlert });
        }
    })
}

export const useRemoveProfilePhoto = () => {
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const res = await axiosPrivate.post("/remove-profile-photo");
            return res?.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Profile photo removed");
            queryClient.invalidateQueries({ queryKey: ["profileinfo"] });
        },
        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to remove profile photo" });
        }
    })
}

export const useUpdateProfilePhoto = () => {
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (file) => {
            const formData = new FormData();
            formData.append("profile_photo", file);
            const res = await axiosPrivate.post("/change-profile-photo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return res?.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message || "Profile photo updated");
            queryClient.invalidateQueries({ queryKey: ["profileinfo"] });
        },
        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to update profile photo" });
        }
    })
}


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