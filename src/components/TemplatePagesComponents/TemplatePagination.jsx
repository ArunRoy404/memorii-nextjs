import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

export function TemplatePagination({ meta }) {
    const searchParams = useSearchParams()
    if (!meta || meta.last_page <= 0) return null;

    const { current_page, last_page } = meta;
    const pages = Array.from({ length: last_page }, (_, i) => i + 1);

    const createPageUrl = (pageNumber) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", pageNumber.toString());
        return `?${params.toString()}`;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={createPageUrl(current_page - 1)}
                        className={current_page === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {pages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href={createPageUrl(page)}
                            isActive={page === current_page}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href={createPageUrl(current_page + 1)}
                        className={current_page === last_page ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}