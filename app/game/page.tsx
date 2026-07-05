"use client";

import { useEffect, useState } from "react";
import SongCard from "@/components/SongCard";
import { kanyeSongs } from "@/data/kanyeSongs";

function getRandomSong(exclude?: string) {
    const available = kanyeSongs.filter(song => song.title !== exclude);
    return available[Math.floor(Math.random() * available.length)];
}

export default function GamePage() {
    const [score, setScore] = useState(0);
    const [leftSong, setLeftSong] = useState(kanyeSongs[0]);
    const [rightSong, setRightSong] = useState(kanyeSongs[1]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const first = getRandomSong();
        const second = getRandomSong(first.title);

        setLeftSong(first);
        setRightSong(second);
    }, []);

    function nextRound(correct: boolean) {
        if (!correct) {
            setGameOver(true);
            return;
        }

        setScore(prev => prev + 1);

        const nextLeft = rightSong;
        const nextRight = getRandomSong(nextLeft.title);

        setLeftSong(nextLeft);
        setRightSong(nextRight);
    }

    function handleHigher() {
        nextRound(rightSong.streams > leftSong.streams);
    }

    function handleLower() {
        nextRound(rightSong.streams < leftSong.streams);
    }

    function restart() {
        const first = getRandomSong();
        const second = getRandomSong(first.title);

        setLeftSong(first);
        setRightSong(second);
        setScore(0);
        setGameOver(false);
    }

    if (gameOver) {
        return (
            <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
                <h1 className="text-6xl font-bold">Game Over</h1>
                <p className="text-2xl">Final Score: {score}</p>
                <button
                    onClick={restart}
                    className="bg-white text-black px-8 py-4 rounded-xl font-bold"
                >
                    Play Again
                </button>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-3">Higher or Lower</h1>
            <p className="text-xl text-gray-400 mb-10">Score: {score}</p>

            <div className="flex gap-12">
                <SongCard title={leftSong.title} streams={leftSong.streams} />

                <SongCard title={rightSong.title} hideStreams>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleHigher}
                            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition"
                        >
                            Higher
                        </button>

                        <button
                            onClick={handleLower}
                            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold transition"
                        >
                            Lower
                        </button>
                    </div>
                </SongCard>
            </div>
        </main>
    );
}
