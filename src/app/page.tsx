export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0a0a0a]">
      <main className="font-default text-[#ededed]">
        <p className="text-zinc-500 text-sm mb-4">~/toddqualiano.com</p>
        <p className="text-lg">
          <span className="text-green-400">❯</span>{" "}
          <span className="font-semibold">Todd Qualiano</span>
        </p>
        <p className="text-zinc-400 mt-1 ml-4">
          Software engineer.
        </p>
        <p className="mt-6 text-zinc-600 text-sm">
          <span className="text-green-400">❯</span>{" "}
          <span className="animate-pulse">█</span>
        </p>
      </main>
    </div>
  );
}
