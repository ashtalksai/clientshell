import type { Firm, Client, Project, Document, Activity, Message } from "@prisma/client";

export type { Firm, Client, Project, Document, Activity, Message };

export type FirmWithRelations = Firm & {
  users?: { id: string; email: string; name: string | null }[];
  clients?: Client[];
  projects?: Project[];
};

export type ProjectWithRelations = Project & {
  clients?: { client: Client }[];
  documents?: Document[];
  messages?: Message[];
};

export type DocumentWithRelations = Document & {
  clients?: { client: Client; viewedAt: Date | null; downloadedAt: Date | null }[];
  project?: Project | null;
};

export type ActivityWithRelations = Activity & {
  client: Client;
  document?: Document | null;
};

export type ClientWithRelations = Client & {
  projects?: { project: Project }[];
  documents?: { document: Document }[];
};

// Branding wizard state
export interface BrandingData {
  name: string;
  logoUrl: string | null;
  primaryColor: string;
  subdomain: string;
  template: "security" | "accounting" | "legal" | "marketing" | "consulting";
}

// Project status
export type ProjectStatus = "not_started" | "in_progress" | "review" | "complete";

export const PROJECT_STATUSES: { value: ProjectStatus; label: string; color: string }[] = [
  { value: "not_started", label: "Not Started", color: "bg-gray-500" },
  { value: "in_progress", label: "In Progress", color: "bg-blue-500" },
  { value: "review", label: "Review", color: "bg-amber-500" },
  { value: "complete", label: "Complete", color: "bg-green-500" },
];

// Activity types
export type ActivityType = "view" | "download" | "login" | "message";

// Template options
export const TEMPLATES = [
  { value: "security", label: "Security Consulting", projectLabel: "Engagements" },
  { value: "accounting", label: "Accounting", projectLabel: "Projects" },
  { value: "legal", label: "Legal Services", projectLabel: "Matters" },
  { value: "marketing", label: "Marketing Agency", projectLabel: "Campaigns" },
  { value: "consulting", label: "Consulting", projectLabel: "Projects" },
] as const;
