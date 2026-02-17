"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/admin/project-card";
import { DocumentCard } from "@/components/admin/document-card";
import { ClientPortalShell } from "@/components/portal/client-shell";
import { FileText, FolderKanban, MessageCircle, Download } from "lucide-react";
import Link from "next/link";
import type { ProjectStatus } from "@/types";

// Mock data - in production, fetch from API based on subdomain + client auth
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
];

const mockDocuments = [
  {
    id: "1",
    name: "Q4 Engagement Letter",
    mimeType: "application/pdf",
    size: 245000,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "2",
    name: "Tax Checklist 2024",
    mimeType: "application/pdf",
    size: 128000,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
  },
];

export default function ClientPortalHome() {
  return (
    <ClientPortalShell firm={mockFirm} client={mockClient}>
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">
            Here&apos;s the latest from {mockFirm.name}.
          </p>
        </div>

        {/* Projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FolderKanban className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Your Projects</h2>
            </div>
            <Link
              href="/portal/projects"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mockProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isClientView
                onClick={() => console.log("View project:", project.id)}
              />
            ))}
          </div>
        </section>

        {/* Recent Documents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Recent Documents</h2>
            </div>
            <Link
              href="/portal/documents"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {mockDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                doc={doc}
                onDownload={() => console.log("Download:", doc.id)}
              />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Need help?</p>
                <p className="text-sm text-muted-foreground">
                  Send a message to your team at {mockFirm.name}.
                </p>
              </div>
              <Link href="/portal/messages">
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </ClientPortalShell>
  );
}
