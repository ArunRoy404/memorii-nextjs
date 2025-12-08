import EditorTopBar from "@/shared/Editor/EditorTopBar";
import EditorFooter from "@/shared/Editor/EditorFooter";

export default function EditorLayout({ children }) {
    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col">
            <EditorTopBar />
            <div className="flex-1" >
                {children}
            </div>
            <EditorFooter />
        </div>
    );
}
