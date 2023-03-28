import { sdk } from "@/lib/client";

export default async function Home() {
  const { skills } = await sdk.Skills();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Marco Lucas Meijer</h1>
      <div>
        {skills.map(({ name, percentage }, i) => (
          <p key={i}>
            {name} - {percentage}%
          </p>
        ))}
      </div>
    </main>
  );
}
