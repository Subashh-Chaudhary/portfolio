'use client'

import { footer } from '@/data/footer'
import { div } from 'framer-motion/client'
import { Github, Linkedin, Twitter } from 'lucide-react'

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
}

export function Footer() {
    const leftColumn = footer.find(item => item.id === '1')
    const middleColumn = footer.find(item => item.id === '2')
    const socialLinks = footer.find(item => item.id === '3')

    return (
        // <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md">
        //     <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-5">
        //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-6 items-center">
        //             {/* Left - Location */}
        //             <div className="text-center sm:text-left">
        //                 <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-muted-foreground tracking-wide">
        //                     {leftColumn?.href}
        //                 </p>
        //             </div>

        //             {/* Center - Copyright */}
        //             <div className="text-center">
        //                 <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium text-muted-foreground">
        //                     {middleColumn?.href}
        //                 </p>
        //             </div>

        //             {/* Right - Social Links */}
        //             <div className="flex gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-5 justify-center sm:justify-end">
        //                 {socialLinks?.links?.map((link) => {
        //                     const Icon = iconMap[link.icon as keyof typeof iconMap]
        //                     return Icon ? (
        //                         <a
        //                             key={link.id}
        //                             href={link.href}
        //                             target="_blank"
        //                             rel="noopener noreferrer"
        //                             className="text-muted-foreground hover:text-primary transition-colors"
        //                             aria-label={link.name}
        //                         >
        //                             <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
        //                         </a>
        //                     ) : null
        //                 })}
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        /* Bottom Bar */
        <footer className="fixed bottom-0 left-0 right-0 w-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-2 md:gap-0 z-20 bg-black/90 backdrop-blur-md">
            <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm text-gray-500 pointer-events-auto order-2 md:order-1">
                <span className="text-blue-500">●</span> AVAILABLE FOR HIRE
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm text-gray-500 pointer-events-auto order-3 md:order-2 text-center md:text-left">
                Developer based in Lalitpur, Nepal
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 pointer-events-auto order-1 md:order-3 mb-1 md:mb-0">
                {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
                    <a
                        key={social}
                        href="#"
                        className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-mono text-gray-500 hover:text-white transition-colors"
                    >
                        {social}
                    </a>
                ))}
            </div>
        </footer>
    )
}
