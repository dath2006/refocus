import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-6">
      <div className="max-w-screen-xl pb-0 flex justify-between mx-auto py-10">
        <div className="mr-28">
          <h1 className="text-[25vh] font-bold">refokus.</h1>
        </div>
        <div className="mt-16">
          <h6 className="mb-8 text-lg text-zinc-500">Socials</h6>
          <p className="mb-2 text-zinc-300">Instagram</p>
          <p className="mb-2 text-zinc-300">Twitter</p>
          <p className="mb-2 text-zinc-300">LinkedIn</p>
        </div>
        <div className="mt-16">
          <h6 className="mb-8 text-lg text-zinc-500">Sitemaps</h6>
          <p className="mb-2 text-zinc-300">Home</p>
          <p className="mb-2 text-zinc-300">Work</p>
          <p className="mb-2 text-zinc-300">Careers</p>
          <p className="mb-2 text-zinc-300">Contact</p>
        </div>
        <div className="mt-16">
          <p className="text-right w-56 font-semibold text-sm mt-16 mb-10">
            Refokus is pioneering digital agency driven by design and empowered
            by technology.
          </p>
          <span className="ml-20 p-2  bg-blue-600 text-white text-sm">
            <i>W</i> Enterprise Partner
          </span>
        </div>
      </div>
      <div className="max-w-screen-xl flex gap-10 mx-auto text-zinc-500">
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Impressum</span>
        <span>Terms</span>
      </div>
    </div>
  );
};

export default Footer;
