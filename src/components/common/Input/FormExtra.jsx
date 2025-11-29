import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';


const FormExtra = ({ checkboxId, register, errors, checkboxLabel, linkLabel, linkHref, linkClassName, LabelClassName, checkboxClassName }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id={checkboxId}
                        className={checkboxClassName}
                        {...register("remember", { value: false })}
                    />
                    <Label
                        htmlFor={checkboxId}
                        className={cn(
                            "text-lg font-medium text-primary-foreground cursor-pointer",
                            LabelClassName
                        )}
                    >
                        {checkboxLabel}
                    </Label>
                </div>

                <Link
                    href={linkHref}
                    className={cn(
                        "text-lg font-semibold text-primary hover:text-primary/60",
                        linkClassName
                    )}
                >
                    {linkLabel}
                </Link>
            </div>

            {errors[checkboxId] && (
                <p className="text-red-500 text-sm pt-1">{errors[checkboxId]?.message}</p>
            )}
        </div>
    );
};

export default FormExtra;