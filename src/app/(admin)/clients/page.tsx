"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { InviteClientModal } from "@/components/admin/invite-modal";
import { Search, UserPlus, Users, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const mockClients = [
  { id: "1", name: "Acme Corp", email: "contact@acme.com", projectCount: 2, lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: "2", name: "Johnson LLC", email: "info@johnson.com", projectCount: 1, lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  { id: "3", name: "Chen Co.", email: "chen@chen.co", projectCount: 3, lastActive: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
  { id: "4", name: "Nguyen & Partners", email: "office@nguyen.com", projectCount: 1, lastActive: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
];

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [inviteOpen, setInviteOpen] = useState(false);

  const filtered = mockClients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clients</h1>
          <p className="text-muted-foreground text-sm">{mockClients.length} clients</p>
        </div>
        <Button onClick={() => setInviteOpen(true)} className="gap-2">
          <UserPlus className="w-4 h-4" />
          Invite Client
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((client) => (
          <Card key={client.id} className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium">
                {client.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{client.name}</p>
                <p className="text-sm text-muted-foreground truncate">{client.email}</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm">{client.projectCount} projects</p>
                <p className="text-xs text-muted-foreground">
                  Active {formatDistanceToNow(client.lastActive, { addSuffix: true })}
                </p>
              </div>
              <Link href={`/clients/${client.id}`}>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <Card className="p-8 text-center">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No clients found</p>
          </Card>
        )}
      </div>

      <InviteClientModal
        isOpen={inviteOpen}
        onClose={() => setInviteOpen(false)}
        onInvite={async () => {}}
        projects={[]}
      />
    </div>
  );
}
