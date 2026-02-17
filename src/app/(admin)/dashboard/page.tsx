"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/admin/project-card";
import { ActivityFeed } from "@/components/admin/activity-feed";
import { InviteClientModal } from "@/components/admin/invite-modal";
import {
  Users,
  FolderKanban,
  FileText,
  Eye,
  UserPlus,
  Plus,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import type { ProjectStatus, ActivityType } from "@/types";

// Mock data - in production, fetch from API
const mockStats = {
  clients: 8,
  activeProjects: 3,
  documents: 12,
  unseenDocs: 2,
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
    name: "Business Restructuring",
    status: "review",
    docCount: 5,
    unreadMessages: 2,
  },
];

const mockActivity: {
  id: string;
  type: ActivityType;
  clientName: string;
  resourceName: string;
  timestamp: Date;
}[] = [
  {
    id: "1",
    type: "view",
    clientName: "Acme Corp",
    resourceName: "Q4 Report",
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
  },
  {
    id: "2",
    type: "download",
    clientName: "Johnson LLC",
    resourceName: "contract.pdf",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
  },
  {
    id: "3",
    type: "message",
    clientName: "Chen Co.",
    resourceName: "Audit Prep",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: "4",
    type: "login",
    clientName: "Nguyen & Partners",
    resourceName: "",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
];

const mockClients = [
  { id: "1", name: "Acme Corp", email: "contact@acme.com" },
  { id: "2", name: "Johnson LLC", email: "info@johnson.com" },
  { id: "3", name: "Chen Co.", email: "chen@chen.co" },
];

export default function DashboardPage() {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const handleInvite = async (
    email: string,
    name: string,
    projectIds: string[]
  ) => {
    // In production: POST to /api/clients/invite
    console.log("Inviting client:", { email, name, projectIds });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back. Here&apos;s what&apos;s happening.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
          <Button onClick={() => setInviteModalOpen(true)} className="gap-2">
            <UserPlus className="w-4 h-4" />
            Invite Client
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockStats.clients}</p>
              <p className="text-sm text-muted-foreground">Clients</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <FolderKanban className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockStats.activeProjects}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockStats.documents}</p>
              <p className="text-sm text-muted-foreground">Documents</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Eye className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{mockStats.unseenDocs}</p>
              {mockStats.unseenDocs > 0 && (
                <Badge variant="secondary" className="text-xs">
                  New
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Unseen</p>
          </div>
        </Card>
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Recent Activity</h2>
            </div>
            <Link
              href="/activity"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <ActivityFeed events={mockActivity} limit={5} />
        </Card>

        {/* Clients */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Clients</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setInviteModalOpen(true)}
            >
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {mockClients.map((client) => (
              <Link
                key={client.id}
                href={`/clients/${client.id}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">
                  {client.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{client.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {client.email}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
          <Link href="/clients">
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Clients
            </Button>
          </Link>
        </Card>
      </div>

      {/* Projects */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-muted-foreground" />
            <h2 className="font-semibold">Active Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => console.log("Navigate to project:", project.id)}
            />
          ))}
        </div>
      </Card>

      {/* Invite Modal */}
      <InviteClientModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
        onInvite={handleInvite}
        projects={mockProjects}
      />
    </div>
  );
}
