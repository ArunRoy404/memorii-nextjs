import { Spinner } from "@/components/ui/spinner";

export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-dvh">
            <Spinner className='scale-200 text-primary' />
        </div>
    );
}