import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Problems = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Problem Statements</h1>
        
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Coming Soon!</AlertTitle>
          <AlertDescription>
            Problem statements will be shared with registered participants on Feb 11 via email and on the website. Stay tuned for updates!
          </AlertDescription>
        </Alert>
      </motion.div>
    </div>
  );
};

export default Problems;