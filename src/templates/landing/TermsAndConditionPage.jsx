import CommonSection from '@/components/common/CommonSection/CommonSection'
import ColorfulText from '@/components/ui/ColorfulText'
import TermsList from '@/components/TermsComponents/TermsList'
import { termsValidTo } from '@/data/termsSectionData'
import TermsCTA from '@/components/TermsComponents/TermsCTA'

const TermsAndConditionPage = () => {

    return (
        <div className="flex flex-col">

            {/* --- Hero Section --- */}
            <section className="px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <CommonSection
                        title={<>Terms & <ColorfulText>Conditions</ColorfulText></>}
                        subtitle={`Please read these terms carefully before using the Memorii platform. They govern your relationship with our service.`}
                    >
                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-blue-100">
                            Effective Date: {termsValidTo}
                        </span>
                    </CommonSection>
                </div>
            </section>

            <TermsList />

            <TermsCTA />
        </div>
    )
}

export default TermsAndConditionPage