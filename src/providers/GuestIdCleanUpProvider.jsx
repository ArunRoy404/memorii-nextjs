"use client";
import { useEffect } from "react";
import { useECardStore } from "@/store/storeGuestIds/useECardStore";

export default function GuestIdCleanUpProvider({ children }) {
    const clearExpiredTokens = useECardStore((state) => state.clearExpiredTokens);

    useEffect(() => {
        clearExpiredTokens();
    }, [clearExpiredTokens]);

    return <>{children}</>;
}