export default function Problem() {
    return (
        <div className="bg-base-100 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="badge badge-soft mb-4">THE CHALLENGE</span>
                    <h2 className="text-base-content mb-6 text-3xl font-bold md:text-4xl">
                        The Problem with Traditional
                        <span className="text-error"> Video Creation</span>
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-lg">
                        Despite being the most effective content format, creating professional videos remains
                        out of reach for most businesses and creators.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Time Challenge */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-error bg-error/10 size-12 rounded-full">
                                    <span className="icon-[tabler--clock] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">Time-Consuming</h3>
                        </div>
                        <p className="text-base-content/80">
                            Traditional video production takes weeks to complete, requiring extensive time for
                            scripting, filming, and editing, making it impractical for regular content creation.
                        </p>
                    </div>

                    {/* Cost Challenge */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-error bg-error/10 size-12 rounded-full">
                                    <span className="icon-[tabler--cash] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">Expensive</h3>
                        </div>
                        <p className="text-base-content/80">
                            Professional video production costs thousands of dollars per video, making it prohibitively
                            expensive for small businesses, startups, and individual creators.
                        </p>
                    </div>

                    {/* Expertise Challenge */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-error bg-error/10 size-12 rounded-full">
                                    <span className="icon-[tabler--school] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">Skill Barriers</h3>
                        </div>
                        <p className="text-base-content/80">
                            Creating quality videos requires technical expertise in filming, lighting, sound, and
                            complex editing software, creating a steep learning curve for most people.
                        </p>
                    </div>
                </div>

                {/* Market Reality */}
                <div className="mt-12 text-center">
                    <p className="text-base-content/80 mx-auto max-w-2xl">
                        <span className="font-semibold">The result?</span> Most businesses know they need video content
                        but can&#39;t produce it consistently, missing out on the most engaging content format available.
                    </p>
                    <a href="#solution" className="btn btn-primary mt-6">
                        See the Solution
                        <span className="icon-[tabler--arrow-down] size-5"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}
