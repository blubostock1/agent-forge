import { AlertCircle } from "lucide-react";

interface Props {
    title: string;
    description: string;
}

export const ErrorState = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <AlertCircle className="size-10 text-red-500" />   
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}