type ErrorProps = {
  error: Error;
  reset(): void;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div>
      <h2>An error occured: {error.message}</h2>
    </div>
  );
}
