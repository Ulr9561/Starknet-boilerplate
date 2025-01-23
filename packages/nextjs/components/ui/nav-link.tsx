import { cn } from "@/lib/utils";
import Link from "next/link";


interface NavLinkProps {
    href: string,
    className?: string,
    children: React.ReactNode
}
export default function NavLink({ href, className, children }: NavLinkProps) {
    return (
        <Link href={href} className={cn(
            "no-underline",
            className
        )}>
            {children}
        </Link>
    )
}