import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";

export const useGetProfile = () => {
    const axiosPrivate = useAxiosPrivate();
    return useQuery({
        queryKey: ["profileinfo"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/profileinfo");
            return res.data.data;
        },
        enabled: !!axiosPrivate,
    });
};
