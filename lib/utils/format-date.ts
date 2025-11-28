/**
 * Format a date string into a readable format
 */
export function formatDate(date: string, includeDay = false): string {
    const d = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        ...(includeDay && { day: 'numeric' }),
    }
    return d.toLocaleDateString('en-US', options)
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(startDate: string, endDate?: string): string {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()

    const months = (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth())

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
        return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    }

    if (remainingMonths === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`
    }

    return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
}

/**
 * Get relative time (e.g., "2 months ago")
 */
export function getRelativeTime(date: string): string {
    const d = new Date(date)
    const now = new Date()
    const diffInMs = now.getTime() - d.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) return 'Today'
    if (diffInDays === 1) return 'Yesterday'
    if (diffInDays < 30) return `${diffInDays} days ago`
    if (diffInDays < 365) {
        const months = Math.floor(diffInDays / 30)
        return `${months} month${months !== 1 ? 's' : ''} ago`
    }

    const years = Math.floor(diffInDays / 365)
    return `${years} year${years !== 1 ? 's' : ''} ago`
}
