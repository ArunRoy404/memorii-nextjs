import { Suspense } from 'react';
import SignInPage from '@/templates/auth/SignInPage';

const SignIn = () => (
    <Suspense>
        <SignInPage />
    </Suspense>
)
export default SignIn;