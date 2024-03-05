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
        width="300"
        height="300"
        className=" mx-auto  h-[410px] w-[80vw] rounded-2xl lg:h-[450px] lg:w-full  dt:h-[470px]"
        controlsList="nodownload"
        onClick={onTogglePlayPause}
      >
        <source src={card.video} type="video/webm" />
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
