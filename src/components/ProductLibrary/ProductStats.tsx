import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, DollarSign, Users } from "lucide-react";

const stats = [
  {
    title: "商品总数",
    value: "2,847,523",
    change: "+12.3%",
    icon: Package,
    color: "text-blue-600"
  },
  {
    title: "平均销量",
    value: "1,284",
    change: "+8.7%",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "平均价格",
    value: "¥156.8",
    change: "-2.1%",
    icon: DollarSign,
    color: "text-orange-600"
  },
  {
    title: "活跃商家",
    value: "45,892",
    change: "+15.6%",
    icon: Users,
    color: "text-purple-600"
  }
];

export function ProductStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} 较上月
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}