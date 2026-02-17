"use client";

import { useState } from "react";
import { ClientPortalShell } from "@/components/portal/client-shell";
import { DocumentCard } from "@/components/admin/document-card";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";

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
  {
    id: "3",
    name: "Financial Statement Q3",
    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    size: 456000,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
  },
  {
    id: "4",
    name: "Retainer Agreement",
    mimeType: "application/pdf",
    size: 89000,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // Expires in 5 days
  },
];

export default function PortalDocumentsPage() {
  const [search, setSearch] = useState("");

  const filteredDocs = mockDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ClientPortalShell firm={mockFirm} client={mockClient}>
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            All documents shared with you by {mockFirm.name}.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Documents list */}
        <div className="space-y-3">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <DocumentCard
                key={doc.id}
                doc={doc}
                onDownload={() => console.log("Download:", doc.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No documents found.</p>
            </div>
          )}
        </div>
      </div>
    </ClientPortalShell>
  );
}
