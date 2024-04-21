type ErrorFallbackProps = {
  error: Error;
};

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong!</p>
      {error?.message && <pre className="text-red-600">{error.message}</pre>}
    </div>
  );
}
