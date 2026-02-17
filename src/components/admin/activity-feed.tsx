"use client";

import { cn } from "@/lib/utils";
import { Eye, Download, MessageCircle, UserPlus } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { ActivityType } from "@/types";

interface ActivityEvent {
  id: string;
  type: ActivityType;
  clientName: string;
  resourceName?: string;
  timestamp: Date;
}

interface ActivityFeedItemProps {
  event: ActivityEvent;
  compact?: boolean;
  className?: string;
}

const ACTIVITY_CONFIG: Record<
  ActivityType,
  { icon: typeof Eye; color: string; borderColor: string; verb: string }
> = {
  view: {
    icon: Eye,
    color: "text-blue-600",
    borderColor: "border-l-blue-500",
    verb: "Viewed",
  },
  download: {
    icon: Download,
    color: "text-green-600",
    borderColor: "border-l-green-500",
    verb: "Downloaded",
  },
  message: {
    icon: MessageCircle,
    color: "text-purple-600",
    borderColor: "border-l-purple-500",
    verb: "Sent message on",
  },
  login: {
    icon: UserPlus,
    color: "text-amber-600",
    borderColor: "border-l-amber-500",
    verb: "First portal visit",
  },
};

export function ActivityFeedItem({
  event,
  compact = false,
  className,
}: ActivityFeedItemProps) {
  const config = ACTIVITY_CONFIG[event.type];
  const Icon = config.icon;

  if (compact) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 py-2 text-sm",
          className
        )}
      >
        <Icon className={cn("w-4 h-4 flex-shrink-0", config.color)} />
        <span className="font-medium truncate">{event.clientName}</span>
        <span className="text-muted-foreground truncate">
          {config.verb.toLowerCase()} {event.resourceName}
        </span>
        <span className="text-xs text-muted-foreground flex-shrink-0 ml-auto">
          {formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-l-4 bg-card rounded-r-lg p-3",
        config.borderColor,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
            config.color,
            "bg-current/10"
          )}
        >
          <Icon className={cn("w-4 h-4", config.color)} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium">{event.clientName}</p>
          <p className="text-sm text-muted-foreground">
            {config.verb} {event.resourceName}
          </p>
        </div>
        <span className="text-xs text-muted-foreground flex-shrink-0">
          {formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}

interface ActivityFeedProps {
  events: ActivityEvent[];
  compact?: boolean;
  limit?: number;
  className?: string;
}

export function ActivityFeed({
  events,
  compact = false,
  limit,
  className,
}: ActivityFeedProps) {
  const displayEvents = limit ? events.slice(0, limit) : events;

  // Group by date
  const groupedByDate = displayEvents.reduce((acc, event) => {
    const dateKey = new Date(event.timestamp).toDateString();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let label = dateKey;
    if (dateKey === today) label = "Today";
    else if (dateKey === yesterday) label = "Yesterday";

    if (!acc[label]) acc[label] = [];
    acc[label].push(event);
    return acc;
  }, {} as Record<string, ActivityEvent[]>);

  if (compact) {
    return (
      <div className={cn("divide-y", className)}>
        {displayEvents.map((event) => (
          <ActivityFeedItem key={event.id} event={event} compact />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {Object.entries(groupedByDate).map(([date, dateEvents]) => (
        <div key={date}>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            {date}
          </h4>
          <div className="space-y-2">
            {dateEvents.map((event) => (
              <ActivityFeedItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
      {displayEvents.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">
          No activity yet. Invite your first client to get started.
        </p>
      )}
    </div>
  );
}
