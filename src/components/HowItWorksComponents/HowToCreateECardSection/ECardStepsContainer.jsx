import ECardStep from "./ECardStep";

const ECardStepsContainer = ({ item }) => {
    const { title, description, steps } = item
    return (
        <div className="odd:[&_.child]:hidden even:[&_.child]:opacity-0">
            <div className="child mb-8 space-y-4 even:hidden hidden lg:block">
                <h1 className="text-3xl font-bold text-black">
                    {title}
                </h1>
                <p className="text-icon font-medium text-sm md:text-lg">
                    {description}
                </p>
            </div>


            <div className="mb-8 space-y-4">
                <h1 className="text-3xl font-bold text-black">
                    {title}
                </h1>
                <p className="text-icon font-medium text-sm md:text-lg">
                    {description}
                </p>
            </div>
            <div className="border border-icon/25 rounded-xl p-3 xl:p-6">
                <div className="md:p-3 xl:p-6 md:border border-icon/25 rounded-xl space-y-3 ">
                    {
                        steps?.map((step) => <ECardStep key={step?.id} step={step} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ECardStepsContainer;