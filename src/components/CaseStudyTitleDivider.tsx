import React, { FC, ReactNode } from "react";
import Windows95FrameInner from "./Windows95FrameInner";
import { CardContainer } from "./CardContainer";
import { CardSection } from "./CardSection";

interface CaseStudyTitleDividerProps {
    title: string;
    children?: ReactNode;
}

export const CaseStudyTitleDivider: FC<CaseStudyTitleDividerProps> = ({ title, children }) => {
    return(
        <Windows95FrameInner>
            <div className="flex flex-col">
                <h2 className="font-Doto title-3 py-[0.22rem] mx-auto">{title}</h2>
                {children}
            </div>
        </Windows95FrameInner>
    );
};