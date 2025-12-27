import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


const DeleteAccount = () => {
    return (
        <Card className="border-0 shadow-sm border-red-100">
            <CardContent className="p-4 md:p-8">
                <h5 className="font-semibold text-red-600 mb-2">Delete your account</h5>
                <p className="text-sm text-gray-600 mb-6">
                    By deleting your account, you’ll no longer be able to access any of your designs or log in to memorii.
                </p>

                <Button variant="outline" className="w-full md:w-auto text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                    Delete Account
                </Button>
            </CardContent>
        </Card>
    );
};

export default DeleteAccount;