import { cn } from "@/lib/utils";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const SearchIcon: React.FC<SVGIconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      version="1"
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M266 864c-72-23-150-104-172-179-39-137 18-270 146-336 67-35 176-33 247 4 29 15 56 27 60 28 5 0 10-14 13-30 4-22 38-64 123-150L801 82l39 41 39 42-117 118c-99 99-121 117-148 117-17 0-33 2-36 5s8 32 26 63c27 50 31 67 31 132-1 116-51 198-155 250-57 29-149 35-214 14zm204-98c59-39 85-89 85-166 0-78-26-127-88-168-56-37-153-39-210-3-76 47-111 140-88 229 14 51 75 117 123 131 53 16 135 6 178-23z"
        transform="matrix(.1 0 0 -.1 0 96)"
      ></path>
    </svg>
  );
};

const DeleteIcon: React.FC<SVGIconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      version="1"
      viewBox="0 0 96 96"
      className={cn("h-auto w-full", className)}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M375 860c-16-18-31-20-137-20H120v-80h720v80H722c-106 0-121 2-137 20-15 17-31 20-105 20s-90-3-105-20zM180 653c0-16 13-140 30-278C247 53 223 80 480 80s233-27 270 295c17 138 30 262 30 278v27H180v-27z"
        transform="matrix(.1 0 0 -.1 0 96)"
      ></path>
    </svg>
  );
};

export { SearchIcon, DeleteIcon };
