import Image from "next/image";

export default function Hero() {
    return (
        <main className="from-primary/10 to-base-100 bg-linear-to-br pt-40 pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-8 max-lg:items-center max-lg:text-center">
                        {/* AI Badge */}
                        <div className="bg-base-200 border-primary/20 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 flex w-fit items-center gap-2.5 rounded-full border px-4 py-2.5">
                            <span className="badge badge-primary shrink-0 rounded-full">AI-Powered</span>
                            <span className="text-base-content/80 font-medium">Next-Generation Video Creation</span>
                        </div>

                        {/* Main Heading */}
                        <div className="flex flex-col gap-4">
                            <h1 className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-400 text-5xl leading-[1.1] font-bold text-balance max-md:text-3xl lg:text-6xl">
                                Create
                                <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
                                    {' '}Professional Videos{' '}
                                </span>
                                with AI in Minutes
                            </h1>
                            <p className="text-base-content/80 motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-800 text-lg leading-relaxed">
                                Transform your ideas into stunning videos with our AI-powered video generator. No
                                editing skills required - just describe your vision and watch it come to life.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-1200 flex gap-4 max-sm:flex-col sm:items-center">
                            <a href="#" className="btn btn-primary btn-gradient btn-lg w-fit">
                                Start Creating Videos
                                <span className="icon-[tabler--sparkles] size-5 shrink-0"></span>
                            </a>
                            <a href="#" className="btn btn-soft btn-primary btn-lg w-fit">
                                Watch Demo
                                <span className="icon-[tabler--play] size-5 shrink-0"></span>
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="divider divider-dashed motion-preset-slide-fade motion-duration-900 motion-delay-1600 max-lg:hidden"></div>
                        <div className="motion-preset-slide-right-md motion-duration-900 motion-opacity-in-0 motion-delay-2000 flex items-center gap-4 max-lg:justify-center">
                            <div className="avatar-group pull-up -space-x-4">
                                <div className="tooltip">
                                    <div className="tooltip-toggle avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
                                        <div className="w-12">
                                            <Image src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="User" width={48} height={48} />
                                        </div>
                                    </div>
                                    <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
                                        <span className="tooltip-body">Sarah M. - Content Creator</span>
                                    </span>
                                </div>
                                <div className="tooltip">
                                    <div className="tooltip-toggle avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
                                        <div className="w-12">
                                            <Image src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png" alt="User" width={48} height={48} />
                                        </div>
                                    </div>
                                    <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
                                        <span className="tooltip-body">Mike R. - Marketing Director</span>
                                    </span>
                                </div>
                                <div className="tooltip">
                                    <div className="tooltip-toggle avatar hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
                                        <div className="w-12">
                                            <Image src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="User" width={48} height={48} />
                                        </div>
                                    </div>
                                    <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
                                        <span className="tooltip-body">Emma L. - YouTuber</span>
                                    </span>
                                </div>
                                <div className="tooltip cursor-default">
                                    <div className="tooltip-toggle avatar avatar-placeholder hover:motion-scale-out-110 motion-ease-spring-smooth hover:z-30">
                                        <div className="bg-primary text-primary-content w-12 text-xs font-bold">
                                            <span>+10K</span>
                                        </div>
                                    </div>
                                    <span className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible" role="tooltip">
                                        <span className="tooltip-body">10K+ Happy Creators</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-start">
                                <div className="flex items-center gap-1">
                                    <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                    <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                    <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                    <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                    <span className="icon-[tabler--star-filled] text-warning size-5 shrink-0"></span>
                                    <span className="text-base-content/80 ml-1 text-sm font-medium">5.0</span>
                                </div>
                                <span className="text-base-content/60 text-sm">From 10,000+ creators</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Simple Video Preview */}
                    <div className="relative flex items-center justify-center max-lg:mt-8">
                        {/* Subtle Background */}
                        <div className="from-primary/5 to-secondary/5 absolute -z-10 h-96 w-96 rounded-full bg-linear-to-br blur-3xl opacity-50"></div>

                        {/* Main Video Interface */}
                        <div className="motion-preset-slide-left motion-duration-800 motion-opacity-in-0 motion-delay-1600 relative max-w-lg w-full">
                            {/* Video Preview Card */}
                            <div className="bg-base-100 shadow-base-300/20 rounded-2xl overflow-hidden p-6 shadow-xl">
                                {/* Simple Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="icon-[tabler--video] text-primary size-6"></span>
                                    <div>
                                        <h3 className="text-base-content font-semibold text-lg">Your AI Video</h3>
                                        <p className="text-base-content/60 text-sm">Ready to export</p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="badge badge-success badge-soft">Ready</span>
                                    </div>
                                </div>

                                {/* Video Preview */}
                                <div className="relative mb-4">
                                    <div className="bg-base-200 rounded-xl aspect-video overflow-hidden relative group cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="AI Generated Video Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <button className="btn btn-circle btn-primary btn-lg">
                                                <span className="icon-[tabler--play] size-6"></span>
                                            </button>
                                        </div>
                                        {/* Duration */}
                                        <div className="absolute bottom-3 right-3">
                                            <span className="badge badge-neutral/90 text-xs">2:30</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Simple Action Button */}
                                <button className="btn btn-primary btn-gradient w-full">
                                    <span className="icon-[tabler--download] size-4 mr-2"></span>
                                    Download Video
                                </button>
                            </div>

                            {/* Simple Stats - Clean and Clear */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-base-100 rounded-xl p-4 text-center shadow-sm">
                                    <div className="text-success text-2xl font-bold">2.5M+</div>
                                    <div className="text-base-content/60 text-sm">Videos Created</div>
                                </div>
                                <div className="bg-base-100 rounded-xl p-4 text-center shadow-sm">
                                    <div className="text-info text-2xl font-bold">3 Min</div>
                                    <div className="text-base-content/60 text-sm">Average Time</div>
                                </div>
                            </div>

                            {/* Simple Feature List */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="icon-[tabler--check] text-success size-4"></span>
                                    <span className="text-base-content/80">AI-powered video generation</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="icon-[tabler--check] text-success size-4"></span>
                                    <span className="text-base-content/80">Professional quality output</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="icon-[tabler--check] text-success size-4"></span>
                                    <span className="text-base-content/80">Export in multiple formats</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
