import { 
  BarChart3, 
  Users, 
  Video, 
  ShoppingBag, 
  Store, 
  Building, 
  Monitor,
  Wrench,
  FileText,
  TrendingUp,
  Target,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: BarChart3, label: "工作台", active: true },
  { icon: TrendingUp, label: "行业" },
  { icon: Users, label: "达人" },
  { icon: Video, label: "直播" },
  { icon: ShoppingBag, label: "商品" },
  { icon: Store, label: "小店" },
  { icon: Building, label: "品牌" },
  { icon: Monitor, label: "监控" },
  { icon: Target, label: "投放" },
  { icon: Wrench, label: "本地生活" },
  { icon: FileText, label: "工具箱" },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">灰豚数据</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 h-11 text-sm",
              item.active 
                ? "bg-gradient-to-r from-primary to-pink-500 text-white shadow-md hover:from-primary hover:to-pink-500" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
            <ChevronRight className="w-3 h-3 ml-auto opacity-50" />
          </Button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full justify-start gap-3 h-11 text-sm">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          在线客服
        </Button>
      </div>
    </div>
  );
}