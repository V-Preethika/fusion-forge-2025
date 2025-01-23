import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />
          <div className="absolute inset-0 bg-[url('/circuit-background.jpg')] bg-cover bg-center opacity-20" />
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
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUI_0aPRODrIX0fxBpL_7HcQMAmOQNIFK-wF_z69SAXZv3LA/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary"
              >
                Register Now
              </a>
              <a href="#guidelines" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
                Event Guidelines
              </a>
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

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Event Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Feb 12 (Online)</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Clock className="text-primary" />
                  <div>
                    <span className="font-semibold">6:00 AM</span>
                    <p className="text-muted-foreground">Event Start (Inauguration & Check-In)</p>
                  </div>
                </li>
                // ... Add more schedule items
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Feb 13 (Offline)</h3>
              <ul className="space-y-4">
                // ... Add schedule items
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Event Guidelines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Participant Rules</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Teams must have 3 members</li>
                <li>Registration fee: ₹100 per participant</li>
                <li>Check-in before 8:00 AM on Feb 13</li>
                <li>Bring valid ID for verification</li>
                <li>Follow all event timings strictly</li>
              </ul>
            </div>
            // ... Add more guideline sections
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Event Organizers</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Faculty Organizers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                // ... Add organizer cards
              </div>
            </div>
            // ... Add student organizer sections
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@fusionforge.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91 1234567890</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Venue</h3>
              <p className="text-muted-foreground">
                Learning Space 1 & 2,<br />
                Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;