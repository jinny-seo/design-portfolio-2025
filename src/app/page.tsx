"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { projAssets } from "@/assets/projAssets";
import { ProjectItem } from "@/components/ProjectItem";
import { HeroSection } from "@/sections/HeroSection";
import { SectionTitle } from "@/sections/SectionTitle";

export default function Home() {

  // Fade each project's description popover as the next project stacks over it
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[id^="project-"]'));
    const update = () => {
      cards.forEach((card, i) => {
        const popover = card.querySelector<HTMLElement>('[data-project-popover]');
        if (!popover) return;
        const next = cards[i + 1];
        if (!next) { popover.style.opacity = '1'; return; }
        const stuckTop = 80 + i * 44;
        const nextTop = next.getBoundingClientRect().top;
        const o = Math.max(0, Math.min(1, (nextTop - (stuckTop + 160)) / 220));
        popover.style.opacity = String(o);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <main className="flex flex-col w-full ">
      
      {/* Navigation: START */}
      <div className="fixed flex justify-center bottom-0 left-0 right-0 z-20 lg:justify-end md:m-4">
        <Navigation/>
      </div>
      {/* Navigation: END */}

      {/* Hero: START */}
      <div className="h-[100vh]">
      <div>
        <div>
          <HeroSection/>
        </div>
      </div>
      </div>
      {/* Hero: END */}

      <div className="flex flex-col p-container">
        {/* Work: START */}
        <div id="work" className="py-container">
          <div className="flex flex-col">
            <SectionTitle title="Work"/>
            {projAssets.map( (project, index) => {
                const prevProjLink =
                  index > 0 ? `#anchor-${projAssets[index - 1].link}` : null;
                const nextProjLink =
                  index < projAssets.length - 1 ? `#anchor-${projAssets[index + 1].link}` : null;
                return (
                  <React.Fragment key={project.name}>
                  {/* Non-sticky anchor at this card's natural position so the up/down
                      buttons land correctly even when previous cards are stuck at top */}
                  <div id={`anchor-${project.link}`} className="md:scroll-mt-[5rem]" aria-hidden="true" />
                  <div
                    id={`project-${project.link}`}
                    className="md:sticky md:top-[5rem] pb-[2rem] md:pb-[8rem] md:pointer-events-none"
                    style={{ "--dx": `${index * 1.5}rem`, "--dy": `${index * 2.75}rem` } as React.CSSProperties}
                  >
                    <div className="md:translate-x-[var(--dx)] md:translate-y-[var(--dy)] md:pointer-events-auto">
                    <ProjectItem
                      name={project.name}
                      company={project.company}
                      date={project.date}
                      description={project.description}
                      link={`/projects/${project.link}`}
                      image={project.image}
                      prevProjLink={prevProjLink}
                      nextProjLink={nextProjLink}
                    />
                    </div>
                  </div>
                  </React.Fragment>
                );
            })}
          </div>

          {/* Footer — part of the Work section */}
        <footer className="py-[7rem] lg:pt-[4rem] lg:pb-[0rem]">
          <div className="flex flex-col py-container gap-6 md:gap-8 lg:gap-10 items-center lg:items-start">
            <p className="font-Doto text-[1.15rem] md:text-[1.2rem] lg:text-[1.3rem]">. . .</p>
            <div className="flex flex-col gap-[0.5rem] font-Doto text-center lg:text-left">
              {/* For smaller breakpoints */}
              <div className="block lg:hidden">
                <p>Hand-coded with 🩷 with React, NextJS, and Tailwind</p>
                <a href="https://github.com/jinny-seo/design-portfolio-2025" 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-blue-800 underline underline-offset-2 hover:no-underline"
                >
                  View on Github
                </a>
              </div>
              {/* For larger breakpoints */}
              <div className="hidden lg:block ">
                  <span>Hand-coded with 🩷 with React, NextJS, and Tailwind</span>
                  <a href="https://github.com/jinny-seo/design-portfolio-2025" 
                      target="_blank" rel="noopener noreferrer" 
                      className="text-blue-800 underline underline-offset-2 hover:no-underline mx-2 px-2"
                    >
                      View on Github
                    </a>
              </div>

              <p className="my-6">Jinny Seo (c) 2025</p>
            </div>
          </div>
        </footer>
        </div>
        {/* Work: END */}


      </div>     
    </main>
  );
}