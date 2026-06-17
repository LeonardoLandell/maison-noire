export function VideoBackground() {
  const poster = "/videos/hero-poster.jpg";

  return (
    <div className="absolute inset-0 bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source
          src="/videos/hero-desktop.webm"
          type="video/webm"
          media="(min-width: 1024px)"
        />
        <source
          src="/videos/hero-tablet.webm"
          type="video/webm"
          media="(min-width: 768px)"
        />
        <source src="/videos/hero-mobile.webm" type="video/webm" />
      </video>
    </div>
  );
}
