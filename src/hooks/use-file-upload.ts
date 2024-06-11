import { fileToBase64 } from "@/lib/file";
import { useRef, useState } from "react";

export function useFileUpload() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [base64, setBase64] = useState('');
    const [fileExtension, setFileExtension] = useState('');

    const handleFileChange = async () => {
        if (!fileInputRef.current) return;

        const file = fileInputRef.current.files?.[0];
        if (!file) return;

        try {
            const base64String = await fileToBase64(file);
            setBase64(base64String);

            const extension = file.name.split('.').pop();
            if (extension) {
                setFileExtension(extension);
            }
        } catch (error) {
            console.error('Error converting file to base64:', error);
        }
    };

    return {
        fileInputRef,
        base64,
        fileExtension,
        handleFileChange,
    };
}