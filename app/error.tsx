'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                We're sorry, but something unexpected happened. Please try again or go back to the home
                page.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}
