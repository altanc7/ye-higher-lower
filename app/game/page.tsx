import { kanyeSongs } from "@/data/kanyeSongs";
export default function GamePage() {

    const leftSong = kanyeSongs[Math.floor(Math.random() * kanyeSongs.length)];

    let rightSong = kanyeSongs[Math.floor(Math.random() * kanyeSongs.length)];

    while (leftSong === rightSong) {
        rightSong = kanyeSongs[Math.floor(Math.random() * kanyeSongs.length)];
    }

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-10">
                Higher or Lower
            </h1>

            <div className="flex gap-12">
                <div className="bg-zinc-900 p-8 rounded-xl text-center w-80">
                    <h2 className="text-2xl font-bold">
                        {leftSong.title}
                    </h2>
                    <p className="mt-4 text-gray-400">
                        {leftSong.streams.toLocaleString()} Streams
                    </p>
                </div>

                <div className="bg-zinc-900 p-8 rounded-xl text-center w-80">
                    <h2 className="text-2xl font-bold">
                        {rightSong.title}
                    </h2>
                    <p className="mt-4 text-gray-400">
                        ??????
                    </p>

                    <div className="mt-6 flex gap-4 justify-center">
                        <button className="bg-green-500 px-6 py-3 rounded-lg font-bold">
                            Higher
                        </button>

                        <button className="bg-red-500 px-6 py-3 rounded-lg font-bold">
                            Lower
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
