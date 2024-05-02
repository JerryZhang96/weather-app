import { Button } from "@/components/ui/button";

type IconButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export function IconButton({ onClick, disabled, children }: IconButtonProps) {
  return (
    <Button
      type="submit"
      size="icon"
      className="h-[34px] w-[34px] rounded-full bg-white shadow-[0px_4px_12px_0px_#0000001A] hover:bg-white/[.4] dark:border-2 dark:border-white/[.4] dark:bg-card/[.5] dark:shadow-none"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
