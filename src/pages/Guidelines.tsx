import { motion } from "framer-motion";
import { Check, AlertTriangle, Award, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Guidelines = () => {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
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
                <Rule text="Registration fee is ₹300 per team" />
                <Rule text="Check in before 6:00 AM on Feb 13 for offline session" />
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
                <Rule text="Online phase starts at 6:00 PM on Feb 12" />
                <Rule text="Problem statements will be shared via WhatsApp on Feb 12" />
                <Rule text="Offline phase: 6:00 AM to 6:00 PM on Feb 13" />
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

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                Prizes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">
                Prizes worth ₹25,000 await the best minds!
              </h3>
              <div className="space-y-2">
                <Rule text="1st Prize: ₹10,000" />
                <Rule text="2nd Prize: ₹7,500" />
                <Rule text="3rd Prize: ₹5,000" />
                <Rule text="Consolation Prizes: ₹1,000 each for three teams" />
              </div>
              <p className="text-sm text-muted-foreground italic text-center mt-4">
                Pay ₹300 for a chance to win ₹10,000 and free snacks—this is the jackpot you've been waiting for!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="text-primary" />
                Venue Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Rule text="Location: CSE Block" />
              <div className="flex justify-center mt-4">
                <a
                  href="https://www.instagram.com/fusion_forge25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ScrollArea>
  );
};

const Rule = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <Check className="w-4 h-4 mt-1 text-primary" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Guidelines;