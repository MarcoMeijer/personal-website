import Button from "@/components/button";
import LinkButton from "@/components/linkButton";

export default function Home() {
  return (
    <main className="h-screen bg-black p-10">
      <h1 className="flex text-9xl font-bold text-white items-center">
        Marco Lucas <br />
        Meijer
      </h1>
      <LinkButton title="resume" href="/resume" />
    </main>
  );
}
