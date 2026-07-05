

type SongCardProps = {
    title: string;
    streams?: number;
    hideStreams?: boolean;
    children?: React.ReactNode;
};

export default function SongCard({
    title,
    streams,
    hideStreams = false,
    children,
}: SongCardProps) {
    return (
        <div className="bg-zinc-900 rounded-2xl p-8 w-96 text-center">
            <h2 className="text-3xl font-bold">{title}</h2>

            <p className="mt-6 text-zinc-400 text-xl">
                {hideStreams
                    ? "??????"
                    : `${streams?.toLocaleString()} Streams`}
            </p>

            <div className="mt-8">{children}</div>
        </div>
    );
}