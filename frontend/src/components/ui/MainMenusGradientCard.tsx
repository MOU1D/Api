"use client";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/utils/cn";

export const MainMenusGradientCard = ({
    title,
    description,
    withArrow = false,
    circleSize = 400,
    className,
    children,
    size = "md",
}: {
    title: string;
    description?: string;
    withArrow?: boolean;
    circleSize?: number;
    children?: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
}) => {
    const [mouse, parentRef] = useMouse();

    return (
        <div
            className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90"
            ref={parentRef}
        >
            {withArrow && (
                <ArrowUpRight className="absolute top-2 right-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
            )}

            {/* GRADIENT EXACTEMENT COMME L'ORIGINAL MAIS PLUS VIVE */}
            <div
                className={cn(
                    "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
                    mouse.elementX === null || mouse.elementY === null
                        ? "opacity-0"
                        : "opacity-100",
                )}
                style={{
                    maskImage: `radial-gradient(${circleSize / 2
                        }px circle at center, white, transparent)`,
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    left: `${mouse.elementX}px`,
                    top: `${mouse.elementY}px`,
                    background:
                        "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
                }}
            />

            {/* FOND EXACTEMENT COMME L'ORIGINAL */}
            <div className="absolute inset-px rounded-[19px] bg-neutral-100/80" />

            {children && (
                <div
                    className={cn(
                        "relative h-40 place-content-center overflow-hidden rounded-[15px] border-white bg-white/70",
                        className,
                    )}
                >
                    {children}
                </div>
            )}

            {/* CONTENU EXACTEMENT COMME L'ORIGINAL */}
            <div className="relative px-4 pt-4 pb-2">
                <h3 className="font-semibold text-lg text-neutral-800">
                    {title}
                </h3>
                {description && (
                    <p className="mt-2 text-neutral-600">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};