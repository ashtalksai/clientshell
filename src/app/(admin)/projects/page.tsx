"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProjectCard, KanbanColumn } from "@/components/admin/project-card";
import { Search, Plus, FolderKanban, LayoutGrid, List } from "lucide-react";
import type { ProjectStatus } from "@/types";

const mockProjects: { id: string; name: string; status: ProjectStatus; docCount: number; unreadMessages: number }[] = [
  { id: "1", name: "Q4 Tax Filing", status: "in_progress", docCount: 3, unreadMessages: 1 },
  { id: "2", name: "2024 Audit Prep", status: "not_started", docCount: 1, unreadMessages: 0 },
  { id: "3", name: "Business Restructuring", status: "review", docCount: 5, unreadMessages: 2 },
  { id: "4", name: "Annual Report", status: "complete", docCount: 8, unreadMessages: 0 },
  { id: "5", name: "Q1 Planning", status: "not_started", docCount: 0, unreadMessages: 0 },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"kanban" | "list">("kanban");

  const filtered = mockProjects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const byStatus = (status: ProjectStatus) => filtered.filter((p) => p.status === status);

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-muted-foreground text-sm">{mockProjects.length} projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex border rounded-lg">
          <Button
            variant={view === "kanban" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setView("kanban")}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button
            variant={view === "list" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setView("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {view === "kanban" ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          <KanbanColumn status="not_started" projects={byStatus("not_started")} />
          <KanbanColumn status="in_progress" projects={byStatus("in_progress")} />
          <KanbanColumn status="review" projects={byStatus("review")} />
          <KanbanColumn status="complete" projects={byStatus("complete")} />
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filtered.length === 0 && (
            <Card className="p-8 text-center">
              <FolderKanban className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No projects found</p>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
