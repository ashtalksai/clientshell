"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECT_STATUSES, type ProjectStatus } from "@/types";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    status: ProjectStatus;
    docCount?: number;
    unreadMessages?: number;
  };
  onClick?: () => void;
  isClientView?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  onClick,
  isClientView = false,
  className,
}: ProjectCardProps) {
  const statusConfig = PROJECT_STATUSES.find((s) => s.value === project.status);

  return (
    <Card
      className={cn(
        "p-4 cursor-pointer transition-all hover:shadow-md hover:scale-[1.01]",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium">{project.name}</h3>
        <Badge
          className={cn(
            "text-xs",
            statusConfig?.value === "not_started" &&
              "bg-gray-100 text-gray-700 hover:bg-gray-100",
            statusConfig?.value === "in_progress" &&
              "bg-blue-100 text-blue-700 hover:bg-blue-100",
            statusConfig?.value === "review" &&
              "bg-amber-100 text-amber-700 hover:bg-amber-100",
            statusConfig?.value === "complete" &&
              "bg-green-100 text-green-700 hover:bg-green-100"
          )}
        >
          {statusConfig?.label}
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <FileText className="w-4 h-4" />
          {project.docCount || 0} docs
        </span>
        {project.unreadMessages && project.unreadMessages > 0 && (
          <span className="flex items-center gap-1 text-primary font-medium">
            <MessageCircle className="w-4 h-4" />
            {project.unreadMessages} unread
          </span>
        )}
      </div>
    </Card>
  );
}

// Kanban column for admin dashboard
interface KanbanColumnProps {
  status: ProjectStatus;
  projects: ProjectCardProps["project"][];
  onProjectClick?: (projectId: string) => void;
}

export function KanbanColumn({
  status,
  projects,
  onProjectClick,
}: KanbanColumnProps) {
  const statusConfig = PROJECT_STATUSES.find((s) => s.value === status);

  return (
    <div className="flex-1 min-w-[280px] bg-muted/50 rounded-lg p-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", statusConfig?.color)} />
          <h3 className="font-medium text-sm">{statusConfig?.label}</h3>
        </div>
        <Badge variant="secondary" className="text-xs">
          {projects.length}
        </Badge>
      </div>
      <div className="space-y-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick?.(project.id)}
          />
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            No projects
          </p>
        )}
      </div>
    </div>
  );
}
