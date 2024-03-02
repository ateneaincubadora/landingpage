import IconPause from "@/components/icons/icon-pause";
import IconPlay from "@/components/icons/icon-play";

interface CardI {
  id: number;
  video: string;
}

interface IncubatedCardProps {
  card: CardI;
  onTogglePlayPause: () => void;
  isPlaying: boolean;
  isActive: boolean;
}

export default function IncubatedCard({
  card,
  onTogglePlayPause,
  isPlaying,
  isActive,
}: IncubatedCardProps) {
  const togglePlayPause = () => {
    if (isActive) {
      onTogglePlayPause();
    }
  };

  return (
    <div className="group relative">
      <video
        id={`video-${card.id}`}
        width="250"
        height="250"
        className=" mx-auto h-full w-[80vw] rounded-2xl lg:w-[260px] "
        controlsList="nodownload"
        onClick={onTogglePlayPause}
      >
        <source src={card.video} type="video/webm" className="rounded-2xl" />
        Your browser does not support the video tag.
      </video>
      {isActive && (
        <button
          onClick={togglePlayPause}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
      )}
    </div>
  );
}
