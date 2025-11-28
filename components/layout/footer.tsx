'use client'

import Link from 'next/link'
import { socialLinks } from '@/data/personal'
import { Github, Linkedin, Twitter } from 'lucide-react'

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Subash Tharu</h3>
                        <p className="text-sm text-muted-foreground">
                            Full Stack Developer crafting exceptional digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/work"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.slice(0, 3).map((link) => {
                                const Icon = iconMap[link.platform as keyof typeof iconMap]
                                return Icon ? (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ) : null
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground">
                        © {currentYear} Subash Tharu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
