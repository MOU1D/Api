import { useEffect, useRef, useState } from "react";

export const useMouse = () => {
    const [mouse, setMouse] = useState({
        elementX: null as number | null,
        elementY: null as number | null,
        elementPositionX: null as number | null,
        elementPositionY: null as number | null,
        clientX: null as number | null,
        clientY: null as number | null,
    });

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setMouse({
                    elementX: e.clientX - rect.left,
                    elementY: e.clientY - rect.top,
                    elementPositionX: rect.left,
                    elementPositionY: rect.top,
                    clientX: e.clientX,
                    clientY: e.clientY,
                });
            }
        };

        const handleMouseLeave = () => {
            setMouse({
                elementX: null,
                elementY: null,
                elementPositionX: null,
                elementPositionY: null,
                clientX: null,
                clientY: null,
            });
        };

        const element = ref.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                element.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    return [mouse, ref] as const;
};