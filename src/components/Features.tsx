export default function Features() {
    const features = [
        {
            title: "AI Script Generation",
            description: "Generate compelling scripts automatically based on your topic, audience, and goals. Our AI understands storytelling and creates engaging content.",
            icon: "icon-[tabler--script]",
            color: "primary"
        },
        {
            title: "Smart Video Editing",
            description: "Advanced AI algorithms automatically edit your videos with perfect timing, smooth transitions, and professional pacing.",
            icon: "icon-[tabler--video]",
            color: "success"
        },
        {
            title: "AI Voice Synthesis",
            description: "Choose from dozens of natural-sounding AI voices in multiple languages. Perfect pronunciation and emotional tone every time.",
            icon: "icon-[tabler--microphone]",
            color: "info"
        },
        {
            title: "Auto Subtitles",
            description: "Automatically generate accurate subtitles in multiple languages with perfect timing and formatting for better accessibility.",
            icon: "icon-[tabler--sparkles]",
            color: "info"
        },
        {
            title: "Smart Templates",
            description: "Access hundreds of professionally designed templates that automatically adapt to your content and brand requirements.",
            icon: "icon-[tabler--template]",
            color: "error"
        },
        {
            title: "One-Click Export",
            description: "Export your videos in any format or resolution with a single click. Optimized for every platform from Instagram to YouTube.",
            icon: "icon-[tabler--download]",
            color: "accent"
        }
    ];

    return (
        <section className="bg-base-100 py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                    <div className="motion-preset-slide-up motion-duration-800 motion-opacity-in-0">
                        <span className="badge badge-primary badge-soft">AI-Powered Features</span>
                    </div>
                    <h2 className="text-base-content motion-preset-slide-up motion-duration-800 motion-opacity-in-0 motion-delay-200 text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Everything You Need to Create
                        <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
                            {' '}Professional Videos
                        </span>
                    </h2>
                    <p className="text-base-content/80 motion-preset-slide-up motion-duration-800 motion-opacity-in-0 motion-delay-400 mx-auto max-w-3xl text-xl">
                        Discover the powerful AI features that make video creation effortless, fast, and professional.
                        From intelligent editing to automated enhancement, we have got everything covered.
                    </p>
                    <div className="motion-preset-slide-up motion-duration-800 motion-opacity-in-0 motion-delay-600">
                        <a href="#" className="btn btn-primary btn-gradient btn-lg">
                            Try All Features Free
                            <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                        </a>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`card border-${feature.color}/30 hover:border-${feature.color} card-border group shadow-none transition-all duration-300`}
                        >
                            <div className="card-body">
                                <div className="avatar avatar-placeholder mb-4">
                                    <div className={`text-success bg-${feature.color}/10 size-12 rounded-full`}>
                                        <span className={`${feature.icon} size-7 text-${feature.color}`}></span>
                                    </div>
                                </div>
                                <h3 className="text-base-content text-xl font-semibold">{feature.title}</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features CTA */}
                <div className="mt-12 text-center sm:mt-16">
                    <a href="#" className="btn btn-primary btn-lg btn-gradient">
                        Explore All Features
                        <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                    </a>
                </div>
            </div>
        </section>
    );
}
