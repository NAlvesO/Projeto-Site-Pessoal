interface SectionCardProps {
    children: React.ReactNode;
}

export function SectionCard ({children}:SectionCardProps) {
    return (
        <div className="bg-purple-700 h-screen">
            {children}
        </div>
    )
}
