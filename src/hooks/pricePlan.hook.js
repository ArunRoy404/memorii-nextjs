import { axiosPublic } from "@/lib/axios.config";
import handleApiError from "@/lib/handleApiError";
import { useQuery } from "@tanstack/react-query"

export const useGetPricePlan = () => {
    return useQuery({
        queryKey: ["pricePlan"],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get("/plan-price");
                return res.data.data;
            } catch (error) {
                handleApiError({ error, errorMessage: "Network connection failed." })
            }
        },
    })
}