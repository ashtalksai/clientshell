"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check, Mail, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
}

interface InviteClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (email: string, name: string, projectIds: string[]) => Promise<void>;
  projects: Project[];
}

export function InviteClientModal({
  isOpen,
  onClose,
  onInvite,
  projects,
}: InviteClientModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const toggleProject = (projectId: string) => {
    setSelectedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handleSubmit = async () => {
    if (!isValidEmail || !name.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await onInvite(email, name, selectedProjects);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        // Reset form
        setEmail("");
        setName("");
        setSelectedProjects([]);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError("Failed to send invite. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setEmail("");
      setName("");
      setSelectedProjects([]);
      setSuccess(false);
      setError(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Magic Link Sent!</h3>
            <p className="text-muted-foreground text-sm">
              {name} will receive an email with a secure login link.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Invite a Client</DialogTitle>
              <DialogDescription>
                They&apos;ll receive a magic link to access their portal.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Client Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@company.com"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Client Name
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Acme Corp"
                />
              </div>

              {projects.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Assign to Projects (optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projects.map((project) => (
                      <Badge
                        key={project.id}
                        variant={
                          selectedProjects.includes(project.id)
                            ? "default"
                            : "outline"
                        }
                        className={cn(
                          "cursor-pointer transition-colors",
                          selectedProjects.includes(project.id)
                            ? "bg-primary"
                            : "hover:bg-muted"
                        )}
                        onClick={() => toggleProject(project.id)}
                      >
                        {project.name}
                        {selectedProjects.includes(project.id) && (
                          <X className="w-3 h-3 ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">
                  {error}
                </p>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isValidEmail || !name.trim() || isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Send Invite
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
