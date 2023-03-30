export default function PageTransition() {
  return (
    <div className="w-screen h-screen overflow-hidden fixed left-0 top-0 z-50">
      <div className="absolute left-2/3 top-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-black outline-[3000px] animate-page-transition" />
    </div>
  );
}
