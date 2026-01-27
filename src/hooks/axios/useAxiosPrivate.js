"use client";

import { axiosPrivate } from "@/lib/axios.config";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


const useAxiosPrivate = () => {
    const { data: session } = useSession();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization'] && session?.token) {
                    config.headers['Authorization'] = `bearer ${session.token}`
                }
                return config;
            },
            (error) => Promise.reject(error)
        )


        const resposeIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error?.response?.status === 401) {
                    console.log('yesssssssssssssss', error);
                }
                return Promise.reject(error)
            }
        )


        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(resposeIntercept)
        }
    }, [session])
    return axiosPrivate;
};

export default useAxiosPrivate;