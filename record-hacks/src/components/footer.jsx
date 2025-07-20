import React from "react";
import fhLogo from "../assets/freetail-bat.svg";
import linkedinLogo from "../assets/FTLinkedin.svg";
import instagramLogo from "../assets/FTInstagram.svg";
import facebookLogo from "../assets/FTFacebook.svg";
import twitterLogo from "../assets/FTTwitter.svg";
import tiktokLogo from "../assets/FTTiktok.svg";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[50rem]">
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex basis-[40%] flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={fhLogo} id="freetail-bat" />
            Freetail Hackers
          </div>

          <div className="flex flex-col gap-2 underline">
            <a className="text-pink2" href="https://www.freetailhackers.com">
              freetailhackers.com
            </a>
            <a className="text-pink2" href="mailto:hello@freetailhackers.com">
              {" "}
              hello@freetailhackers.com
            </a>
          </div>

          <div className="flex size-6 w-full gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/freetail-hackers/"
            >
              <img
                className="footer-media"
                width="auto"
                src={linkedinLogo}
                alt="media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/freetailhackers/"
            >
              <img
                className="footer-media"
                width="auto"
                src={instagramLogo}
                alt="media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/freetailhackers/"
            >
              <img
                className="footer-media"
                width="auto"
                src={facebookLogo}
                alt="media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@freetailhackers"
            >
              <img
                className="footer-media"
                width="auto"
                src={tiktokLogo}
                alt="media"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/freetailhackers"
            >
              <img
                className="footer-media"
                width="auto"
                src={twitterLogo}
                alt="media"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold">Hacker Resources</div>
          <div className="flex flex-col gap-2 underline">
            <a target="_blank" href="https://uhsg.freetailhackers.com/">
              Hackathon Starter's Guide
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-bold">Other Hackathons</div>
          <div className="flex flex-col gap-2 underline">
            <a target="_blank" href="https://tamuhack.org/">
              TAMUHack
            </a>
            <a target="_blank" href="https://rowdyhacks.org/">
              Rowdyhacks
            </a>
            <a target="_blank" href="https://www.hackuta.org/">
              HackUTA
            </a>
            <a target="_blank" href="https://www.unthackathon.com/">
              HackUNT
            </a>
            <a target="_blank" href="https://hackutd.co/">
              HackUTD
            </a>
          </div>
        </div>
      </div>

      <div className="text-gray flex-rap my-8 flex place-content-center justify-between">
        <a
          className="text-gray hover:text-orange"
          id="code-of-conduct"
          target="_blank"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >
          Code of Conduct
        </a>
        <span>Copyright @ Freetail Hackers 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
