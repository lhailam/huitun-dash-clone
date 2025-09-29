import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SearchFilters } from "@/components/ProductLibrary/SearchFilters";
import { ProductTable } from "@/components/ProductLibrary/ProductTable";
import { ProductStats } from "@/components/ProductLibrary/ProductStats";

export default function ProductLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("sales_desc");

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6 space-y-6">
            {/* Page Header */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">商品库</h1>
              <p className="text-muted-foreground">全网商品数据分析，助力选品决策</p>
            </div>

            {/* Statistics Cards */}
            <ProductStats />

            {/* Search and Filters */}
            <SearchFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Product Table */}
            <ProductTable
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              sortBy={sortBy}
            />
          </main>
        </div>
      </div>
    </div>
  );
}