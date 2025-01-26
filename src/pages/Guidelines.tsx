import { motion } from "framer-motion";
import { Check, AlertTriangle, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Guidelines = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Event Guidelines</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="text-primary" />
                Participant Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="Teams must have 3 members" />
              <Rule text="Registration fee is ₹100 per participant" />
              <Rule text="Check in before 8:00 AM on Feb 13 for offline session" />
              <Rule text="Bring a valid ID for verification" />
              <Rule text="Follow all event timings strictly" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-primary" />
                Submission Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="Submit solutions before the specified deadline" />
              <Rule text="Plagiarism will result in disqualification" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                Judging Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="Innovation in problem-solving approach" />
              <Rule text="Technical feasibility of solution" />
              <Rule text="Quality of execution and implementation" />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const Rule = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <Check className="w-4 h-4 mt-1 text-primary" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Guidelines;