export default function Solution() {
    return (
        <div id="solution" className="bg-base-200 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="badge badge-primary badge-soft mb-4">THE SOLUTION</span>
                    <h2 className="text-base-content mb-6 text-3xl font-bold md:text-4xl">
                        <span className="text-primary">AI-Powered</span> Video Creation
                    </h2>
                    <p className="text-base-content/80 mx-auto max-w-3xl text-lg">
                        Our AI video platform transforms what was once complex, expensive, and time-consuming into
                        a simple, affordable, and fast process that anyone can use.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Speed Solution */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-primary bg-primary/10 size-12 rounded-full">
                                    <span className="icon-[tabler--rocket] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">Fast Creation</h3>
                        </div>
                        <p className="text-base-content/80">
                            Create professional-quality videos in minutes instead of weeks. Our AI handles scripting,
                            editing, and voiceovers automatically, saving you countless hours.
                        </p>
                    </div>

                    {/* Cost Solution */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-primary bg-primary/10 size-12 rounded-full">
                                    <span className="icon-[tabler--coin] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">Affordable</h3>
                        </div>
                        <p className="text-base-content/80">
                            Produce videos for a fraction of traditional costs. No need for expensive equipment or
                            professional editors—just a simple subscription that fits any budget.
                        </p>
                    </div>

                    {/* Ease Solution */}
                    <div className="bg-base-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar avatar-placeholder">
                                <div className="text-primary bg-primary/10 size-12 rounded-full">
                                    <span className="icon-[tabler--click] size-6"></span>
                                </div>
                            </div>
                            <h3 className="text-base-content text-xl font-semibold">No Skills Required</h3>
                        </div>
                        <p className="text-base-content/80">
                            Simply describe what you want in plain English, and our AI handles all the technical
                            aspects. No learning curve, no special training—just instant results.
                        </p>
                    </div>
                </div>

                {/* Comparison */}
                <div className="mt-12 bg-base-100 rounded-xl p-6 shadow-md">
                    <h3 className="text-base-content text-center text-xl font-semibold mb-6">
                        Traditional vs. AI-Powered Video Creation
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th className="text-base-content">Aspect</th>
                                    <th className="text-error">Traditional Method</th>
                                    <th className="text-success">Our AI Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium">Time to Create</td>
                                    <td>2-3 weeks</td>
                                    <td>5-10 minutes</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Cost per Video</td>
                                    <td>$2,000 - $10,000+</td>
                                    <td>$10 - $50</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Skills Required</td>
                                    <td>High technical expertise</td>
                                    <td>None - just describe your idea</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Equipment Needed</td>
                                    <td>Cameras, lights, microphones</td>
                                    <td>Just a computer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a href="#" className="btn btn-primary btn-lg">
                        <span className="icon-[tabler--sparkles] size-5 mr-2"></span>
                        Start Creating Videos Now
                    </a>
                    <p className="text-base-content/70 mt-3">No credit card required • Free trial available</p>
                </div>
            </div>
        </div>
    );
}
