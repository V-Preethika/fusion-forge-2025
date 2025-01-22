import { motion } from "framer-motion";
import { Users, Calendar, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Registration</h1>
        
        <div className="bg-card rounded-lg p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Team Size</h3>
              <p className="text-muted-foreground">3 members per team (Maximum of 50 teams)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Coins className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Registration Fee</h3>
              <p className="text-muted-foreground">₹100 per participant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Registration Period</h3>
              <p className="text-muted-foreground">Jan 25 - Feb 8</p>
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full text-lg py-6" size="lg" asChild>
              <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;