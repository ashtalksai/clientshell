"use client";

import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/admin/project-card";
import { DocumentCard } from "@/components/admin/document-card";
import { ActivityFeed } from "@/components/admin/activity-feed";
import {
  ArrowLeft,
  Mail,
  Building2,
  Calendar,
  FolderKanban,
  FileText,
  Activity,
  MessageCircle,
  MoreHorizontal,
  Send,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow, format } from "date-fns";
import type { ProjectStatus, ActivityType } from "@/types";

// Mock data - in production, fetch from API based on client ID
const mockClients: Record<
  string,
  {
    id: string;
    name: string;
    email: string;
    company: string;
    phone?: string;
    joinedAt: Date;
    lastActive: Date;
    status: "active" | "idle" | "pending";
  }
> = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    email: "contact@acme.com",
    company: "Acme Corp",
    phone: "+1 (555) 123-4567",
    joinedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
    status: "active",
  },
  "2": {
    id: "2",
    name: "Michael Chen",
    email: "info@johnson.com",
    company: "Johnson LLC",
    joinedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000),
    status: "idle",
  },
  "3": {
    id: "3",
    name: "Emily Chen",
    email: "chen@chen.co",
    company: "Chen Co.",
    joinedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    lastActive: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "active",
  },
};

const mockProjects: Record<
  string,
  { id: string; name: string; status: ProjectStatus; docCount: number; unreadMessages: number }[]
> = {
  "1": [
    { id: "1", name: "Q4 Tax Filing", status: "in_progress", docCount: 3, unreadMessages: 1 },
    { id: "2", name: "2024 Audit Prep", status: "not_started", docCount: 1, unreadMessages: 0 },
  ],
  "2": [{ id: "3", name: "Annual Review", status: "review", docCount: 2, unreadMessages: 0 }],
  "3": [
    { id: "4", name: "Business Restructuring", status: "review", docCount: 5, unreadMessages: 2 },
    { id: "5", name: "Tax Planning 2025", status: "not_started", docCount: 0, unreadMessages: 0 },
    { id: "6", name: "Q3 Financials", status: "complete", docCount: 4, unreadMessages: 0 },
  ],
};

const mockDocuments: Record<
  string,
  { id: string; name: string; mimeType: string; size: number; uploadedAt: Date; viewCount: number }[]
> = {
  "1": [
    {
      id: "d1",
      name: "Q4 Engagement Letter.pdf",
      mimeType: "application/pdf",
      size: 245000,
      uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      viewCount: 3,
    },
    {
      id: "d2",
      name: "Tax Checklist 2024.pdf",
      mimeType: "application/pdf",
      size: 128000,
      uploadedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      viewCount: 1,
    },
    {
      id: "d3",
      name: "Financial Summary.xlsx",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      size: 89000,
      uploadedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      viewCount: 0,
    },
  ],
  "2": [
    {
      id: "d4",
      name: "Annual Review Draft.pdf",
      mimeType: "application/pdf",
      size: 312000,
      uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      viewCount: 2,
    },
  ],
  "3": [
    {
      id: "d5",
      name: "Restructuring Proposal.pdf",
      mimeType: "application/pdf",
      size: 456000,
      uploadedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      viewCount: 5,
    },
    {
      id: "d6",
      name: "Q3 Report Final.pdf",
      mimeType: "application/pdf",
      size: 234000,
      uploadedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      viewCount: 2,
    },
  ],
};

const mockActivity: Record<
  string,
  { id: string; type: ActivityType; clientName: string; resourceName: string; timestamp: Date }[]
> = {
  "1": [
    { id: "a1", type: "view", clientName: "Acme Corp", resourceName: "Q4 Engagement Letter.pdf", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) },
    { id: "a2", type: "download", clientName: "Acme Corp", resourceName: "Tax Checklist 2024.pdf", timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000) },
    { id: "a3", type: "message", clientName: "Acme Corp", resourceName: "Q4 Tax Filing", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { id: "a4", type: "login", clientName: "Acme Corp", resourceName: "", timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  ],
  "2": [
    { id: "a5", type: "view", clientName: "Johnson LLC", resourceName: "Annual Review Draft.pdf", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { id: "a6", type: "login", clientName: "Johnson LLC", resourceName: "", timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
  ],
  "3": [
    { id: "a7", type: "download", clientName: "Chen Co.", resourceName: "Restructuring Proposal.pdf", timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
    { id: "a8", type: "message", clientName: "Chen Co.", resourceName: "Business Restructuring", timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) },
  ],
};

function getStatusColor(status: "active" | "idle" | "pending") {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "idle":
      return "bg-gray-100 text-gray-700";
    case "pending":
      return "bg-amber-100 text-amber-700";
  }
}

function getStatusLabel(status: "active" | "idle" | "pending") {
  switch (status) {
    case "active":
      return "Active";
    case "idle":
      return "Idle";
    case "pending":
      return "Pending Invite";
  }
}

export default function ClientDetailPage() {
  const params = useParams();
  const clientId = params.id as string;

  const client = mockClients[clientId];
  const projects = mockProjects[clientId] || [];
  const documents = mockDocuments[clientId] || [];
  const activity = mockActivity[clientId] || [];

  if (!client) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <Card className="p-8 text-center">
          <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">Client not found</h2>
          <p className="text-muted-foreground mb-4">
            The client you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/clients">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Clients
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Back button */}
      <Link
        href="/clients"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Clients
      </Link>

      {/* Client Header */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-semibold">
              {client.company.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold">{client.company}</h1>
                <Badge className={getStatusColor(client.status)}>
                  {getStatusLabel(client.status)}
                </Badge>
              </div>
              <p className="text-muted-foreground">{client.name}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                <a
                  href={`mailto:${client.email}`}
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {client.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Joined {format(client.joinedAt, "MMM d, yyyy")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${client.email}`}>
                <Send className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
            <Button size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              View as Client
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
          <div>
            <p className="text-2xl font-bold">{projects.length}</p>
            <p className="text-sm text-muted-foreground">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{documents.length}</p>
            <p className="text-sm text-muted-foreground">Documents</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              {documents.reduce((sum, d) => sum + d.viewCount, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Doc Views</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-muted-foreground">
              {formatDistanceToNow(client.lastActive, { addSuffix: false })}
            </p>
            <p className="text-sm text-muted-foreground">Last Active</p>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects" className="gap-2">
            <FolderKanban className="w-4 h-4" />
            Projects
            <Badge variant="secondary" className="ml-1 text-xs">
              {projects.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="documents" className="gap-2">
            <FileText className="w-4 h-4" />
            Documents
            <Badge variant="secondary" className="ml-1 text-xs">
              {documents.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="activity" className="gap-2">
            <Activity className="w-4 h-4" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="messages" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Messages
          </TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => console.log("Navigate to project:", project.id)}
                />
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <FolderKanban className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-semibold mb-1">No projects yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create a project to start collaborating with this client.
              </p>
              <Button>
                <FolderKanban className="w-4 h-4 mr-2" />
                Create Project
              </Button>
            </Card>
          )}
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-3">
          {documents.length > 0 ? (
            documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                doc={doc}
                showStats
                onDownload={() => console.log("Download:", doc.id)}
              />
            ))
          ) : (
            <Card className="p-8 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-semibold mb-1">No documents yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload documents to share with this client.
              </p>
              <Button>
                <FileText className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </Card>
          )}
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity">
          <Card className="p-6">
            {activity.length > 0 ? (
              <ActivityFeed events={activity} />
            ) : (
              <div className="text-center py-8">
                <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-semibold mb-1">No activity yet</h3>
                <p className="text-sm text-muted-foreground">
                  Activity will appear here when this client views or downloads documents.
                </p>
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages">
          <Card className="p-6">
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Messages coming soon</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send and receive messages with {client.company} directly in the portal.
              </p>
              <Button variant="outline" asChild>
                <a href={`mailto:${client.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email {client.name}
                </a>
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
