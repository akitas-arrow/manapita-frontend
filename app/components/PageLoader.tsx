import Image from "next/image";

export const PageLoader = () => {
  return (
    <div className="grid place-content-center w-dvw h-dvh">
      <div className="w-[100px] h-[100px]">
        <Image
          src="/bouncing-circles.svg"
          width={100}
          height={100}
          alt="よみこみちゅう"
          className="h-full w-full"
        />
        <p className="text-center">よみこみちゅう</p>
      </div>
    </div>
  );
};
