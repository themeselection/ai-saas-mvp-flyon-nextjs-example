'use client';

import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
    };

    const footerLinks = {
        product: [
            { name: 'Features', href: '#solution' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Templates', href: '#' },
            { name: 'AI Editors', href: '#' },
            { name: 'Voice Options', href: '#' },
            { name: 'Updates', href: '#' }

        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'News', href: '#' },
            { name: 'Media Kit', href: '#' },
            { name: 'Contact', href: '#' }
        ],
        resources: [
            { name: 'Blog', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Case Studies', href: '#' },
            { name: 'FAQ', href: '#' },
            { name: 'API Docs', href: '#' },
            { name: 'Status', href: '#' }
        ],
        social: [
            { name: 'Twitter', href: '#', icon: 'icon-[tabler--brand-twitter]' },
            { name: 'LinkedIn', href: '#', icon: 'icon-[tabler--brand-linkedin]' },
            { name: 'YouTube', href: '#', icon: 'icon-[tabler--brand-youtube]' },
            { name: 'Instagram', href: '#', icon: 'icon-[tabler--brand-instagram]' },
            { name: 'Discord', href: '#', icon: 'icon-[tabler--brand-discord]' },
            { name: 'TikTok', href: '#', icon: 'icon-[tabler--brand-tiktok]' }
        ],
        legal: [
            { name: 'Terms of Service', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Licensing', href: '#' },
            { name: 'GDPR', href: '#' },
            { name: 'Contact Us', href: '#' }

        ]
    };

    return (
        <footer className="bg-base-100 pt-10">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                {/* Newsletter Section */}
                <div className="mb-10 flex items-center justify-between gap-4 max-lg:flex-wrap">
                    <div>
                        <h3 className="text-base-content mb-2 text-2xl font-semibold">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-base-content/80">
                            Get AI video creation tips, new feature updates, and exclusive offers delivered to your inbox.
                        </p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input max-w-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary btn-gradient">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Footer Links Grid */}
                <div className="footer grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {/* Product */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/80 link link-animated hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/80 link link-animated hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/80 link link-animated hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Connect</h4>
                        <ul className="space-y-3">
                            {footerLinks.social.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/80 link link-animated hover:text-primary transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className={`${link.icon} size-4`}></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="gap-5">
                        <h4 className="text-base-content text-lg font-medium">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-base-content/80 link link-animated hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="via-primary/30 mx-auto h-px bg-gradient-to-r from-transparent to-transparent"></div>

            {/* Bottom Footer */}
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8">
                <a href="#" title="AI Video Generator" className="text-base-content flex items-center gap-3 text-xl font-bold">
                    <span className="icon-[tabler--video] text-primary size-8"></span>
                    <span>VideoAI</span>
                </a>
                <div className="text-base-content text-base text-wrap">
                    &copy; 2024 VideoAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
