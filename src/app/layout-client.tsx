"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlobalRouteBuffer from "@/components/GlobalRouteBuffer";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <GlobalRouteBuffer />
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}
