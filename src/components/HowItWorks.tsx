export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Describe Your Vision",
            description: "Simply tell our AI what kind of video you want to create. Describe your topic, target audience, style, and any specific requirements in plain English.",
            icon: "icon-[tabler--pencil]",
            color: "primary",
        },
        {
            number: "02",
            title: "AI Generation",
            description: "Our advanced AI gets to work, creating your script, selecting visuals, generating voiceovers, and editing everything together with professional quality.",
            icon: "icon-[tabler--sparkles]",
            color: "error",
        },
        {
            number: "03",
            title: "Review & Export",
            description: "Preview your video, make any adjustments you need, and export in your preferred format. Ready to share across all your platforms in minutes.",
            icon: "icon-[tabler--download]",
            color: "accent"
        }
    ];

    return (
        <section id="how-it-works" className="bg-base-200 py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
                    <div className="motion-preset-slide-up motion-duration-800 motion-opacity-in-0">
                        <span className="badge badge-primary badge-soft">Simple 3-Step Process</span>
                    </div>
                    <h2 className="text-base-content motion-preset-slide-up motion-duration-800 motion-opacity-in-0 motion-delay-200 text-2xl font-semibold md:text-3xl lg:text-4xl">
                        How
                        <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
                            {' '}AI Video Creation{' '}
                        </span>
                        Works
                    </h2>
                    <p className="text-base-content/80 motion-preset-slide-up motion-duration-800 motion-opacity-in-0 motion-delay-400 mx-auto max-w-3xl text-xl">
                        Creating professional videos has never been easier. Follow these three simple steps to transform
                        your ideas into stunning videos in minutes.
                    </p>
                </div>

                {/* Process Steps Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`card bg-${step.color}/10 border-${step.color}/20 hover:border-${step.color} group card-border shadow-none transition-all duration-300`}
                            role="article"
                        >
                            <div className="card-body">
                                {/* Step Number */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="avatar avatar-placeholder">
                                        <div className="text-primary shadow-primary/30 w-11 rounded-full bg-white shadow-sm">
                                            <span className={`${step.icon} text-${step.color} size-7`}></span>
                                        </div>
                                    </div>
                                    <span className={`badge badge-${step.color} badge-soft`}>Step {index + 1}</span>

                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className={`text-xl font-semibold text-${step.color} transition-colors`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-base-content/80 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <a href="#" className={`btn btn-soft btn-${step.color} rounded-full transition-all`}
                                        aria-label="Learn more about describing your vision">
                                        See Examples
                                        <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"
                                            aria-hidden="true"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-base-content/80 mx-auto max-w-2xl mb-6 text-lg">
                        From concept to finished video in minutes, not days. Our AI handles all the technical details so
                        you can focus on creating amazing content.
                    </p>
                    <a href="#" className="btn btn-primary btn-gradient btn-lg">
                        Try It Free
                        <span className="icon-[tabler--video-plus] size-5 shrink-0"></span>
                    </a>
                    <p className="text-base-content/60 mt-3">No credit card required • 3 free videos</p>
                </div>
            </div>
        </section>
    );
}
