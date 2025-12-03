"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextRoll } from "@/components/ui/text-roll";
import { navigationLinks } from "@/lib/config/site";

export function VerticalNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Hamburger Button - Visible on small devices (< md) */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 pointer-events-auto"
                aria-label="Toggle menu"
            >
                <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-gray-300 rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-gray-300 rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-gray-300 rounded-full"
                />
            </motion.button>

            {/* Mobile Menu - Slide-out from right */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-64 bg-background/95 backdrop-blur-md border-l border-gray-800 z-40 md:hidden shadow-2xl"
                        >
                            <ul className="flex flex-col gap-6 items-end pt-24 pr-8">
                                {navigationLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={link.href} onClick={closeMenu}>
                                            <TextRoll className="text-xl font-extrabold text-gray-300 hover:text-primary transition-colors uppercase tracking-tight">
                                                {link.name}
                                            </TextRoll>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Navigation - Hidden on small devices (< md) */}
            <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden md:flex fixed top-0 right-0 z-50 h-screen flex-col mt-16 px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8 lg:mt-32 lg:px-10 xl:mt-36 xl:px-12 2xl:mt-40 2xl:px-16 pointer-events-none"
            >
                <ul className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6 items-end pointer-events-auto">
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <TextRoll className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-gray-300 hover:text-primary transition-colors uppercase tracking-tight">
                                    {link.name}
                                </TextRoll>
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </>
    );
}