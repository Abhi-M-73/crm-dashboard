import GetStartedButton from "../originkit/ui/GetStartedButton";

const Navbar = () => {
  const REVEAL = "animate-hero-reveal";
  const delay = (ms) => ({ animationDelay: `${ms}ms` });

  return (
    <nav className="w-full border-b border-text/10 bg-bg text-text">
      <div
        style={delay(0)}
        className={`${REVEAL} absolute left-0 top-0 z-10 hidden h-[90px] w-full items-center justify-center border-b border-solid border-[rgba(255,255,255,0.18)] px-[32px] desktop-sm:flex`}
      >
        <div className="relative flex w-full max-w-300 items-center justify-between">
          <a
            href="#home"
            className="relative shrink-0 whitespace-nowrap text-[32px] leading-[1.15] tracking-[-0.96px] text-white"
          >
            Newly
          </a>
          <div className="relative flex shrink-0 items-center gap-5">
            <GetStartedButton className="px-5 py-2" navigateTo="/register" title="Get Started" />
            <GetStartedButton className="px-5 py-2" navigateTo="/login" title="Login Now" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;