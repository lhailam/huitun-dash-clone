import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Store,
  TrendingUp,
  TrendingDown,
  MapPin,
  Star,
  Eye,
  Heart,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Shop {
  id: string;
  name: string;
  avatar: string;
  location: string;
  category: string;
  verified: boolean;
  tags: string[];
  followers: string;
  products: number;
  sales: string;
  revenue: string;
  avgPrice: string;
  rating: number;
  trend: "up" | "down";
  trendValue: string;
}

const mockShops: Shop[] = [
  {
    id: "1",
    name: "新华书店旗舰店",
    avatar: "/placeholder.svg",
    location: "北京",
    category: "图书教育",
    verified: true,
    tags: ["品牌自营", "官方认证"],
    followers: "8265.3w",
    products: 2847,
    sales: "158.3w",
    revenue: "6.9w",
    avgPrice: "37",
    rating: 4.9,
    trend: "up",
    trendValue: "+15.2%",
  },
  {
    id: "2",
    name: "三只松鼠官方旗舰店",
    avatar: "/placeholder.svg",
    location: "安徽",
    category: "食品饮料",
    verified: true,
    tags: ["品牌自营", "金牌店铺"],
    followers: "3875.5w",
    products: 1236,
    sales: "50.3w",
    revenue: "2.7w",
    avgPrice: "7",
    rating: 4.8,
    trend: "up",
    trendValue: "+8.5%",
  },
  {
    id: "3",
    name: "优衣库官方旗舰店",
    avatar: "/placeholder.svg",
    location: "上海",
    category: "服饰内衣",
    verified: true,
    tags: ["品牌自营", "热销店铺"],
    followers: "5821.0w",
    products: 892,
    sales: "53.3w",
    revenue: "7.287w",
    avgPrice: "33",
    rating: 4.7,
    trend: "up",
    trendValue: "+12.3%",
  },
  {
    id: "4",
    name: "完美日记官方旗舰店",
    avatar: "/placeholder.svg",
    location: "广东",
    category: "美妆",
    verified: true,
    tags: ["品牌自营", "新品首发"],
    followers: "2655.3w",
    products: 456,
    sales: "25.4w",
    revenue: "9.150w",
    avgPrice: "5",
    rating: 4.6,
    trend: "down",
    trendValue: "-3.2%",
  },
  {
    id: "5",
    name: "小米官方旗舰店",
    avatar: "/placeholder.svg",
    location: "北京",
    category: "3C数码家电",
    verified: true,
    tags: ["品牌自营", "官方认证"],
    followers: "1.6亿",
    products: 1567,
    sales: "424.3w",
    revenue: "80.1w",
    avgPrice: "1",
    rating: 4.9,
    trend: "up",
    trendValue: "+25.6%",
  },
];

export function ShopTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Actions Bar */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            已为你找到符合条件的{" "}
            <span className="text-primary font-medium">5,307</span> 个小店数据
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            导出数据
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4 mr-1" />
            收藏
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">排名</TableHead>
              <TableHead className="min-w-[280px]">小店信息</TableHead>
              <TableHead className="text-right">关注数 ↓</TableHead>
              <TableHead className="text-right">商品数 ↓</TableHead>
              <TableHead className="text-right">销量 ↓</TableHead>
              <TableHead className="text-right">销售额 ↓</TableHead>
              <TableHead className="text-right">平均价格</TableHead>
              <TableHead className="text-center">评分</TableHead>
              <TableHead className="text-center">趋势</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockShops.map((shop, index) => (
              <TableRow key={shop.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold ${
                      index < 3
                        ? "bg-gradient-to-r from-primary to-pink-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12 rounded-lg">
                      <AvatarImage src={shop.avatar} alt={shop.name} />
                      <AvatarFallback>
                        <Store className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground truncate">
                          {shop.name}
                        </span>
                        {shop.verified && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-blue-500/10 text-blue-600 border-blue-500/20"
                          >
                            认证
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <MapPin className="w-3 h-3" />
                        <span>{shop.location}</span>
                        <span>·</span>
                        <span>{shop.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {shop.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {shop.followers}
                </TableCell>
                <TableCell className="text-right">{shop.products}</TableCell>
                <TableCell className="text-right font-medium text-primary">
                  {shop.sales}
                </TableCell>
                <TableCell className="text-right font-medium text-pink-600">
                  {shop.revenue}
                </TableCell>
                <TableCell className="text-right">{shop.avgPrice}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{shop.rating}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    {shop.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        shop.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {shop.trendValue}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-border flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          共 {totalPages * 20} 条数据，每页 20 条
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            上一页
          </Button>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", totalPages].map((page, i) => (
              <Button
                key={i}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
                className={
                  currentPage === page
                    ? "bg-gradient-to-r from-primary to-pink-500"
                    : ""
                }
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            下一页
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
