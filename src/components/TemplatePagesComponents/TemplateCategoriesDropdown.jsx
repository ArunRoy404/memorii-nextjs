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
        <div 
        className="mx-auto max-w-max mb-20 space-x-8"
        >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className='text-subtitle min-w-2xs text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100'
                        variant="outline"
                    >
                        Templates
                        <ChevronDownIcon />
                    </Button>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 px-5 rounded-2xl py-8 min-w-2xs" align="start">
                    <DropdownMenuGroup
                        className='space-y-3'
                    >
                        {
                            templateCategoriesData?.map((template) => (
                                <DropdownMenuItem
                                    className='text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                                    key={template?.key}
                                >
                                    {template?.category}
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button
                        className='text-subtitle min-w-2xs text-2xl rounded-2xl border-border justify-between active:scale-100 hover:scale-100'
                        variant="outline">
                        Occasions
                        <ChevronDownIcon />
                    </Button>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 px-5 rounded-2xl py-8 min-w-2xs" align="start">
                    <DropdownMenuGroup
                        className='space-y-3'
                    >
                        {
                            templateCategoriesData[0]?.occasions?.map((occasion) => (
                                <DropdownMenuItem
                                    className='text-base cursor-pointer rounded-xl p-2 text-subtitle border'
                                    key={occasion?.key}
                                >
                                    {occasion?.occasion}
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button
            variant='defaultShiny'
            >
                Start a blank template
            </Button>
        </div>
    );
};

export default TemplateCategoriesDropdown;