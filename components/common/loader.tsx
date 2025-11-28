export function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-primary/20 rounded-full" />
            </div>
        </div>
    )
}
