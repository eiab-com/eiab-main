"use client";

import { useState, useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { updateAdventurePublishedStatus } from "@/actions/adventures";
import { toast } from "sonner";

interface AdventurePublishSwitchProps {
  id: string;
  initialPublished: boolean;
}

export function AdventurePublishSwitch({ id, initialPublished }: AdventurePublishSwitchProps) {
  const [isPending, startTransition] = useTransition();
  const [published, setPublished] = useState(initialPublished);

  const onCheckedChange = (newPublished: boolean) => {
    setPublished(newPublished);
    startTransition(async () => {
      const result = await updateAdventurePublishedStatus(id, newPublished);
      if (result.success) {
        toast.success(`Adventure ${newPublished ? "published" : "unpublished"}.`);
      } else {
        toast.error("Failed to update adventure status.");
        // Revert optimistic update on failure
        setPublished(!newPublished);
      }
    });
  };

  return (
    <div className="flex items-center space-x-2">
       <Switch
        id={`publish-switch-${id}`}
        checked={published}
        onCheckedChange={onCheckedChange}
        disabled={isPending}
        aria-readonly={isPending}
      />
      <label htmlFor={`publish-switch-${id}`} className="text-xs font-mono text-neutral-400">
        {published ? "Published" : "Draft"}
      </label>
    </div>
  );
}
