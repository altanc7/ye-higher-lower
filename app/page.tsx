import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        YE HIGHER LOWER
      </h1>

      <p className="text-xl text-gray-400 mb-8 text-center">
        Can you guess which Kanye West song has more Spotify streams?
      </p>

      <Link
        href="/game"
        className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
      >
        PLAY
      </Link>
    </main>
  );
}