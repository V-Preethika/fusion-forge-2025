import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title mb-6">
              Fusion Forge '25
              <span className="block text-primary">24-Hour Hackathon</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Innovate. Code. Compete.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="button-primary">
                Register Now
              </Link>
              <Link
                to="/guidelines"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Event Guidelines
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <p className="text-muted-foreground">Feb 12 - Feb 13, 2025</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">24 Hours</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Venue</h3>
              <p className="text-muted-foreground">Learning Space 1 & 2</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Size</h3>
              <p className="text-muted-foreground">3 Members</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;