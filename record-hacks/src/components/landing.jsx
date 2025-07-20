const Landing = () => {
  return (
    <section
      className="flex flex-wrap justify-around gap-0 text-center md:flex-row md:gap-8 md:text-left"
      id="landing"
    >
      <div className="font-main h-fit p-0 text-[1.6rem] md:py-8">
        <h2 className="font-heading text-[22px] font-semibold md:text-[24px]">
          FREETAIL HACKERS PRESENTS
        </h2>
        <h1 className="font-lugoj m-0 text-[84px] leading-[1] md:text-[144px]">
          RECORD <br />
          HACKS
        </h1>

        <div className="flex flex-row justify-around text-base md:justify-start md:gap-4">
          <span className="rounded-full border-2 border-black px-2 py-0.5">
            March 29-30
          </span>
          <span className="rounded-full border-2 border-black px-2 py-0.5">
            Austin, TX
          </span>
          <span className="rounded-full border-2 border-black px-2 py-0.5">
            24 hours
          </span>
        </div>

        <div className="mt-7 flex flex-col items-center gap-10 leading-[1.3] md:items-start">
          <div>
            <b>Applications are closed now</b>
            <p className="text-base">*UT students only</p>
          </div>
          <a
            className="button"
            target="_blank"
            href="https://rodeo.freetailhackers.com/login"
          >
            Login Here!
          </a>
        </div>
      </div>

      <div className="relative h-auto max-h-full max-w-[90vw]">
        <img
          className="h-auto w-full object-cover"
          src="/record-hacks/assets/Landing_Page_Mascot.png"
          alt="Splash picture"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Landing;
