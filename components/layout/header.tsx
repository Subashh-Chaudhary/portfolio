'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { navigationLinks } from '@/lib/config/site'
import { cn } from '@/lib/utils/cn'

export function Header() {
    const pathname = usePathname()

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            ST.
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navigationLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'relative text-sm font-medium transition-colors hover:text-primary',
                                            isActive ? 'text-primary' : 'text-muted-foreground'
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNavItem"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                                initial={false}
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Mobile Menu Button (placeholder) */}
                    <button className="md:hidden p-2">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </motion.header>
    )
}
