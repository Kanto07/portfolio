export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h1 className="uppercase tracking-[0.3em] text-red-500 mb-3 text-2xl text-center font-bold">
        {title}
      </h1>

      <h2 className="text-5xl font-bold">{subtitle}</h2>
    </div>
  );
}
