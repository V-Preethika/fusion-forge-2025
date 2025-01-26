import { motion } from "framer-motion";
import { Check, AlertTriangle, Award, MapPin, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Guidelines = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
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
              <Rule text="All code must be original work" />
              <Rule text="Document your solution properly" />
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
              <Rule text="Presentation and documentation" />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                Prizes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="First Prize: ₹10,000" />
              <Rule text="Second Prize: ₹7,000" />
              <Rule text="Third Prize: ₹5,000" />
              <Rule text="Special mentions and additional prizes" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-primary" />
                Venue Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="SKCET Main Campus" />
              <Rule text="Kuniyamuthur, Coimbatore" />
              <Rule text="Tamil Nadu - 641008" />
              <Rule text="Main Seminar Hall" />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center pt-8">
          <a 
            href="https://www.instagram.com/fusion_forge25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-lg">Follow us on Instagram</span>
          </a>
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