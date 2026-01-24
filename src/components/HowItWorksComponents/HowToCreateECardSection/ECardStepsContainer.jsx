import ECardStep from "./ECardStep";

const { default: Card } = require("@/components/svg/Card");
const { default: Letter } = require("@/components/svg/Letter");
const { default: LinkIcon } = require("@/components/svg/LinkIcon");
const { default: Peoples } = require("@/components/svg/Peoples");

const icons = [
    Card,
    Peoples,
    LinkIcon,
    Letter,
]


const ECardStepsContainer = ({ item }) => {
    const { title, description } = item
    const steps = [item?.step_1, item?.step_2, item?.step_3, item?.step_4]

    
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
                        steps?.map((step, index) => <ECardStep key={index} step={step} Icon={icons[index] || null} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ECardStepsContainer;