interface SectionCardProps {
    children: React.ReactNode;
}

export function CardSection ({children}:SectionCardProps) {
    return (
        <div className="bg-purple-700">
            {children}
        </div>
    )
}
