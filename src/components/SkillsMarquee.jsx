import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import "../index.css"; // ensure this is imported somewhere global

export const SkillsMarquee = () => (
  <div className="overflow-hidden w-full bg-black py-6 mt-25">
    <div className="marquee-track">
      <div className="flex gap-10 md:gap-60 pr-10">
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <FaHtml5 className="text-8xl  text-orange-500" />
          <div>Html</div>
        </div>
        <div  className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <IoLogoCss3 className="text-8xl  text-orange-500" />
          <div>Css</div>
        </div>
        <div  className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <TbBrandJavascript className="text-8xl  text-orange-500" />
          <div>Javascript</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <RiNodejsLine className="text-8xl  text-orange-500" />
          <div>Node js</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <FaGit className="text-8xl  text-orange-500" />
          <div>Git & Git-hub</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <SiReact className="text-8xl  text-orange-500" />
          <div>React js</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <SiMongodb className="text-8xl  text-orange-500" />
          <div>Mongodb</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <RiTailwindCssFill className="text-8xl  text-orange-500" />
          <div>Tailwind</div>
        </div>
        <div className="flex items-center hover:scale-150 transition-all ease-in-out flex-col">
          <VscVscode className="text-8xl  text-orange-500" />
          <div>Vscode</div>
        </div>
      </div>
    </div>
  </div>
);
