"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link2, Download } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import QRCode from "react-qr-code";

export function GenerateLinkDialog({ text, setIsError, className }) {
    const [open, setOpen] = useState(false);
    const qrValue = "https://maishami.vercel.app/received";

    const downloadQRCode = () => {
        const svg = document.getElementById("qr-code-download");
        if (!svg) return;

        // 1. Setup dimensions
        const size = 500; // High resolution size
        const padding = 40; // White space around the QR code
        const totalSize = size + padding * 2;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = totalSize;
            canvas.height = totalSize;

            // 2. Draw Background (Padding)
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, totalSize, totalSize);

            // 3. Draw QR Code centered
            ctx.drawImage(img, padding, padding, size, size);

            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = "qr-code.png";
            downloadLink.href = pngFile;
            downloadLink.click();
            toast.success("High-res QR Code downloaded");
        };

        // Convert SVG to Base64
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <Dialog open={open} onOpenChange={() => {
            if (!text && !open) {
                setIsError(true);
                return;
            }
            setIsError(false);
            setOpen(!open);
        }}>
            <DialogTrigger asChild>
                <Button
                    variant='link'
                    className={cn(
                        'p-0 text-xs underline hover:scale-100! active:scale-100! text-envelope-text',
                        className
                    )}
                >
                    Generate the link
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[95vw] max-w-[400px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl">
                <div className="bg-white p-6">
                    <DialogHeader className="space-y-1">
                        <DialogTitle className="text-xl font-semibold tracking-tight">
                            Share this card
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                            Anyone who has the link can access this card.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative p-2 bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                            <QRCode
                                id="qr-code-download"
                                value={qrValue}
                                size={200} // Keep display size small for the UI
                                className="rounded-lg"
                            />
                        </div>

                        {/* Styled Download Button */}
                        <button
                            onClick={downloadQRCode}
                            className="mt-6 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-black rounded-full transition-all active:scale-95"
                        >
                            <Download size={16} />
                            Download QR Code
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row items-center gap-2 p-1.5 pl-4 bg-gray-50 border border-gray-100 rounded-xl">
                            <span className="text-xs text-gray-400 truncate select-none">
                                {qrValue}
                            </span>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(qrValue);
                                    toast.success("Link copied");
                                }}
                                className="ml-auto w-full md:max-w-max flex justify-center items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all active:scale-95"
                            >
                                <Link2 size={14} className="text-gray-600" />
                                Copy link
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    );
}