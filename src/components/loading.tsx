type LoadingProps = {
  text: string;
};

export function Loading({ text }: LoadingProps) {
  return <p>{text}</p>;
}
