import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Download, RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}: SearchFiltersProps) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜索商品名称、品牌或关键词..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="default" className="px-6">
              <Search className="w-4 h-4 mr-2" />
              搜索
            </Button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">筛选条件:</span>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="商品类目" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部类目</SelectItem>
                <SelectItem value="fashion">服装配饰</SelectItem>
                <SelectItem value="beauty">美妆护肤</SelectItem>
                <SelectItem value="food">食品饮料</SelectItem>
                <SelectItem value="home">家居生活</SelectItem>
                <SelectItem value="electronics">数码家电</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">价格区间:</span>
              <div className="w-32">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground">
                ¥{priceRange[0]} - ¥{priceRange[1]}
              </span>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales_desc">销量降序</SelectItem>
                <SelectItem value="sales_asc">销量升序</SelectItem>
                <SelectItem value="price_desc">价格降序</SelectItem>
                <SelectItem value="price_asc">价格升序</SelectItem>
                <SelectItem value="trend_desc">趋势降序</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                重置
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                导出数据
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}