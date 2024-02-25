import { useState } from "react";

import IconPause from "@/components/icons/icon-pause";
import IconPlay from "@/components/icons/icon-play";

interface CardI {
  id: number;
  video: string;
}

interface IncubatedCardProps {
  card: CardI;
}

export default function IncubatedCard({ card }: IncubatedCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = document.getElementById(
      `video-${card.id}`,
    ) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="group relative">
      <video
        id={`video-${card.id}`}
        width="250"
        height="250"
        className=" mx-auto w-[80vw] rounded-2xl lg:w-[260px]"
        controlsList="nodownload"
        onClick={togglePlayPause}
      >
        <source src={card.video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {isPlaying ? (
        <button
          onClick={togglePlayPause}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <IconPause />
        </button>
      ) : (
        <button
          onClick={togglePlayPause}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <IconPlay />
        </button>
      )}
    </div>
  );
}
