import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  image?: string;
  onClick?: () => void;
}

export function ServiceCard({ title, description, icon: Icon, image, onClick }: ServiceCardProps) {
  return (
    <Card className="p-4 bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group" onClick={onClick}>
      <div className="flex flex-col items-center text-center space-y-3">
        {image ? (
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        
        <div>
          <h3 className="font-medium text-foreground mb-1">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          )}
        </div>
        
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3 h-3" />
        </Button>
      </div>
    </Card>
  );
}