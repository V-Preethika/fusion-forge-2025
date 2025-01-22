import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Event Schedule</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feb 12 Schedule */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-primary" />
              <h2 className="text-2xl font-semibold">Feb 12 (Online)</h2>
            </div>
            <div className="space-y-4">
              <TimelineItem time="6:00 AM" event="Event Start (Inauguration & Check-In)" />
              <TimelineItem time="6:00 PM" event="Tea/Coffee + Snacks" />
              <TimelineItem time="8:00 PM" event="Dinner Break" />
              <TimelineItem time="10:00 PM" event="Progress Check" />
            </div>
          </div>

          {/* Feb 13 Schedule */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-primary" />
              <h2 className="text-2xl font-semibold">Feb 13 (Offline)</h2>
            </div>
            <div className="space-y-4">
              <TimelineItem time="Before 8:00 AM" event="Final Check-In" />
              <TimelineItem time="8:30 AM" event="Breakfast" />
              <TimelineItem time="10:30 AM" event="Tea Break" />
              <TimelineItem time="12:30 PM" event="Lunch" />
              <TimelineItem time="3:00 PM" event="Tea & Snacks" />
              <TimelineItem time="6:00 PM" event="Closing Ceremony" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TimelineItem = ({ time, event }: { time: string; event: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex items-center gap-2 min-w-[120px]">
      <Clock className="w-4 h-4 text-primary" />
      <span className="font-medium">{time}</span>
    </div>
    <span className="text-muted-foreground">{event}</span>
  </div>
);

export default Schedule;