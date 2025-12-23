import { DiscardEditsDialog } from "@/components/EditorComponents/DiscardEditsDialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import DownloadCard from "./DownloadCard";

const PreviewTopBar = () => {


    return (
        <div className="p-4 bg-white shadow">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Top / Left: Exit */}
                <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center">
                    <DiscardEditsDialog />
                </div>


                {/* Right / bottom: Invite + Preview */}
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">


                    <Link href="/editor/1">
                        <Button variant='outline' size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
                            Edit Design
                        </Button>
                    </Link>


                    <DownloadCard />


                    <Link href="send">
                        <Button
                            size="sm" className="w-full sm:w-auto">
                            Send
                            <Send />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PreviewTopBar;