import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, TrendingDown, Eye, Heart, ShoppingCart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTableProps {
  searchTerm: string;
  selectedCategory: string;
  priceRange: number[];
  sortBy: string;
}

// Mock data - in real app this would come from API
const mockProducts = [
  {
    id: 1,
    name: "韩版宽松毛衣女秋冬新款",
    brand: "ZARA",
    category: "服装配饰",
    price: 299,
    sales: 15420,
    trend: 12.5,
    rating: 4.8,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop",
    shop: "ZARA官方旗舰店",
    tags: ["热销", "新品", "爆款"]
  },
  {
    id: 2,
    name: "兰蔻小黑瓶精华液30ml",
    brand: "兰蔻",
    category: "美妆护肤",
    price: 580,
    sales: 8960,
    trend: -3.2,
    rating: 4.9,
    reviews: 5632,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
    shop: "兰蔻官方旗舰店",
    tags: ["专柜正品", "抗老"]
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max 256GB",
    brand: "Apple",
    category: "数码家电",
    price: 9999,
    sales: 3847,
    trend: 25.8,
    rating: 4.7,
    reviews: 1205,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100&h=100&fit=crop",
    shop: "Apple官方旗舰店",
    tags: ["官方正品", "新品上市"]
  },
  {
    id: 4,
    name: "茶颜悦色奶茶粉冲调饮品",
    brand: "茶颜悦色",
    category: "食品饮料",
    price: 45,
    sales: 12650,
    trend: 18.3,
    rating: 4.6,
    reviews: 4321,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=100&h=100&fit=crop",
    shop: "茶颜悦色旗舰店",
    tags: ["网红", "限时特价"]
  },
  {
    id: 5,
    name: "北欧简约客厅沙发三人位",
    brand: "顾家家居",
    category: "家居生活",
    price: 2899,
    sales: 756,
    trend: 7.1,
    rating: 4.5,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    shop: "顾家家居旗舰店",
    tags: ["包邮", "质保5年"]
  }
];

export function ProductTable({ searchTerm, selectedCategory, priceRange, sortBy }: ProductTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter and sort products (simplified)
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>商品列表</span>
          <span className="text-sm font-normal text-muted-foreground">
            共找到 {filteredProducts.length} 个商品
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="table">表格视图</TabsTrigger>
            <TabsTrigger value="grid">卡片视图</TabsTrigger>
          </TabsList>
          
          <TabsContent value="table">
            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead className="min-w-64">商品信息</TableHead>
                    <TableHead>品牌</TableHead>
                    <TableHead>类目</TableHead>
                    <TableHead className="text-right">价格</TableHead>
                    <TableHead className="text-right">销量</TableHead>
                    <TableHead className="text-center">趋势</TableHead>
                    <TableHead className="text-center">评分</TableHead>
                    <TableHead className="text-center">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product, index) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12 rounded-md">
                            <AvatarImage src={product.image} alt={product.name} />
                            <AvatarFallback>{product.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-medium text-foreground line-clamp-1">
                              {product.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {product.shop}
                            </div>
                            <div className="flex gap-1">
                              {product.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="text-xs px-1">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{product.brand}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-bold text-primary">
                        ¥{product.price.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {product.sales.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className={`flex items-center justify-center gap-1 ${
                          product.trend > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.trend > 0 ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          <span className="text-sm font-medium">
                            {Math.abs(product.trend)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="space-y-1">
                          <div className="font-medium">{product.rating}</div>
                          <div className="text-xs text-muted-foreground">
                            {product.reviews}评价
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="border-border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm line-clamp-2 text-foreground">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">¥{product.price}</span>
                        <div className={`flex items-center gap-1 text-xs ${
                          product.trend > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.trend > 0 ? 
                            <TrendingUp className="w-3 h-3" /> : 
                            <TrendingDown className="w-3 h-3" />
                          }
                          {Math.abs(product.trend)}%
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>销量 {product.sales}</span>
                        <span>评分 {product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            显示第 1-{Math.min(itemsPerPage, filteredProducts.length)} 条，共 {filteredProducts.length} 条记录
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            >
              上一页
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              下一页
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}