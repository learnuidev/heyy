import { cn } from "@/lib/utils";

export const WithRounded = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "mt-4 inline-block border-[1px] px-4 py-2 rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
};
