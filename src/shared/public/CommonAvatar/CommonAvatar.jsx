import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export default function CommonAvatar({ src, fallback, alt, className }) {
    return (
        <Avatar className={cn(
            className
        )}>
            <AvatarImage src={src || "https://github.com/shadcn.png"} alt={alt} />
            <AvatarFallback>{fallback?.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}