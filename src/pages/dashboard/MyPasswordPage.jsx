import DashboardHeader from '@/components/dashboardComponents/DashboardHeader';
import DeleteAccount from '@/components/dashboardComponents/DeleteAccount';
import UpdatePassword from '@/components/dashboardComponents/UpdatePassword';


const MyPasswordPage = () => {
    return (
        <section>
            <DashboardHeader
                title="Password & Security"
                description="Manage your password and protect your account."
            />

            {/* Change Password Card */}
            <UpdatePassword />

            {/* Delete Account Card */}
            <DeleteAccount />
        </section>
    );
};

export default MyPasswordPage;