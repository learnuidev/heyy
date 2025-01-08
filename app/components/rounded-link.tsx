import { cn } from "@/lib/utils";
import Link from "next/link";

export const RoundedLink = ({
  children,
  href,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "mt-4 inline-block border-[1px] px-4 py-2 rounded-full",
        className
      )}
    >
      {children}
    </Link>
  );
};
