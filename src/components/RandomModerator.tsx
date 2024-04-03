import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type RandomModeratorProps = {
  className?: string
  mods: string[],
  initial: string
};

export function RandomModerator (props: RandomModeratorProps) {

  const [currentImage, setCurrentImage] = useState(props.initial);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(props.mods[Math.floor(Math.random() * props.mods.length)]);
    }, 15000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className={cn("p-0 flex flex-col w-full items-center justify-center", props.className)}>
      <img src={`/img/mods/${currentImage}.png`} style={{ height: '40px', width: 'auto', margin: '0 auto' }} />
      <div className=" text-[10px] text-nowrap">{currentImage}</div>
    </div>
  )

}