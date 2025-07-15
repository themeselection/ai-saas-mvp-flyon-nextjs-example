export default function Pricing() {

    return (
        <div className="bg-base-100 py-8 sm:py-16 lg:py-24" id="pricing">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-6 sm:mb-16 lg:mb-24">
                    <div className="space-y-3 text-center">
                        <span className="badge badge-primary badge-soft">PRICING PLANS</span>
                        <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
                            Choose Your Perfect Plan
                        </h2>
                        <p className="text-base-content/80 mx-auto max-w-3xl text-xl">
                            Get started with AI-powered video creation today. Choose the plan that best fits your needs,
                            with flexible options for creators of all sizes.
                        </p>
                    </div>
                    {/* Toggle Count Component */}
                    <div className="flex justify-center">
                        <div id="toggle-card" className="bg-neutral/10 rounded-field w-fit p-1">
                            <label htmlFor="toggle-monthly" className="btn btn-text has-checked:text-bg-primary">
                                <span>Monthly</span>
                                <input id="toggle-monthly" name="toggle-card" type="radio" className="hidden" />
                            </label>
                            <label htmlFor="toggle-annual" className="btn btn-text has-checked:text-bg-primary">
                                <span>Yearly</span>
                                <input id="toggle-annual" name="toggle-card" type="radio" className="hidden" defaultChecked />
                            </label>
                        </div>
                    </div>
                </div>
                {/* Pricing Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Basic Plan */}
                    <div className="card card-border relative overflow-hidden shadow-none">
                        <div className="card-body space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-base-content text-2xl font-semibold">Basic</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="mb-auto text-lg font-medium">$</span>
                                    <span data-toggle-count='{"target": "#toggle-card", "min": 29, "max": 39}'
                                        className="text-base-content text-5xl font-bold">
                                        29
                                    </span>
                                    <span className="badge badge-soft badge-sm badge-primary text-nowrap">SAVE 25%</span>
                                </div>
                                <p className="text-base-content/80">per month, billed annually</p>
                            </div>
                            <div
                                className="bg-primary/10 border-primary/30 text-primary absolute -end-6 -top-6 flex size-28 items-center justify-center rounded-full border">
                                <span className="icon-[tabler--rocket] size-12 shrink-0"></span>
                            </div>
                            <button className="btn btn-soft btn-primary w-full">Start Free Trial</button>
                            <div>
                                <p className="text-base-content mb-3 text-lg font-medium">Perfect for individuals:</p>
                                <ul className="*:text-base-content/80 space-y-3 *:flex *:items-center *:gap-2">
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        5 videos per month
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        720p video quality
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        10 AI voice options
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Basic templates library
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Professional Plan */}
                    <div className="card border-primary relative overflow-hidden border-2 shadow-lg">
                        <div className="card-body space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-base-content text-2xl font-semibold">Professional</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="mb-auto text-lg font-medium">$</span>
                                    <span data-toggle-count='{"target": "#toggle-card", "min": 79, "max": 99}'
                                        className="text-base-content text-5xl font-bold">
                                        79
                                    </span>
                                    <span className="badge badge-soft badge-sm badge-primary text-nowrap">SAVE 30%</span>
                                </div>
                                <p className="text-base-content/80">per month, billed annually</p>
                            </div>
                            <div
                                className="bg-primary/10 border-primary/30 text-primary absolute -end-6 -top-6 flex size-28 items-center justify-center rounded-full border">
                                <span className="icon-[tabler--briefcase-2] size-12 shrink-0"></span>
                            </div>
                            <button className="btn btn-primary w-full">Start Free Trial</button>
                            <div>
                                <p className="text-base-content mb-3 text-lg font-medium">Great for businesses:</p>
                                <ul className="*:text-base-content/80 space-y-3 *:flex *:items-center *:gap-2">
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        20 videos per month
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        1080p video quality
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        40+ AI voice options
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Premium templates
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Brand customization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Enterprise Plan */}
                    <div className="card card-border relative overflow-hidden shadow-none md:col-span-2 lg:col-span-1">
                        <div className="card-body space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-base-content text-2xl font-semibold">Enterprise</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="mb-auto text-lg font-medium">$</span>
                                    <span data-toggle-count='{"target": "#toggle-card", "min": 199, "max": 249}'
                                        className="text-base-content text-5xl font-bold">
                                        199
                                    </span>
                                    <span className="badge badge-soft badge-sm badge-primary text-nowrap">SAVE 35%</span>
                                </div>
                                <p className="text-base-content/80">per month, billed annually</p>
                            </div>
                            <div
                                className="bg-primary/10 border-primary/30 text-primary absolute -end-6 -top-6 flex size-28 items-center justify-center rounded-full border">
                                <span className="icon-[tabler--crown] size-12 shrink-0"></span>
                            </div>
                            <button className="btn btn-soft btn-primary w-full">Contact Sales</button>
                            <div>
                                <p className="text-base-content mb-3 text-lg font-medium">For large teams:</p>
                                <ul className="*:text-base-content/80 space-y-3 *:flex *:items-center *:gap-2">
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Unlimited videos
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        4K video quality
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Custom voice cloning
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Custom templates
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        API access
                                    </li>
                                    <li>
                                        <span className="icon-[tabler--check] size-5 shrink-0 rtl:rotate-y-180"></span>
                                        Dedicated support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 text-center">
                    <p className="text-base-content/80 mx-auto max-w-2xl mb-6 text-lg">
                        Have questions about our pricing? Check our <a href="#" className="text-primary hover:underline">FAQ</a> or{' '}
                        <a href="#" className="text-primary hover:underline">contact our team</a>.
                    </p>
                    <p className="text-base-content/60">
                        All plans include a 14-day free trial • No credit card required
                    </p>
                </div>
            </div>
        </div>
    );
}
