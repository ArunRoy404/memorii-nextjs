import { Button } from '@/components/ui/button';
import { handleDownloadPDF } from '@/services/Editor';
import { usePagesImagesStore } from '@/store/usePagesImageStore';
import { ArrowDownToLine } from 'lucide-react';

const DownloadCard = () => {
    const { getImagesArray } = usePagesImagesStore()
    const handleDownload = () => {
        const images = getImagesArray()
        handleDownloadPDF(images)
    }

    return (
        <Button
            onClick={handleDownload}
            variant='outline'
            size="sm"
            className="flex items-center gap-1 justify-center w-full sm:w-auto">
            Download
            <ArrowDownToLine />
        </Button>
    );
};

export default DownloadCard;