import { formatUnixTimestamp } from "@/lib/utils";

type TimeProps = {
  timestamp: number;
  className?: string;
};

export function Time({ timestamp, className }: TimeProps) {
  return <span className={className}>{formatUnixTimestamp(timestamp)}</span>;
}
