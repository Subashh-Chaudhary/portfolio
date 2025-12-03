import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface PageWrapperProps {
    children: ReactNode
    className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <main>
            {children}
        </main>
    )
}
