import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterLinkProps {
    href: string;
    children: ReactNode;
    external?: boolean;
}

export default function FooterLink({ href, children, external }: FooterLinkProps) {
    const className = "text-gray-400 hover:text-white transition-colors";

    if (external) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
} 