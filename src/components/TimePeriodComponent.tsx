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
        <h2 className="text-3xl font-bold text-gray-200">{name}</h2>
        <p className="text-2xl text-gray-400">
          {fromYear} - {toYear ?? "now"}
        </p>
      </div>
      <p className="text-2xl text-gray-300 w-8/12 m-2">{description}</p>
    </div>
  );
}
