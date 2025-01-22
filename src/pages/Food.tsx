import { motion } from "framer-motion";
import { Coffee, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Food = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Food Menu</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feb 12 Menu */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="text-primary" />
                Feb 12
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MenuItem time="6:00 PM" item="Snacks and Tea/Coffee" />
              <MenuItem time="8:00 PM" item="Dinner" />
            </CardContent>
          </Card>

          {/* Feb 13 Menu */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="text-primary" />
                Feb 13
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MenuItem time="8:30 AM" item="Breakfast" />
              <MenuItem time="10:30 AM" item="Tea Break" />
              <MenuItem time="12:30 PM" item="Lunch" />
              <MenuItem time="3:00 PM" item="Tea & Snacks" />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const MenuItem = ({ time, item }: { time: string; item: string }) => (
  <div className="flex items-center gap-4">
    <Coffee className="w-4 h-4 text-primary" />
    <span className="font-medium">{time}</span>
    <span className="text-muted-foreground">{item}</span>
  </div>
);

export default Food;