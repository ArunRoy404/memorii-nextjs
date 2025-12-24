import { lastUpdated } from '@/data/policySectionsData'
import CommonSection from '@/components/common/CommonSection/CommonSection'
import ColorfulText from '@/components/ui/ColorfulText'
import PrivacyList from '@/components/PrivacyComponents/PrivacyList'
import PrivacyCTA from '@/components/PrivacyComponents/PrivacyCTA'


const PrivacyPolicyPage = () => {

    return (
        <div className="flex flex-col">

            {/* --- Hero Section --- */}
            <section className="px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <CommonSection
                        title={<>Privacy <ColorfulText>Policy</ColorfulText></>}
                        subtitle={`At Memorii, we value your trust. This policy explains how we protect your memories and personal information.`}
                    >
                        <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-teal-100">
                            Last Updated: {lastUpdated}
                        </span>
                    </CommonSection>
                </div>
            </section>


            <PrivacyList />

            <PrivacyCTA />
        </div>
    )
}

export default PrivacyPolicyPage