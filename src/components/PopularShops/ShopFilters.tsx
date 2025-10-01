import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industries = [
  "全部", "居家", "美食", "服饰", "美妆", "母婴", "数码", "运动",
  "图书", "宠物", "汽车", "医疗", "教育", "旅游", "时尚"
];

const categories = [
  "全部", "服饰内衣", "鞋靴箱包", "运动户外", "美妆", "个护家清",
  "食品饮料", "生鲜", "母婴宠物", "3C数码家电", "家居家装"
];

const quickFilters = [
  "黑马小店", "品牌直营", "高销量店", "新晋热店", "口碑优选"
];

export function ShopFilters() {
  const [activeTab, setActiveTab] = useState("全部小店");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const tabs = ["全部小店", "直播小店", "热销小店", "新店推荐"];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 space-y-6">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="请输入店铺名、抖音号、主页链接"
            className="pl-10"
          />
        </div>
        <Button className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary hover:to-pink-600">
          搜索
        </Button>
      </div>

      {/* Industry Categories */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">所属行业：</span>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            展开全部 <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant={industry === "全部" ? "default" : "outline"}
              className="cursor-pointer hover:bg-muted"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-foreground">带货类目：</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "全部" ? "default" : "outline"}
              className="cursor-pointer hover:bg-muted"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Sales Data Filters */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-foreground">销售数据：</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="30日销售额" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">不限</SelectItem>
              <SelectItem value="0-10">0-10万</SelectItem>
              <SelectItem value="10-50">10-50万</SelectItem>
              <SelectItem value="50-100">50-100万</SelectItem>
              <SelectItem value="100+">100万+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="平均销量" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">不限</SelectItem>
              <SelectItem value="0-1000">0-1000</SelectItem>
              <SelectItem value="1000-5000">1000-5000</SelectItem>
              <SelectItem value="5000+">5000+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="商品数量" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">不限</SelectItem>
              <SelectItem value="0-50">0-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="100-500">100-500</SelectItem>
              <SelectItem value="500+">500+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="店铺评分" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">不限</SelectItem>
              <SelectItem value="4.8+">4.8分以上</SelectItem>
              <SelectItem value="4.5-4.8">4.5-4.8分</SelectItem>
              <SelectItem value="4.0-4.5">4.0-4.5分</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-foreground">高级筛选：</span>
        <div className="flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilters.includes(filter) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter)}
              className={selectedFilters.includes(filter) ? "bg-gradient-to-r from-primary to-pink-500" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-pink-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
