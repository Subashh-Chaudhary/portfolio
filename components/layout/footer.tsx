'use client'

import { footer } from '@/data/footer'
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
        <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md">
            <div className="mx-auto px-12 py-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Left - Location */}
                    <div className="text-left">
                        <p className="text-xs font-medium text-muted-foreground tracking-wide">
                            {leftColumn?.href}
                        </p>
                    </div>

                    {/* Center - Copyright */}
                    <div className="text-center">
                        <p className="text-xs font-medium text-muted-foreground">
                            {middleColumn?.href}
                        </p>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex gap-4 justify-end">
                        {socialLinks?.links?.map((link) => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap]
                            return Icon ? (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={link.name}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ) : null
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
