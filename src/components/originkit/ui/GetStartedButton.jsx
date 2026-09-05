import { Link } from "react-router-dom";

const GetStartedButton = ({ className, navigateTo , title = "Get Started"}) => (
  <Link
    to={navigateTo}
    className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-[999px] transition-opacity duration-200 hover:opacity-80 drop-shadow-[0px_53px_7.5px_rgba(0,0,0,0),0px_34px_7px_rgba(0,0,0,0.01),0px_19px_6px_rgba(0,0,0,0.05),0px_9px_4.5px_rgba(0,0,0,0.09),0px_2px_2.5px_rgba(0,0,0,0.1)] ${className}`}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[999px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(240, 240, 240) 0%, rgb(240, 240, 240) 100%)",
      }}
    />
    <p className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.15] tracking-[-0.32px] text-[#060e08]">
      {title}
    </p>
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.1)]" />
  </Link>
);

export default GetStartedButton;