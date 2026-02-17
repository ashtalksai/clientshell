"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LogoUploaderProps {
  value: string | null;
  onChange: (url: string | null) => void;
  className?: string;
}

export function LogoUploader({ value, onChange, className }: LogoUploaderProps) {
  const [preview, setPreview] = useState<string | null>(value);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setPreview(result);
          onChange(result); // In production, upload to storage and return URL
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxSize: 2 * 1024 * 1024, // 2MB
    multiple: false,
  });

  const handleRemove = () => {
    setPreview(null);
    onChange(null);
  };

  return (
    <div className={className}>
      {preview ? (
        <div className="relative inline-block">
          <div className="border rounded-lg p-4 bg-muted/50">
            <img
              src={preview}
              alt="Logo preview"
              className="max-h-20 max-w-40 object-contain"
            />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute -top-2 -right-2 h-6 w-6"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-muted-foreground/50"
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-2">
            {isDragActive ? (
              <ImageIcon className="h-10 w-10 text-primary" />
            ) : (
              <Upload className="h-10 w-10 text-muted-foreground" />
            )}
            <p className="text-sm font-medium">
              {isDragActive ? "Drop logo here" : "Upload logo"}
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, SVG, JPG · Max 2MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
