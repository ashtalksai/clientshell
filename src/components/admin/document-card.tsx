"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Share2,
  Eye,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow, differenceInDays } from "date-fns";

interface DocumentCardProps {
  doc: {
    id: string;
    name: string;
    mimeType: string;
    size: number;
    uploadedAt: Date;
    expiresAt?: Date | null;
    viewCount?: number;
    downloadCount?: number;
  };
  onDownload?: () => void;
  onShare?: () => void;
  showStats?: boolean;
  isExpired?: boolean;
  className?: string;
}

const FILE_ICONS: Record<string, string> = {
  "application/pdf": "📄",
  "application/msword": "📝",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "📝",
  "application/vnd.ms-excel": "📊",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "📊",
  default: "📁",
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function DocumentCard({
  doc,
  onDownload,
  onShare,
  showStats = false,
  isExpired = false,
  className,
}: DocumentCardProps) {
  const expiresInDays = doc.expiresAt
    ? differenceInDays(new Date(doc.expiresAt), new Date())
    : null;
  const isExpiringSoon =
    expiresInDays !== null && expiresInDays >= 0 && expiresInDays <= 7;
  const hasExpired = doc.expiresAt && new Date(doc.expiresAt) < new Date();

  const icon = FILE_ICONS[doc.mimeType] || FILE_ICONS.default;

  return (
    <Card
      className={cn(
        "p-4 transition-all hover:shadow-md",
        hasExpired && "opacity-60 bg-muted",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="text-2xl flex-shrink-0">{icon}</div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-medium truncate">{doc.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatFileSize(doc.size)} ·{" "}
                {formatDistanceToNow(new Date(doc.uploadedAt), {
                  addSuffix: true,
                })}
              </p>
            </div>

            {/* Expiry badge */}
            {hasExpired && (
              <Badge variant="destructive" className="flex-shrink-0">
                Expired
              </Badge>
            )}
            {isExpiringSoon && !hasExpired && (
              <Badge
                variant="outline"
                className="flex-shrink-0 border-amber-500 text-amber-600"
              >
                <AlertTriangle className="w-3 h-3 mr-1" />
                Expires in {expiresInDays}d
              </Badge>
            )}
          </div>

          {/* Stats */}
          {showStats && (
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {doc.viewCount || 0} views
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                {doc.downloadCount || 0} downloads
              </span>
              {doc.expiresAt && !hasExpired && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Expires{" "}
                  {formatDistanceToNow(new Date(doc.expiresAt), {
                    addSuffix: true,
                  })}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {!hasExpired && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={onDownload}
                className="h-8 w-8"
              >
                <Download className="w-4 h-4" />
              </Button>
              {onShare && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onShare}
                  className="h-8 w-8"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {hasExpired && (
        <p className="text-xs text-muted-foreground mt-2 pl-9">
          Contact your firm to renew access.
        </p>
      )}
    </Card>
  );
}
