import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface PageWrapperProps {
    children: ReactNode
    className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <main className={cn('container mx-auto px-4 py-24 min-h-screen', className)}>
            {children}
        </main>
    )
}
