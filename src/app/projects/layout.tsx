'use client'
import Windows95FrameOuter from "@/components/Windows95FrameOuter";


import CaseStudyNav from "@/components/CaseStudyNav";


export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-hero-grid">
    <div className="mx-auto max-w-[1100px] px-container ">
      
      <Windows95FrameOuter>
        <main className="flex flex-col ">
          <CaseStudyNav/>
          {children}
        </main>
      </Windows95FrameOuter>
      </div>
    </div>
  );
}
  