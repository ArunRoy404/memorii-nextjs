import React from "react";
import { cn } from "@/lib/utils";

const colors = [
    "#08A2A6",
    "#F46F55",
    "#F69926",
    "#2B69BC",
    "#F66F56",
    "#2B69BC",
    "#08A2A6",
];

export default function ColorfulText({ children, className }) {
    const text = typeof children === "string" ? children : "";

    return (
        <span className={cn("", className)}>
            {text.split("").map((char, index) => {
                const color = colors[index % colors.length];
                return (
                    <span key={index} style={{ color }}>
                        {char}
                    </span>
                );
            })}
        </span>
    );
}
