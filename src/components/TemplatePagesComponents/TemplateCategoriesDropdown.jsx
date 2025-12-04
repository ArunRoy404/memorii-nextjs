import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import templateCategoriesData from "@/data/templateCategories";
import { ChevronDownIcon } from "lucide-react";

const TemplateCategoriesDropdown = () => {
    return (
        <div className="mx-auto max-w-max mb-20 flex flex-col lg:flex-row gap-4 md:gap-4 items-center">

            {/* Dropdowns container for small devices */}
            <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full md:w-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className='text-subtitle min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100'
                            variant="outline"
                        >
                            Templates
                            <ChevronDownIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="px-3 md:px-5 py-4 md:py-8 rounded-2xl w-full min-w-2xs" align="start">
                        <DropdownMenuGroup className='space-y-3'>
                            {templateCategoriesData?.map((template) => (
                                <DropdownMenuItem
                                    className='text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                                    key={template?.key}
                                >
                                    {template?.category}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className='text-subtitle min-w-2xs text-md md:text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100'
                            variant="outline"
                        >
                            Occasions
                            <ChevronDownIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="px-3 md:px-5 py-4 md:py-8 rounded-2xl min-w-2xs" align="start">
                        <DropdownMenuGroup className='space-y-3'>
                            {templateCategoriesData[0]?.occasions?.map((occasion) => (
                                <DropdownMenuItem
                                    className='text-sm md:text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                                    key={occasion?.key}
                                >
                                    {occasion?.occasion}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Button below dropdowns for small devices */}
            <Button
                className='w-full lg:w-auto'
                variant='defaultShiny'>
                Start a blank template
            </Button>
        </div>
    );
};

export default TemplateCategoriesDropdown;
