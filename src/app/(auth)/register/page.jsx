import { Suspense } from 'react';
import RegistrationPage from '@/templates/auth/RegistrationPage';

const registration = () => (
    <Suspense>
        <RegistrationPage />
    </Suspense>
)
export default registration;