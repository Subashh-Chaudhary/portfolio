"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextRoll } from "@/components/ui/text-roll";
import { navigationLinks } from "@/lib/config/site";

export function VerticalNav() {
    return (
        <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed top-0 right-0 z-50 h-screen flex flex-col mt-16 px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8 lg:mt-32 lg:px-10 xl:mt-36 xl:px-12 2xl:mt-40 2xl:px-16 pointer-events-none"
        >
            <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 items-end pointer-events-auto">
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
    );
}
