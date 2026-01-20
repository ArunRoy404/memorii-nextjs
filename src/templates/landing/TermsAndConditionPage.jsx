'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection'
import TermsList from '@/components/TermsComponents/TermsList'
import { termsValidTo } from '@/data/termsSectionData'
import TermsCTA from '@/components/TermsComponents/TermsCTA'
import { useGetSections, useGetTermsConditions } from '@/hooks/cms.hook'

const TermsAndConditionPage = () => {
    const { data: sections } = useGetSections()
    const { data: termsConditions } = useGetTermsConditions()
    const sectionData = sections?.find(section => section?.section === 'terms_&_conditions')

    
    return (
        <div className="flex flex-col">

            {/* --- Hero Section --- */}
            <section className="px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <CommonSection
                        title={sectionData?.title}
                        subtitle={sectionData?.short_description}
                    >
                        <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-blue-100">
                            Effective Date: {termsValidTo}
                        </span>
                    </CommonSection>
                </div>
            </section>

            <TermsList termsConditions={termsConditions} />

            <TermsCTA />
        </div>
    )
}

export default TermsAndConditionPage