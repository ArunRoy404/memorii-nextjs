import { AlertCircleIcon, CheckCircleIcon } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


export default function CommonAlert({ alert }) {
    const messaage = alert?.message
    const type = alert?.type
    const errors = alert?.errors

    return (
        <Alert variant={type === "success" ? "success" : "destructive"}>
            {type === "success" ? <CheckCircleIcon /> : <AlertCircleIcon />}
            <AlertTitle className={`${type === "success" ? "text-green-600" : ""}`}>{messaage}</AlertTitle>
            <AlertDescription>
                {
                    errors && (
                        <ul className="list-inside list-disc text-sm">
                            {
                                Object.keys(errors).map((key) => (
                                    <li key={key}>{errors[key]}</li>
                                ))
                            }
                        </ul>
                    )
                }
            </AlertDescription>
        </Alert>
    );
}