"use client"
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CardContainer } from "@/components/CardContainer";
import { CardSection } from "@/components/CardSection";
import { CaseStudyTitleDivider } from "@/components/CaseStudyTitleDivider";
import Windows95FrameInner from "@/components/Windows95FrameInner";
import { CaseStudyImage } from "@/components/CaseStudyImage";
import { BulletList } from "@/components/BulletList";
import { ImageCarousel } from "@/components/ImageCarousel";

import { projAssets } from "@/assets/projAssets";
import { icon } from "@/assets/icon";

// Onboarding
import onboardingUserflow from "@/assets/project-pump/Onboarding_Userflow.png";
import onboardingGetStarted from "@/assets/project-pump/Onboarding_1-Get started.png";
import onboardingTenantMismatch from "@/assets/project-pump/Onboarding_2-Tenant mismatch.png";
import onboardingGCP from "@/assets/project-pump/Onboarding_3-Connect to GCP.png";
import onboardingAWS from "@/assets/project-pump/Onboarding_4-AWS.png";
// Reporting
import reportingBefore from "@/assets/project-pump/Reporting_1-Before user testing.png";
import reportingAfter from "@/assets/project-pump/Reporting_2-After user testing.png";
// Commitment Planner
import commPlanner1 from "@/assets/project-pump/CommPlanner-1.png";
import commPlannerEngProto from "@/assets/project-pump/CommPlanner-Eng prototype.png";
import commPlannerManage from "@/assets/project-pump/CommPlanner-Manage.png";
import commPlannerPlan from "@/assets/project-pump/CommPlanner-Plan.png";
import commPlannerPlan2 from "@/assets/project-pump/CommPlanner-Plan-2.png";
import commPlannerUIFix1 from "@/assets/project-pump/CommPlanner-UI fix-1.png";
import commPlannerUIFix2 from "@/assets/project-pump/CommPlanner-UI fix-2.png";
// Kubernetes rightsizing
import k8sStart from "@/assets/project-pump/Kubernetes, Rightsizing 1-start.png";
import k8sCurrent from "@/assets/project-pump/Kubernetes, Rightsizing 2-Current.png";
import k8sRecommended from "@/assets/project-pump/Kubernetes, Rightsizing 3-Recommended.png";
import k8sExpanded from "@/assets/project-pump/Kubernetes, Rightsizing 4-expanded.png";
import k8sReconsolidation1 from "@/assets/project-pump/Kubernetes-Node reconsolidation-1.png";
import k8sReconsolidation2 from "@/assets/project-pump/Kubernetes-Node reconsolidation-2.png";
import k8sReconsolidation3 from "@/assets/project-pump/Kubernetes-Node reconsolidation-3.png";
import k8sReconsolidation4 from "@/assets/project-pump/Kubernetes-Node reconsolidation-4.png";
import k8sReconsolidation5 from "@/assets/project-pump/Kubernetes-Node reconsolidation-5.png";
import k8sSpot1 from "@/assets/project-pump/Kubernetes-Spot_1.png";
import k8sSpot2 from "@/assets/project-pump/Kubernetes-Spot_2.png";
import k8sSpot3 from "@/assets/project-pump/Kubernetes-Spot_3.png";
import k8sSpot4 from "@/assets/project-pump/Kubernetes-Spot_4.png";
import k8sSpot5 from "@/assets/project-pump/Kubernetes-Spot_5.png";
import dashboards from "@/assets/project-pump/Dashboards.png";
import k8sSpy from "@/assets/project-pump/Kubernetes-spy.png";
// Sankey
import sankeyFix1 from "@/assets/project-pump/Sankey fix-1.png";
import sankeyFix2 from "@/assets/project-pump/Sankey fix-2.png";
import sankeyFix3 from "@/assets/project-pump/Sankey fix-3.png";
import sankeyFix4 from "@/assets/project-pump/Sankey fix-4.png";
// AI logs
import aiLogs6 from "@/assets/project-pump/AI logs_6.png";
import aiLogs1 from "@/assets/project-pump/AI logs_1.png";
import aiLogs2 from "@/assets/project-pump/AI logs_2.png";
import aiLogs3 from "@/assets/project-pump/AI logs_3.png";
import aiLogs4 from "@/assets/project-pump/AI logs_4.png";
import aiLogs5 from "@/assets/project-pump/AI logs_5.png";
// Shoutouts
import shoutouts from "@/assets/project-pump/Shoutouts.png";

// Status legend: ✅ Shipped · 🚧 In progress · 🍼 Upcoming
// `anchor` links the item to an in-page section via the "View" link.
const pumpWork: { status: string; label: string; anchor?: string }[] = [
  { status: "✅", label: "Cloud security monitoring" },
  { status: "✅", label: "Onboarding", anchor: "onboarding" },
  { status: "✅", label: "Cost reports", anchor: "reporting" },
  { status: "✅", label: "Report subscriptions" },
  { status: "✅", label: "Report dashboards" },
  { status: "✅", label: "Cost anomalies" },
  { status: "✅", label: "Reporting annotations" },
  { status: "✅", label: "Offboarding documentation" },
  { status: "✅", label: "Partial payments" },
  { status: "✅", label: "Invoices" },
  { status: "✅", label: "Recommendations improvements" },
  { status: "✅", label: "Notifications" },
  { status: "✅", label: "Cloud budgets" },
  { status: "🚧", label: "Settings & integrations" },
  { status: "🚧", label: "Commitment Planner", anchor: "commitment-planner" },
  { status: "🚧", label: "Home dashboard" },
  { status: "🚧", label: "Infrastructure savings", anchor: "sankey" },
  { status: "🍼", label: "Kubernetes savings", anchor: "kubernetes" },
  { status: "🍼", label: "AI budgets" },
  { status: "🍼", label: "AI logs", anchor: "ai-logs" },
];

// Small "time taken" pill used on quick UI-fix call-outs
const TimePill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 text-sm bg-slate-200 text-slate-700 px-2 py-1 rounded">
    ⏱ Time taken: {children}
  </span>
);


export default function PumpProject() {
  const pathname = usePathname();
  const currentPath = pathname.replace("/projects/", "");

  const currentIndex = projAssets.findIndex(project => project.link === currentPath);
  const currentProject = projAssets[currentIndex];
  const [openImage, setOpenImage] = useState<string | null>(null);

  // Scroll lock
  useEffect(() => {
    if (openImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openImage]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenImage(null);
      }
    };

    if (openImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openImage]);

  return (
    <div>
      <CardContainer bgNone fullWidth>
        <CardSection>
          <h1 className="title-1">{currentProject.name}</h1>
          <p className="text-lg">As the founding product designer at Pump, I lead end-to-end design across the platform — spanning cloud cost optimization, security monitoring, reporting, and onboarding.</p>
          <div className="quote my-3">
            <p className="mb-2">When you joined the company and [the first page you designed] came out, I thought, Wow, our company might actually end up being worth something</p>
            <span className="text-[1.1rem] not-italic">— a backend engineer</span>
          </div>
        </CardSection>
      </CardContainer>

      {/* * * * * Hero image: START * * * * */}
      <Windows95FrameInner>
        <div className="relative group w-fit cursor-zoom-in"
        onClick={() => setOpenImage(currentProject.image.src)}>
          <Image
            src={currentProject.image as StaticImageData}
            alt={"Pump project hero image"}
            className="transition duration-300 ease-in-out group-hover:brightness-[0.36]"
          />
          {/* Hover Overlay */}
          <div className="absolute items-center justify-center inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Image src={icon.expand} alt="Expand" width={36} height={36}/>
              <p className="font-Doto text-xl text-white">Expand</p>
            </div>
          </div>
        </div>
      </Windows95FrameInner>
      {/* Hero image: END */}

      {/* * * * * Section - What I've worked on: START * * * * */}
      <CaseStudyTitleDivider title="What I've worked on @ Pump"/>
      
      <Windows95FrameInner>
        <CardContainer fullWidth>
          <CardSection>
            {/* Legend */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6 text-base">
              <span><span aria-hidden>✅</span> Shipped</span>
              <span><span aria-hidden>🚧</span> In progress</span>
              <span><span aria-hidden>🍼</span> Upcoming</span>
            </div>

            {/* Two columns on desktop, one on mobile — bulleted */}
            <ul className="columns-1 md:columns-2 gap-x-8 text-lg list-disc pl-5">
              {pumpWork.map((item, index) => (
                <li key={index} className="mb-2 break-inside-avoid">
                  <span aria-hidden className="select-none mr-1">{item.status}</span>
                  {item.label}
                  {item.anchor && (
                    <a
                      href={`#${item.anchor}`}
                      className="font-Doto text-base text-blue-800 underline underline-offset-2 hover:no-underline whitespace-nowrap ml-2"
                    >
                      View
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg text-slate-700">+ Design systems &amp; tokens setup <span className="italic">(always ongoing)</span></p>
            
          </CardSection>
          
        </CardContainer>
        <CaseStudyImage src={shoutouts} alt="Shoutouts from the Pump team" className="bg-transparent"/>
      </Windows95FrameInner>
      {/* Section - What I've worked on: END */}

      {/* * * * * Section - Reporting: START * * * * */}
      <div id="reporting" className="scroll-mt-4" />
      <CaseStudyTitleDivider title="Reporting">
        {/* KPIs live inside the section header — no bg, default text color */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-10 gap-y-6 pb-3 pt-1">
          <div className="flex gap-6 md:gap-10">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-semibold leading-none">90</div>
              <div className="mt-1 text-[0.6rem] md:text-xs uppercase tracking-wide leading-tight">Companies<br/>with reports</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-semibold leading-none">194</div>
              <div className="mt-1 text-[0.6rem] md:text-xs uppercase tracking-wide leading-tight">Reports<br/>created</div>
            </div>
          </div>
          <div className="text-2xl md:text-3xl">&rarr;</div>
          <div className="flex gap-6 md:gap-10">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-semibold leading-none">200</div>
              <div className="mt-1 text-[0.6rem] md:text-xs uppercase tracking-wide leading-tight">Companies<br/>with reports</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-semibold leading-none">500</div>
              <div className="mt-1 text-[0.6rem] md:text-xs uppercase tracking-wide leading-tight">Reports<br/>created</div>
            </div>
          </div>
        </div>
      </CaseStudyTitleDivider>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Redesigning reports through user testing">
            <p>When I joined, creating a report opened a modal — and when you hit create, it dropped you right back on the same page. To find the report you&apos;d just made, you had to head to the Reports tab and hunt for it.</p>
          </CardSection>
        </CardContainer>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col gap-4 mb-8">
            <CaseStudyImage src={reportingBefore} alt="Reporting — before user testing" className="border-t border-b" />
            <p className="caption text-center">The old flow returned you to the same page after creating a report, leaving you to hunt for what you&apos;d just made</p>
          </div>
        </div>
        <CardContainer>
          <CardSection>
            <p>I rebuilt the flow so that creating a report transports you straight to your list of reports, with a loading state that signals it&apos;s being created. (The loading is deliberately forced — there&apos;s nothing actually loading.) My first instinct was to drop people straight into the new report, but it tested badly: the report and the list looked so alike that nobody could tell they&apos;d moved.</p>
          </CardSection>
        </CardContainer>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col gap-4 mb-8">
            <CaseStudyImage src={reportingAfter} alt="Reporting — after user testing" className="border-t border-b" />
            <p className="caption text-center">The rebuilt flow drops you into your reports list with a loading state, so it&apos;s clear your report is being created</p>
          </div>
        </div>
        <CardContainer>
          <CardSection>
            <p>Adding the loading beat fixed it instantly — people got it right away. After the redesign, reporting usage roughly doubled, and each company creates about 15% more reports than before.</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Reporting: END */}

      {/* * * * * Section - Onboarding: START * * * * */}
      <div id="onboarding" className="scroll-mt-4" />
      <CaseStudyTitleDivider title="Onboarding"/>
      <Windows95FrameInner>
        {/* Intro — onboarding was my first project at Pump */}
        <CardContainer>
          <CardSection>
            <p>Onboarding was my first project at Pump. The initial revamp took six weeks — but every provider after that took a fraction of the time, because I built the flow to be <b>composable</b>: each new provider slots into one shared, modular system instead of a one-off rebuild.</p>
            <table className="min-w-full bg-white border border-slate-400/50 text-left text-sm table-fixed shadow-sm">
              <thead className="bg-slate-300 md:bg-slate-200 text-slate-800">
                <tr>
                  <th className="w-1/2 p-2 border-slate-400">Provider</th>
                  <th className="w-1/2 p-2 border-slate-400 text-right">Design time</th>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-700">
                <tr>
                  <td className="p-2 border-b border-slate-300">AWS</td>
                  <td className="p-2 border-b border-slate-300 text-right">6 weeks</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-slate-300">GCP</td>
                  <td className="p-2 border-b border-slate-300 text-right">3 days</td>
                </tr>
                <tr>
                  <td className="p-2">Azure</td>
                  <td className="p-2 text-right">1.5 weeks</td>
                </tr>
              </tbody>
            </table>
          </CardSection>
        </CardContainer>

        <CardContainer>
          <CardSection sectionTitle="User flow">
            <p>Mapping the end-to-end onboarding journey — from first login through connecting a cloud account.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={onboardingUserflow} alt="Pump onboarding user flow" className="bg-white border-t border-b"/>

        <CardContainer>
          <CardSection sectionTitle="One flow, many providers">
            <p>The same flow, skinned per provider — getting started, a tenant mismatch, and connecting GCP or AWS.</p>
          </CardSection>
        </CardContainer>
        <ImageCarousel
          className="bg-white"
          images={[
            { src: onboardingGetStarted, alt: "Onboarding — Get started screen" },
            { src: onboardingTenantMismatch, alt: "Onboarding — Tenant mismatch screen" },
            { src: onboardingGCP, alt: "Onboarding — Connect to GCP" },
            { src: onboardingAWS, alt: "Onboarding — AWS" },
          ]}
        />
      </Windows95FrameInner>
      {/* Section - Onboarding: END */}

      {/* * * * * Section - Commitment Planner: START * * * * */}
      <div id="commitment-planner" className="scroll-mt-4" />
      <CaseStudyTitleDivider title="Commitment Planner"/>
      {/* Sub-section 1 — the problem */}
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="The problem">
            <p>Pump lets customers lock in cloud discounts by committing spend years ahead. The engineers spent ~a year building it — and when the beta shipped, customers were <b>scared</b> of the page. Past and future were crammed into one table: what you&apos;d already bought, sitting right next to what you were only considering.</p>
            <div className="quote my-3">
              <p className="mb-2">Customers are scared of this page.</p>
              <span className="text-[1.1rem] not-italic">— Sales &amp; Ops</span>
            </div>
          </CardSection>
        </CardContainer>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col gap-4 mb-8">
            <CaseStudyImage src={commPlannerEngProto} alt="Commitment Planner — original engineering prototype" className="border-t border-b" />
            <p className="caption text-center">This is the dev prototype — I didn&apos;t design it.</p>
          </div>
        </div>
      </Windows95FrameInner>

      {/* Sub-section 2 — the solution */}
      <CaseStudyTitleDivider title="Splitting the present from the future"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Manage & Plan mode">
            <BulletList>
              <li><b>Manage mode</b> — the present. What you have now.</li>
              <li><b>Plan mode</b> — an empty canvas for the future, one bold <i>Explore savings</i> button away. It redraws against your present as you pull commitments in.</li>
            </BulletList>
          </CardSection>
        

        </CardContainer>
        <div className="flex flex-col gap-4 bg-white pb-8">
          <ImageCarousel
            className="bg-white"
            images={[
              { src: commPlannerPlan, alt: "Commitment Planner — Plan mode" },
              { src: commPlannerManage, alt: "Commitment Planner — Manage mode" },
              { src: commPlannerPlan2, alt: "Commitment Planner — Plan mode detail" },
            ]}
          />
          <p className="caption text-center">Complexity you earn — not complexity dumped on you.</p>
        </div>
      </Windows95FrameInner>
      {/* Section - Commitment Planner: END */}

      {/* * * * * Section - Kubernetes rightsizing: START * * * * */}
      <div id="kubernetes" className="scroll-mt-4" />
      <CaseStudyTitleDivider title="Kubernetes cost optimization"/>
      {/* Intro — competitive research + the framing insight */}
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Navigate by the question, not the architecture">
            <p>I started by studying the landscape. Most Kubernetes cost tools navigate by the system&apos;s architecture — cluster, node, pod. That works for monitoring tools, where you drill into the structure to find what&apos;s broken. But Pump&apos;s users aren&apos;t hunting a broken pod — they&apos;re hunting savings. So I organized the product around the user&apos;s question — <i>where can I save, and is it safe to touch?</i> — instead of the Kubernetes hierarchy.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={k8sSpy} alt="Competitive research board for Kubernetes cost optimization" className="bg-white border-t border-b"/>
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Rightsizing">
            <p>Rightsizing is the clearest version of the pattern. Clicking in doesn&apos;t drop you into a wall of numbers — it eases you in first: what&apos;s about to happen, how to do it, and the savings waiting at the end, with one clear CTA to start.</p>
            <p>From there you move from current usage to a recommended config, then drill into a single workload for the full picture. The CEO and I spent a long time on that balance — enough context to trust the change, without burying the person making it.</p>
            <p>Because the real question a DevOps engineer asks isn&apos;t <i>which level am I in</i> — it&apos;s <i>is this safe to touch, and on what terms?</i> Every step is built to answer that.</p>
          </CardSection>
        </CardContainer>
        <ImageCarousel
          className="bg-white"
          images={[
            { src: k8sStart, alt: "Kubernetes rightsizing — start" },
            { src: k8sCurrent, alt: "Kubernetes rightsizing — current usage" },
            { src: k8sRecommended, alt: "Kubernetes rightsizing — recommended configuration" },
            { src: k8sExpanded, alt: "Kubernetes rightsizing — expanded detail" },
          ]}
        />

        <CardContainer>
          <CardSection sectionTitle="Node reconsolidation">
            <p>Reconsolidating workloads onto fewer nodes to reclaim wasted capacity.</p>
          </CardSection>
        </CardContainer>
        <ImageCarousel
          className="bg-white"
          images={[
            { src: k8sReconsolidation1, alt: "Kubernetes node reconsolidation — 1" },
            { src: k8sReconsolidation2, alt: "Kubernetes node reconsolidation — 2" },
            { src: k8sReconsolidation3, alt: "Kubernetes node reconsolidation — 3" },
            { src: k8sReconsolidation4, alt: "Kubernetes node reconsolidation — 4" },
            { src: k8sReconsolidation5, alt: "Kubernetes node reconsolidation — 5" },
          ]}
        />

        <CardContainer>
          <CardSection sectionTitle="Spot instances">
            <p>Shifting eligible workloads onto cheaper spot capacity.</p>
          </CardSection>
        </CardContainer>
        <ImageCarousel
          className="bg-white"
          images={[
            { src: k8sSpot1, alt: "Kubernetes spot — 1" },
            { src: k8sSpot2, alt: "Kubernetes spot — 2" },
            { src: k8sSpot3, alt: "Kubernetes spot — 3" },
            { src: k8sSpot4, alt: "Kubernetes spot — 4" },
            { src: k8sSpot5, alt: "Kubernetes spot — 5" },
          ]}
        />

        <CardContainer>
          <CardSection sectionTitle="Templatizing the savings views">
            {/* DRAFT — verify voice/details */}
            <p>I treat every savings type — rightsizing, reconsolidation, spot, commitments — as one system, not a pile of one-offs.</p>
            <p>On the <b>overview pages</b> the reuse is obvious at a glance: they share one template, so a new savings type drops into a familiar layout.</p>
            <p>The <b>actions pages</b> look different on the surface — but underneath they all run on the same model I call <b>Projections</b>: select what you might change, preview the projected impact, then decide. Same backbone, different skins.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={dashboards} alt="Reusable savings dashboard template" className="bg-white border-t border-b"/>
      </Windows95FrameInner>
      {/* Section - Kubernetes rightsizing: END */}
      

      {/* * * * * Section - AI logs: START * * * * */}
      <div id="ai-logs" className="scroll-mt-4" />
      <CaseStudyTitleDivider title="AI logs"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Vibe-coded in a day">
            <p>An exploration of an AI logs experience — vibe-coded into a working prototype in a single day.</p>
          </CardSection>
        </CardContainer>
        <ImageCarousel
          className="bg-white"
          images={[
            { src: aiLogs6, alt: "AI logs — 1" },
            { src: aiLogs1, alt: "AI logs — 2" },
            { src: aiLogs2, alt: "AI logs — 3" },
            { src: aiLogs3, alt: "AI logs — 4" },
            { src: aiLogs4, alt: "AI logs — 5" },
            { src: aiLogs5, alt: "AI logs — 6" },
          ]}
        />
      </Windows95FrameInner>
      {/* Section - AI logs: END */}

      {/* * * * * Section - Designing quick: START * * * * */}
      <CaseStudyTitleDivider title="Designing quick"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Quick UI fix — from date picker to scrubber">
            <div className="flex items-center gap-3 mb-2">
              <TimePill>10 min</TimePill>
            </div>
            <p>Setting a three-year range with a date picker felt wrong. The insight: you&apos;re not picking dates, you&apos;re moving through time. I handed my frontend dev one clear direction — date picker → <b>scrubber</b> — and he ran with it. Ten minutes of design time.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={commPlannerUIFix1} alt="Date picker to scrubber fix" className="bg-white border-t border-b"/>
      </Windows95FrameInner>

      <Windows95FrameInner>
        <CardContainer>
          <CardSection sectionTitle="Shipping UI fixes straight to prod">
            <p>More and more, I make the fix myself — straight in the codebase with Cursor. Polish that used to die in the backlog now ships, and I get to the final vision a lot faster.</p>
          </CardSection>
        </CardContainer>
        <CaseStudyImage src={commPlannerUIFix2} alt="Renewals graph fix shipped in prod" className="bg-white border-t border-b"/>
      </Windows95FrameInner>
      {/* Section - Designing quick: END */}

      {/* * * * * Section - Shoutouts: START * * * * */}
      <div id="shoutouts" className="scroll-mt-4" />
      
      <div className="flex flex-col">
        <h2 className="font-Doto title-3 py-[0.22rem] mx-auto">Shoutouts</h2>
      </div>
      
      

        

      
      {/* Section - Shoutouts: END */}

      {/* * * * * Section - Get in touch: START * * * * */}
      <CaseStudyTitleDivider title="Get in touch"/>
      <Windows95FrameInner>
        <CardContainer>
          <CardSection>
            <p>For a more detailed walkthrough, get in touch with me at <a href="mailto:ogum536@gmail.com" className="font-Doto text-blue-800 underline underline-offset-2 hover:no-underline">ogum536@gmail.com</a> 🌸</p>
          </CardSection>
        </CardContainer>
      </Windows95FrameInner>
      {/* Section - Get in touch: END */}

      {/* Full screen image overlay: START */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setOpenImage(null)}
        >
          <button
            className="absolute top-0 right-4 md:top-4 md:right-8 font-Doto text-white hover:text-gray-400 text-[2.5rem] p-1 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setOpenImage(null);
            }}
          >
            ×
          </button>
          <img
            src={openImage}
            alt="Full-size"
            className="max-h-screen w-auto max-w-[93%] md:max-w-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Full screen image overlay: END */}

    </div>
  );
}
