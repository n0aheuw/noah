import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World/>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
    <div className="fixed inset-0 z-50 bg-[rgba(var(--quaternary-color-rgb),1)] text-tertiary flex flex-col items-center justify-center">

        <div className="mb-4 text-4xl font-mono font-bold">
            {text}<span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-[200px] h-[2px] bg-[rgba(var(--quinary-color-rgb),1)] rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-[rgba(var(--tertiary-color-rgb),1)] shadow-[0_0_15px_rgba(var(--tertiary-color-rgb),0.8)] animate-loading-bar">
                {""}
            </div>
        </div>



    </div>
    );
}