import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface PageWrapperProps {
    children: ReactNode
    className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <main className={cn("min-h-screen pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40", className)}>
            {children}
        </main>
    )
}
