'use client'
import { useTemplateStore } from '@/store/useTemplateStore';

const TemplateCardClick = ({ template }) => {
    const { setSelectedTemplate } = useTemplateStore((state) => state);

    return (
        <div onClick={() => setSelectedTemplate(template)} className="w-full h-full absolute top-0 left-0 z-1" />
    );
};

export default TemplateCardClick;