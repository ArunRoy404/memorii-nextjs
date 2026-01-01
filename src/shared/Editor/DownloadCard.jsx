import { Button } from '@/components/ui/button';
import { handleDownloadPDF } from '@/services/Editor';
import { usePagesImagesStore } from '@/store/usePagesImageStore';
import { ArrowDownToLine } from 'lucide-react';

const DownloadCard = () => {
    const { getImagesArray, images } = usePagesImagesStore()
    const handleDownload = () => {
        const images = getImagesArray()
        handleDownloadPDF(images)
    }
    console.log(images);

    return (
        <Button
            onClick={handleDownload}
            size='icon' variant='outline' className='rounded-full text-primary'>
            <ArrowDownToLine />
        </Button>
    );
};

export default DownloadCard; 