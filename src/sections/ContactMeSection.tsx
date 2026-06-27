import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import { HeroSocialIcons } from "./HeroSocialIcons";
import CopyButton from "@/components/CopyButton";

export const ContactMeSection = () => {
    return (
        <div className="flex flex-col gap-1 mr-12">
            <p className="font-Doto p-hero">Contact me</p>
            <div className="inline-flex w-fit gap-2 items-center">
                <div className={`flex flex-col justify-center gap-1 items-center pt-1 w-[72px] h-[72px] rounded-[3px] group`}>
                    <Image src={icon.mail} alt="" width={32} height={32} className="shrink-0 [image-rendering:pixelated]"/>
                    <span className="font-Tiny5 text-[0.82rem]">Email</span>
                    <span className="mb-[0rem] p-hero">ogum536@gmail.com</span><CopyButton/>
                </div>
            </div>
            <a className="inline-flex w-fit gap-2" href="https://linkedin.com/in/jinny-seo" target="_blank" rel="noopener noreferrer">
                <Image src={icon.link} alt="" width={17} height={17} />
                <span className="mt-[0rem] p-hero underline underline-offset-2 hover:no-underline">
                    LinkedIn
                </span>
            </a>
        </div>
    );
}
