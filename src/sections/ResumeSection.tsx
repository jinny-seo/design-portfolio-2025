import React from "react";
import Image from "next/image";
import { icon } from "@/assets/icon";
import NotebookPaperContainer from "@/components/NotebookPaperContainer";
import ResumeExperience from "./ResumeExperience";

export const ResumeSection = () => {
    return (
        <div>
            <div className="bg-white shadow-lg lg:mr-[13rem] xl:mr-[16rem] lg:max-w-[800px]">
                <NotebookPaperContainer notebookPaperBg={false}>
                    <div className="flex mt-[4.5rem]">
                        <h2 className="wordart flex-1 font-Doto -mb-[0.4rem] text-[1.8rem] lg:text-[2rem]">Resume</h2>
                        <a
                            href="/seo-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 -mb-[0.84rem] font-Doto text-blue-800 hover:underline "
                        >
                        {/* <div className="flex items-center gap-2 px-6"> */}
                            <Image src={icon.download} alt="" width={13.5} height={13.5}/>
                            <p className="mt-[0.1rem]">View PDF</p>
                        {/* </div> */}
                        </a>
                    </div>
                </NotebookPaperContainer>

                {/* Content */}
                <NotebookPaperContainer>
                    <div className="mt-[1.8rem] aspect-[8/11]">
                        <div className="flex flex-col gap-[1.8rem] pt-[0.5rem] pb-[3rem]">
                            <ResumeExperience
                            company="Pump"
                            title="Founding Product Design Lead"
                            startDate="6/2025"
                            endDate="Present"
                            items={[
                                "Led design from 0 to 1 across cloud optimization, cost reporting, and onboarding as the company’s first and sole product designer, translating complex infrastructure data into clear workflows and data visualizations",
                                "Built reusable design system components in Figma and React, shipping production code to accelerate implementation and improve UI quality",
                                "Partnered with sales, operations, and customers to identify product gaps, shape requirements, and prioritize new features",
                            ]}
                            />
                            <ResumeExperience
                            company="Mimic"
                            title="Founding Product Designer"
                            startDate="12/2023"
                            endDate="2/2025"
                            items={[
                                "One of two founding designers at a cybersecurity startup, which grew from $27M to $70M+ in funding",
                                "Established design system and brand identity from scratch while shipping MVP to secure U.S. government and Fortune 500 clients like REI",
                                "Ensured WCAG compliance on the public-facing marketing website",
                            ]}
                            />
                            <ResumeExperience
                            company="Crayon"
                            title="Senior UX Designer"
                            startDate="1/2022"
                            endDate="4/2023"
                            items={[
                                "Led platform-wide redesign of the navigation, onboarding, and integrations",
                                "Partnered with product, sales, and customer success to discover user needs",
                                "Collaborated with engineers to create company’s first component library",
                            ]}
                            />
                            <ResumeExperience
                            company="projekt202"
                            title="Experience Designer"
                            startDate="8/2018"
                            endDate="12/2021"
                            items={[
                                "Consulted on eight enterprise engagements across customer service, tax, healthcare, and pharmaceutical distribution",
                                "Created the company’s first standardized WCAG audit framework, expanding the firm’s paid accessibility engagements",
                            ]}
                            />
                            <ResumeExperience
                            company="Sabre Labs"
                            title="R&D UX Designer"
                            startDate="7/2016"
                            endDate="8/2018"
                            items={[
                                "Created interactive prototypes to explore applications of emerging technology in the travel space with a small innovations lab",
                                "Published industry-first chatbot guidelines with 100K+ views and 2K+ likes",
                            ]}
                            />

                            <span className="font-Doto text-[1.45rem] leading-[1.8rem]">Education</span>
                            <ResumeExperience
                            company="Dartmouth College"
                            startDate="2012"
                            endDate="2016"
                            items={[
                                "B.A. in Studio Art with a concentration in painting",
                                "Minors in Computer Science and Digital Art"
                            ]}
                            />
                        </div>
                    </div>
                </NotebookPaperContainer>
            </div>
        </div>
    );
}
