'use client'

import { socialLinks } from '@/data/personal'
import { Github, Linkedin, Twitter } from 'lucide-react'

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
}

export function Footer() {
    // Filter to only show github, linkedin, and twitter
    const displayedSocials = socialLinks.filter(link =>
        ['github', 'linkedin', 'twitter'].includes(link.platform)
    )

    return (
        /* Bottom Bar - optimized with content-visibility */
        <footer
            className="fixed bottom-0 left-0 right-0 w-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-2 md:gap-0 z-20 bg-black/90 backdrop-blur-md"
            style={{ contentVisibility: 'auto' }}
        >
            <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm text-gray-500 pointer-events-auto order-2 md:order-1">
                <span className="text-blue-500">●</span> AVAILABLE FOR HIRE
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm text-gray-500 pointer-events-auto order-3 md:order-2 text-center md:text-left">
                Developer based in Lalitpur, Nepal
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 pointer-events-auto order-1 md:order-3 mb-1 md:mb-0">
                {displayedSocials.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-mono text-gray-500 hover:text-white transition-colors"
                    >
                        {social.platform.toUpperCase()}
                    </a>
                ))}
            </div>
        </footer>
    )
}
