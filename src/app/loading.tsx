import LoadingIndicator from "@/components/loadingIndicator";

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-black">
      <LoadingIndicator />
    </div>
  );
}
