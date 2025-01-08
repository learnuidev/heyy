import { cn } from "@/lib/utils";
import Link from "next/link";
import { WithRounded } from "./with-roundex";

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
    <WithRounded>
      <Link href={href} className={cn(className)}>
        {children}
      </Link>
    </WithRounded>
  );
};
