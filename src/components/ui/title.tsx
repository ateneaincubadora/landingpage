import { cn } from "@/utils/cn";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title({ className, children }: TitleProps) {
  return (
    <h2
      className={cn(
        "font-helvetica-bold-condensed bg-primary/45 px-2 py-1 text-3xl font-bold text-grayish-light lg:text-[2rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
