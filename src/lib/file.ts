export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                const base64String = reader.result.toString().split(',')[1] || '';
                resolve(base64String);
            } else {
                reject(new Error('Failed to read file as base64'));
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
