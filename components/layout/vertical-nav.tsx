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
            className="fixed top-0 right-0 z-50 h-screen flex flex-col justify-center px-8 pointer-events-none"
        >
            <ul className="flex flex-col gap-6 items-end pointer-events-auto">
                {navigationLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>
                            <TextRoll className="text-4xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-tight">
                                {link.name}
                            </TextRoll>
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
