"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        setError(null);
        setIsLoading(true);

        // Initialize mermaid with dark theme configuration
        mermaid.initialize({
          startOnLoad: true,
          theme: "dark",
          securityLevel: "loose",
          darkMode: true,
          themeVariables: {
            primaryColor: "#14b8a6",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#0d9488",
            secondaryColor: "#2d3139",
            secondaryTextColor: "#e2e8f0",
            secondaryBorderColor: "#475569",
            backgroundColor: "#1a1d23",
            mainBkg: "#14b8a6",
            secondBkg: "#2d3139",
            tertiaryColor: "#1a1d23",
            tertiaryTextColor: "#cbd5e1",
            tertiaryBorderColor: "#475569",
            fontFamily: "Inter, Noto Sans JP, sans-serif",
            fontSize: "14px",
            fontFamilyMonospace: "monospace",
          },
          flowchart: {
            htmlLabels: true,
            curve: "linear",
          },
        } as any);

        if (containerRef.current) {
          // Clear previous content
          containerRef.current.innerHTML = "";

          // Create a wrapper for the diagram
          const wrapper = document.createElement("div");
          wrapper.className = "mermaid";
          wrapper.textContent = chart;

          containerRef.current.appendChild(wrapper);

          // Render the diagram
          await mermaid.contentLoaded();
        }

        setIsLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to render diagram";
        setError(errorMessage);
        setIsLoading(false);
        console.error("Mermaid rendering error:", err);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div
      className={cn(
        "relative rounded-lg border border-slate-700 bg-slate-900/50 p-4",
        "overflow-x-auto min-w-0",
        className
      )}
    >
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="text-slate-400">Loading diagram...</div>
        </div>
      )}

      {error && (
        <div className="rounded-md bg-red-900/20 border border-red-700 p-4">
          <p className="text-red-300 font-medium">Error rendering diagram</p>
          <p className="text-red-200 text-sm mt-2">{error}</p>
        </div>
      )}

      <div
        ref={containerRef}
        className={cn(
          "flex justify-center",
          "mermaid-container",
          isLoading || error ? "hidden" : "block"
        )}
        style={{
          minWidth: "300px",
        }}
      />
    </div>
  );
}
