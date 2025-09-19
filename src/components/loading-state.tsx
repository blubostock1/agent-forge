import { Loader2 } from "lucide-react";

interface Props {
    title: string;
    description: string;
}

export const LoadingState = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Loader2 className="size-10 animate-spin" />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}