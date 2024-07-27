import Image from 'next/image';

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className = "h-full p-20 flex flex-col items-center justify-center">
            <div className="w-10 h-10 relative">
                <Image
                    alt = "Empty"
                    fill
                    src = "/logo_crop.png"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    )
}