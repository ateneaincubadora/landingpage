import { cn } from "@/utils/cn";

interface BoxProps {
  className?: string;
  children: React.ReactNode;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={cn(
        "box-shadow-box border-da rounded-2xl border bg-grayish-light px-6 py-4",
        className,
      )}
      style={{ boxShadow: "7px 15px 26px -15px rgba(0,0,0,0.65)" }}
    >
      {children}
    </div>
  );
}
