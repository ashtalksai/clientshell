"use client";

import { ClientPortalShell } from "@/components/portal/client-shell";
import { ProjectCard } from "@/components/admin/project-card";
import type { ProjectStatus } from "@/types";

const mockFirm = {
  name: "Smith & Associates",
  logoUrl: null,
  primaryColor: "#1E3A5F",
  accentColor: "#3B82F6",
};

const mockClient = {
  name: "Acme Corp",
  email: "sarah@acme.com",
};

const mockProjects: {
  id: string;
  name: string;
  status: ProjectStatus;
  docCount: number;
  unreadMessages: number;
}[] = [
  {
    id: "1",
    name: "Q4 Tax Filing",
    status: "in_progress",
    docCount: 3,
    unreadMessages: 1,
  },
  {
    id: "2",
    name: "2024 Audit Prep",
    status: "not_started",
    docCount: 1,
    unreadMessages: 0,
  },
  {
    id: "3",
    name: "Q3 Financial Review",
    status: "complete",
    docCount: 5,
    unreadMessages: 0,
  },
];

export default function PortalProjectsPage() {
  return (
    <ClientPortalShell firm={mockFirm} client={mockClient}>
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Your Projects</h1>
          <p className="text-muted-foreground">
            Track the status of your projects with {mockFirm.name}.
          </p>
        </div>

        <div className="space-y-4">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isClientView
              onClick={() => console.log("View project:", project.id)}
            />
          ))}
        </div>
      </div>
    </ClientPortalShell>
  );
}
