import { StatsCard } from "@/components/StatsCard";
import { Store, TrendingUp, Users, ShoppingCart } from "lucide-react";

export function ShopStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="小店总数"
        value="12,847"
        icon={Store}
        color="blue-500"
      />
      <StatsCard
        title="平均销售额"
        value="¥86.4w"
        icon={TrendingUp}
        color="pink-500"
      />
      <StatsCard
        title="平均商品数"
        value="156"
        icon={ShoppingCart}
        color="purple-500"
      />
      <StatsCard
        title="平均关注数"
        value="23.5w"
        icon={Users}
        color="orange-500"
      />
    </div>
  );
}
