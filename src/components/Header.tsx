import { Search, Bell, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
        
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="搜索达人、商品、直播、视频、小店或品牌" 
            className="pl-10 pr-4 bg-muted/50 border-0 focus-visible:ring-1"
          />
          <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 px-3 bg-gradient-to-r from-primary to-pink-500">
            搜索
          </Button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <span>试用版</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            升级体验版
          </Badge>
        </div>

        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium hidden md:block">用户名</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
        </div>

        <Button size="sm" className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary hover:to-pink-500">
          下载App
        </Button>
      </div>
    </header>
  );
}