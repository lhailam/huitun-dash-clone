import { 
  DollarSign, 
  ShoppingCart, 
  Video, 
  FileText, 
  BarChart3, 
  Monitor,
  Scissors,
  Image,
  Lightbulb,
  Music,
  Search,
  Palette,
  Brain,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";
import { StatsCard } from "./StatsCard";
import { ServiceCard } from "./ServiceCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const industryStats = [
  { title: "GMV", value: "1亿+", icon: DollarSign },
  { title: "销量", value: "1亿+", icon: ShoppingCart },
  { title: "直播", value: "75.6w", icon: Video },
];

const quickAccess = [
  { title: "行研院", icon: FileText },
  { title: "榜单", icon: BarChart3 },
  { title: "监控", icon: Monitor },
];

const platformServices = [
  { title: "灰豚精选", icon: TrendingUp },
  { title: "品牌集团大屏", icon: Monitor },
  { title: "抖音小店", icon: ShoppingCart },
  { title: "巨量千川", icon: Globe },
  { title: "巨量百应", icon: Users },
  { title: "巨量引擎", icon: BarChart3 },
  { title: "巨量星图", icon: TrendingUp },
];

const contentTools = [
  { title: "违禁词检测", icon: Search },
  { title: "剪映", icon: Scissors },
  { title: "快剪辑", icon: Video },
  { title: "喵影工厂", icon: Video },
  { title: "PR", icon: Video },
];

const designTools = [
  { title: "模板制图", icon: Image },
  { title: "批量制图", icon: Palette },
  { title: "智能抠图", icon: Scissors },
  { title: "手动制图", icon: Image },
  { title: "创客贴", icon: Palette },
];

const inspirationSources = [
  { title: "创意灵感", icon: Lightbulb },
  { title: "微博热搜", icon: TrendingUp },
  { title: "百度风云榜", icon: BarChart3 },
];

const contentMaterials = [
  { title: "标题推荐", icon: Brain },
  { title: "梅花网", icon: Globe },
  { title: "顶尖文案", icon: FileText },
];

export function Dashboard() {
  return (
    <div className="flex-1 bg-muted/30 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Industry Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">行业大盘</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryStats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            {quickAccess.map((item, index) => (
              <Button key={index} variant="outline" className="gap-2">
                <item.icon className="w-4 h-4" />
                {item.title}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-6">切换行业试试~</p>
        </section>

        {/* Platform Services */}
        <section>
          <Card className="p-6 bg-white border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {platformServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </Card>
        </section>

        {/* Content Creation Tools */}
        <section>
          <h3 className="text-lg font-semibold mb-4 text-foreground">内容创作</h3>
          
          <div className="space-y-6">
            {/* Video Tools */}
            <div>
              <h4 className="text-base font-medium mb-3 text-foreground">视频剪辑</h4>
              <Card className="p-4 bg-white border border-border">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {contentTools.map((tool, index) => (
                    <ServiceCard key={index} {...tool} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Design Tools */}
            <div>
              <h4 className="text-base font-medium mb-3 text-foreground">图片制作</h4>
              <Card className="p-4 bg-white border border-border">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {designTools.map((tool, index) => (
                    <ServiceCard key={index} {...tool} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Inspiration Sources */}
            <div>
              <h4 className="text-base font-medium mb-3 text-foreground">灵感来源</h4>
              <Card className="p-4 bg-white border border-border">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {inspirationSources.map((source, index) => (
                    <ServiceCard key={index} {...source} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Content Materials */}
            <div>
              <h4 className="text-base font-medium mb-3 text-foreground">文案素材</h4>
              <Card className="p-4 bg-white border border-border">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {contentMaterials.map((material, index) => (
                    <ServiceCard key={index} {...material} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Music Materials */}
            <div>
              <h4 className="text-base font-medium mb-3 text-foreground">音乐素材</h4>
              <Card className="p-4 bg-white border border-border">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <ServiceCard title="音乐库" icon={Music} />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}