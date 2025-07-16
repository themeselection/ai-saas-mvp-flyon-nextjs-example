'use client';

import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            // Section IDs in order of appearance
            const sectionIds = [
                'solution',
                'features',
                'how-it-works',
                'pricing',
                'faq',
            ];
            let current = '';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom > 80) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-10 w-full py-0.25 transition-all duration-300 ${isScrolled ? 'bg-base-100 shadow-md shadow-base-300/20' : ''
                }`}
            id="header"
        >
            <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:bg-transparent lg:px-8">
                <div className="w-full lg:flex lg:items-center lg:gap-2">
                    <div className="navbar-start items-center justify-between max-lg:w-full">
                        <a className="text-base-content flex items-center gap-3 text-xl font-bold" href="#top">
                            <span className="icon-[tabler--video] text-primary size-8"></span>
                            VideoAI
                        </a>
                        <div className="flex items-center gap-4 lg:hidden">
                            <a href="#pricing" className="btn btn-primary">Get Started</a>
                            <button
                                type="button"
                                className="collapse-toggle btn btn-outline btn-secondary btn-square"
                                data-collapse="#navbar-main"
                                aria-controls="navbar-main"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5"></span>
                                <span className="icon-[tabler--x] collapse-open:block hidden size-5.5"></span>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-main"
                        className="lg:navbar-center transition-height collapse hidden grow overflow-hidden font-medium duration-300 lg:flex"
                    >
                        <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
                            <a
                                href="#solution"
                                className={`hover:text-primary transition-colors duration-300 ${activeSection === 'solution' ? 'text-error' : ''}`}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className={`hover:text-primary transition-colors duration-300 ${activeSection === 'how-it-works' ? 'text-error' : ''}`}
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className={`hover:text-primary transition-colors duration-300 ${activeSection === 'pricing' ? 'text-error' : ''}`}
                            >
                                Pricing
                            </a>
                            <a
                                href="#faq"
                                className={`hover:text-primary transition-colors duration-300 ${activeSection === 'faq' ? 'text-error' : ''}`}
                            >
                                FAQ
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end max-lg:hidden">
                        <div className="flex items-center gap-3">
                            <a href="#" className="btn btn-soft btn-primary">Sign In</a>
                            <a href="#pricing" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
