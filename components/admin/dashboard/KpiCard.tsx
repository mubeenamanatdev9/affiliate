import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendUp: boolean;
  icon: LucideIcon;
  gradient: string;
}

export default function KpiCard({ title, value, trend, trendUp, icon: Icon, gradient }: KpiCardProps) {
  return (
    <div className={`rounded-2xl p-6 text-white shadow-sm relative overflow-hidden ${gradient}`}>
      <div className="absolute top-0 right-0 p-6 opacity-20">
        <Icon className="w-16 h-16" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 opacity-80 font-medium">
          <Icon className="w-5 h-5" />
          {title}
        </div>
        <div className="text-3xl font-display font-bold mb-4">{value}</div>
        <div className="w-full bg-white/20 h-1 rounded-full mb-4"></div>
        <div className="text-sm opacity-90 flex items-center gap-1 font-medium">
          {trendUp ? '↗️' : '↘️'} {trend} vs last month
        </div>
      </div>
    </div>
  );
}
