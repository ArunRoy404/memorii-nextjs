import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, FileHeart, BookOpen, Download, Link2 } from 'lucide-react';
import Image from 'next/image';



const DashboardCard = ({ card }) => {
    return (
        <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
            {/* Card Image */}
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <Image
                    src={card?.image}
                    alt={card?.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Badge
                    className={`
                        ${card?.status === 'Draft' ? 'bg-yellow-500 hover:bg-yellow-600'
                            : card?.status === 'Received' ? 'bg-blue-500 hover:bg-blue-600'
                                : card?.status === 'Sent' ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-teal-500 hover:bg-teal-600'} absolute top-3 right-3 text-white border-0`}
                >
                    {card?.status}
                </Badge>
            </div>

            {/* Card Content */}
            <CardContent className="p-4">
                {/* Type Badge */}
                <div className="flex items-center gap-1.5 text-gray-500 mb-2">
                    {
                        card?.type === 'e-card' ? (
                            <FileHeart className="w-4 h-4" />
                        ) : card?.type === 'e-memory-book' ? (
                            <BookOpen className="w-4 h-4" />
                        ) : null
                    }
                    <span className="text-sm">{card?.type}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-1">
                    {card?.title}
                </h3>

                {/* Last Edited */}
                <p className="text-sm text-gray-500 mb-4">
                    {card?.lastEdited}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {
                        card?.viewButton && (
                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2"
                                size="sm"
                            >
                                <Eye className="w-4 h-4" />
                                View
                            </Button>
                        )
                    }
                    {
                        card?.editButton && (
                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2"
                                size="sm"
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </Button>
                        )
                    }
                    {
                        card?.downloadButton && (
                            <Button
                                variant="outline"
                                className="flex items-center justify-center gap-2"
                                size="sm"
                            >
                                <Download className="w-4 h-4" />
                            </Button>
                        )
                    }
                    {
                        card?.copyButton && (
                            <Button
                                variant="outline"
                                className=" flex items-center justify-center gap-2"
                                size="sm"
                            >
                                <Link2 className="w-4 h-4" />
                            </Button>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;