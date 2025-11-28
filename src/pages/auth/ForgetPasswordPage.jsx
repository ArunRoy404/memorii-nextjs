import AuthCard from '@/shared/auth/AuthCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import GoogleSignIn from '@/components/common/AuthButton/GoogleSignIn';


const ForgetPasswordPage = () => {

    return (
        <AuthCard
            title={'Forget Password'}
            subtitle={'No worries, we will send you reset instructions'}
            className={'space-y-7'}
        >
            <form className="space-y-10">
                <div className="space-y-6">
                    <Label htmlFor="email" className="text-lg font-bold text-primary-foreground">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-transparent text-lg py-6 border-border placeholder:text-placeholder"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className={'w-full'}
                >
                    Continue
                </Button>
            </form>
        </AuthCard>
    );
};

export default ForgetPasswordPage;