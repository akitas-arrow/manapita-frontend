import Image from "next/image";

export const PageLoader = () => {
  return (
    <div className="grid place-content-center min-h-[calc(100dvh-80px)] w-full fixed top-16 left-0">
      <div className="w-fit">
        <div className="w-16 h-16 mx-auto mb-4">
          <Image
            src="/bouncing-circles.svg"
            width={80}
            height={80}
            alt="よみこみちゅう"
            className="h-full w-full"
          />
        </div>
        <p className="text-center">よみこみちゅう</p>
      </div>
    </div>
  );
};
