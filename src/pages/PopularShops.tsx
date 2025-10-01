import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ShopStats } from "@/components/PopularShops/ShopStats";
import { ShopFilters } from "@/components/PopularShops/ShopFilters";
import { ShopTable } from "@/components/PopularShops/ShopTable";

export default function PopularShops() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">热门小店榜</h1>
            <p className="text-sm text-muted-foreground">
              以下内容为所选类目下近30日小店数据
            </p>
          </div>

          <ShopStats />
          <ShopFilters />
          <ShopTable />
        </main>
      </div>
    </div>
  );
}
