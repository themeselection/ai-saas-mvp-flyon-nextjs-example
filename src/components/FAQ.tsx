'use client';

import AccordionItem from '@/components/AccordionItem';

export default function FAQ() {


    const faqs = [
        {
            id: 'how-it-works',
            question: 'How does the AI video creation process work?',
            answer: 'Our AI analyzes your text input to understand the context, tone, and requirements. It then generates a script, selects appropriate visuals from our vast library, creates natural-sounding voiceovers, and automatically edits everything together. The entire process typically takes 2-5 minutes depending on video length and complexity.'
        },
        {
            id: 'creation-time',
            question: 'How long does it take to create a video?',
            answer: 'Most videos are generated within 2-5 minutes. Simple videos with basic templates can be ready in under 2 minutes, while more complex videos with custom requirements may take up to 5 minutes. This is still exponentially faster than traditional video production methods.'
        },
        {
            id: 'quality-formats',
            question: 'What video quality and formats are supported?',
            answer: 'We support multiple quality options from 720p HD up to 8K (depending on your plan). Export formats include MP4, MOV, AVI, and WebM. We also provide platform-specific optimizations for YouTube, Instagram, TikTok, LinkedIn, and other social media platforms.'
        },
        {
            id: 'free-trial',
            question: 'Is there a free trial available?',
            answer: 'Yes! We offer a 14-day free trial with no credit card required. During the trial, you can create up to 3 videos and access most features. This gives you plenty of time to explore our platform and see if it meets your needs.'
        },
        {
            id: 'voice-options',
            question: 'Can I use my own voice or customize the AI voices?',
            answer: 'Our Professional and Enterprise plans include access to premium AI voices in multiple languages and accents. Enterprise customers can also create custom voice clones. Additionally, you can upload your own audio files or record directly within the platform for any plan.'
        }
    ];

    return (
        <div className="bg-base-200 py-8 sm:py-16 lg:py-24" id="faq">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* FAQ Header */}
                <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                    <span className="badge badge-primary badge-soft">FAQ</span>
                    <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base-content/80 text-xl">
                        Get answers to common questions about our AI video creation platform.
                    </p>
                </div>

                <div className="accordion divide-neutral/20 mx-auto max-w-3xl w-full divide-y">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} >
                            <AccordionItem
                                isActive={index === 0} // Set the first item as active by default
                                title={faq.question}
                                content={faq.answer}
                            />
                        </div>
                    ))}
                </div>

                {/* Support Link */}
                <div className="mt-12 text-center">
                    <p className="text-base-content/80 mx-auto max-w-2xl mb-6 text-lg">
                        Still have questions? Our support team is here to help!
                    </p>
                    <a href="#" className="btn btn-primary btn-gradient">
                        Contact Support
                        <span className="icon-[tabler--message-circle] size-5 shrink-0"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}
