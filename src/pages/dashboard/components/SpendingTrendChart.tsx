import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { date: "Dec 9", amount: 50 },
  { date: "Dec 10", amount: 120 },
  { date: "Dec 11", amount: 180 },
  { date: "Dec 12", amount: 150 },
  { date: "Dec 13", amount: 220 },
  { date: "Dec 14", amount: 280 },
  { date: "Dec 15", amount: 90 },
];

const SpendingTrendChart = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Spending Trend</h3>
        <button className="text-sm text-muted-foreground hover:text-foreground">
          Last 7 days
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(231, 48%, 38%)" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="hsl(231, 48%, 38%)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="hsl(231, 48%, 38%)" 
            strokeWidth={2}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SpendingTrendChart;
