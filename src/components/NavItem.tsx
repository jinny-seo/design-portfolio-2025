"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";

import { toTitleCase, toSentenceCase } from "@/utils/format";


interface NavItemProps {
    link: string;
    label: string;
    image: string | StaticImageData;
    imageHover: string | StaticImageData;
    size?: "lg" | "md" | "sm";
    isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, image, imageHover, link, size = "sm", isActive }) => {

    const iconSize = {
        sm: 32,
        md: 40,
        lg: 48,
    };


    return(
        <a href={link} className="">
        <div className={`flex flex-col justify-center gap-1 items-center
            pt-1 w-[72px] h-[72px] rounded-[3px] group
            ${isActive ? "bg-purple-600/20 lg:bg-transparent" : "bg-transparent"}
            hover:bg-purple-600/20 lg:hover:bg-transparent`}>

                {/* Default image - Hide on hover */}
                <Image src={image} alt={label} width={iconSize[size]} height={iconSize[size]}
                    className={`object-cover group-hover:hidden`} />
                {/* Hover image - Show on hover */}
                <Image src={imageHover} alt={label} width={iconSize[size]} height={iconSize[size]}
                    className={`object-cover group-hover:block hidden`} />
                {/* Below lg (centered nav): plain text, the wrapper bg shows active/hover.
                    lg+ (corner nav): Mac-style dark box around the text only + inverted color. */}
                <span className={`font-Tiny5 text-[0.82rem] px-1 rounded-[2px]
                    ${isActive ? "lg:bg-[#2e1065] lg:text-white" : ""}
                    lg:group-hover:bg-[#2e1065] lg:group-hover:text-white`}>
                    {toSentenceCase(label)}
                </span>

        </div>
        </a>
    );
}