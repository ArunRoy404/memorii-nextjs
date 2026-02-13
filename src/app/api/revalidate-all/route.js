import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const secret = searchParams.get('secret')

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ messgae: 'Unauthorized' }, { status: 401 })
    }

    const tags = [
        'sections',
        'slider',
        'work-steps',
        'faqs',
        'footer',
        'legal',
        'about',
        'cta',
        'how-it-works',
        'contact',
        'summary'
    ];

    try {
        tags.forEach(tag => revalidateTag(tag))

        return NextResponse.json({
            revalidated: true,
            message: 'All CMS data refreshed successfully',
            tags
        })
    } catch (error) {
        return NextResponse.json({
            revalidated: false,
            message: 'Failed to refresh CMS data',
            error: error.message
        }, { status: 500 })
    }
}