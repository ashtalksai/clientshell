"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DocumentCard } from "@/components/admin/document-card";
import { Search, Upload, FileText } from "lucide-react";

const mockDocuments = [
  { id: "1", name: "Q4 Engagement Letter", mimeType: "application/pdf", size: 245000, uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), viewCount: 3, downloadCount: 1 },
  { id: "2", name: "Tax Checklist 2024", mimeType: "application/pdf", size: 128000, uploadedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), viewCount: 5, downloadCount: 2 },
  { id: "3", name: "Financial Statement Q3", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", size: 456000, uploadedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), viewCount: 2, downloadCount: 2 },
  { id: "4", name: "Retainer Agreement", mimeType: "application/pdf", size: 89000, uploadedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), viewCount: 1, downloadCount: 0 },
];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockDocuments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground text-sm">{mockDocuments.length} documents</p>
        </div>
        <Button className="gap-2">
          <Upload className="w-4 h-4" />
          Upload
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((doc) => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            showStats
            onDownload={() => console.log("Download:", doc.id)}
            onShare={() => console.log("Share:", doc.id)}
          />
        ))}
        {filtered.length === 0 && (
          <Card className="p-8 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No documents found</p>
          </Card>
        )}
      </div>
    </div>
  );
}
