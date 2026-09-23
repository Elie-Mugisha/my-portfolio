import { createBrowserRouter } from "react-router-dom";
import { portfolioData } from "@/data/portfolio";
import { MainOverview } from "@/pages/MainOverview";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { TimelinePage } from "@/pages/TimelinePage";

export const router = createBrowserRouter([
  { path: '/', element: <MainOverview /> },
  { path: '/projects', element: <ProjectsPage projects={portfolioData.projects} /> },
  { path: '/timeline', element: <TimelinePage events={portfolioData.timeline} /> }
])