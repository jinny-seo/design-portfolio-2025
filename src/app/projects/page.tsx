import { redirect } from "next/navigation";

// /projects has no index of its own — send visitors to the Pump case study.
export default function ProjectsIndex() {
  redirect("/projects/pump");
}
