export interface TimePeriod {
  name: string;
  description?: string | null;
  fromYear: number;
  toYear?: number | null;
}

export default function TimePeriodComponent({
  name,
  description,
  fromYear,
  toYear,
}: TimePeriod): JSX.Element {
  return (
    <div className="flex flex-row my-8">
      <div className="flex flex-col w-4/12">
        <h2 className="text-3xl font-bold text-white">{name}</h2>
        <p className="text-2xl text-white">
          {fromYear} - {toYear ?? "now"}
        </p>
      </div>
      <p className="text-2xl text-white w-8/12">{description}</p>
    </div>
  );
}
