export function VideoBackground() {
  return (
    <>
      <video
        className="hidden lg:block absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-desktop.webm" type="video/webm" />
      </video>

      <video
        className="hidden md:block lg:hidden absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-tablet.webm" type="video/webm" />
      </video>

      <video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-mobile.webm" type="video/webm" />
      </video>
    </>
  );
}
