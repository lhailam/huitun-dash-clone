import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

export function StatsCard({ title, value, icon: Icon, color = "primary" }: StatsCardProps) {
  return (
    <Card className="p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-r from-${color} to-pink-500 bg-opacity-10`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
}