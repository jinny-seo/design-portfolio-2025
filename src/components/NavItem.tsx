"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image, { StaticImageData} from "next/image";
import { navImage } from "../assets/navImages";
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
        <div className={`${isActive ? "bg-purple-300" : "bg-transparent"}
            flex flex-col justify-center pt-1 w-[72px] h-[72px] rounded-[3px] hover:bg-purple-300 group`}>
            <a href={link} className="flex flex-col gap-1 items-center">
                {/* Default image - Hide on hover */}
                <Image src={image} alt={label} width={iconSize[size]} height={iconSize[size]} 
                    className={`object-cover group-hover:hidden`} />
                {/* Hover image - Show on hover */}
                <Image src={imageHover} alt={label} width={iconSize[size]} height={iconSize[size]} 
                    className={`object-cover group-hover:block hidden`} />
                <span className="font-Tiny5 text-sm">{toSentenceCase(label)}</span>
            </a>
        </div>
    );
}