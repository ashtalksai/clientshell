"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PRESET_COLORS = [
  "#1E3A5F", // Navy (default)
  "#0F766E", // Teal
  "#7C3AED", // Purple
  "#DC2626", // Red
  "#EA580C", // Orange
  "#16A34A", // Green
];

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Preset colors */}
      <div className="flex flex-wrap gap-2">
        {PRESET_COLORS.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            className={cn(
              "w-8 h-8 rounded-lg border-2 transition-all",
              value === color
                ? "border-foreground scale-110"
                : "border-transparent hover:scale-105"
            )}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className={cn(
            "w-8 h-8 rounded-lg border-2 border-dashed flex items-center justify-center text-xs font-medium transition-colors",
            showPicker
              ? "border-foreground bg-muted"
              : "border-muted-foreground/50 hover:border-muted-foreground"
          )}
        >
          +
        </button>
      </div>

      {/* Custom color picker */}
      {showPicker && (
        <div className="space-y-2 animate-in">
          <HexColorPicker color={value} onChange={onChange} style={{ width: "100%" }} />
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg border"
              style={{ backgroundColor: value }}
            />
            <Input
              type="text"
              value={value}
              onChange={(e) => {
                const val = e.target.value;
                if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                  onChange(val);
                }
              }}
              placeholder="#1E3A5F"
              className="font-mono uppercase"
            />
          </div>
        </div>
      )}

      {/* Preview swatch */}
      {!showPicker && (
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded border"
            style={{ backgroundColor: value }}
          />
          <span className="text-sm font-mono text-muted-foreground">{value}</span>
        </div>
      )}
    </div>
  );
}
