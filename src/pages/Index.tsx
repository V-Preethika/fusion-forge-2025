import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mail, Phone, Check, AlertTriangle, Award, Building, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" />
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
                <Rule text="Innovation, feasibility, and execution of solutions" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Event Organizers</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Head of Department</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Dr. S. Alex David</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Coordinators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Dr. R. Madonna Arieth (Associate Professor) - 9994537728</p>
                <p>Dr. B. Prabhu Shankar (Associate Professor) - 9894123922</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Faculty Coordinators</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <p>Dr. Peer Mohamed Appa M A Y</p>
                <p>Dr. M. Misba</p>
                <p>Dr. B. Sakthi Karthi Durai</p>
                <p>Dr. Devi P. P.</p>
                <p>Dr. D. Prabhu</p>
                <p>Ms. D. Annal Priyadarshini</p>
                <p>Mrs. M. S. Saranya</p>
                <p>Mrs. A. Lizy</p>
                <p>Ms. N. Hindumathy</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamCard
                title="Presidents"
                members={[
                  { name: "B. Haneesha", id: "VTU22330" },
                  { name: "V. Preethika", id: "VTU21532" }
                ]}
              />
              
              <TeamCard
                title="Vice-Presidents"
                members={[
                  { name: "T. Sonika", id: "VTU22119" },
                  { name: "B. Aswith Kumar", id: "VTU21693" }
                ]}
              />
              
              <TeamCard
                title="Tech Leads"
                members={[
                  { name: "K. Prasad", id: "VTU24185" },
                  { name: "Abdullah H. I", id: "VTU22413" }
                ]}
              />
              
              <TeamCard
                title="Design Leads"
                members={[
                  { name: "M.V.L. Sravanthi", id: "VTU23377" },
                  { name: "N. Vinod Kumar", id: "VTU23455" }
                ]}
              />
              
              <TeamCard
                title="Management Leads"
                members={[
                  { name: "K. Prashanth", id: "VTU23449" },
                  { name: "K. Yashwanthi", id: "VTU22625" }
                ]}
              />
              
              <TeamCard
                title="Treasury"
                members={[
                  { name: "R. K. Gowtham", id: "VTU21354" },
                  { name: "P. Hari Govind", id: "VTU21907" }
                ]}
              />
              
              <TeamCard
                title="Marketing Team"
                members={[
                  { name: "P. Akshay", id: "VTU27165" },
                  { name: "S. Sasi Kumar Reddy", id: "VTU23375" }
                ]}
              />
              
              <TeamCard
                title="Sponsors Team"
                members={[
                  { name: "Aadityan M", id: "VTU23911" },
                  { name: "M. Charan", id: "VTU22691" },
                  { name: "Sai Charan", id: "VTU22439" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="text-primary" />
                  Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learning Space 1 and 2,<br />
                  Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+919994537728" className="text-muted-foreground hover:text-primary">
                    +91 99945 37728
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>Website developed by:</p>
        <p className="font-semibold">
          Preethika V (VTU21532), K.Prasad (VTU24185), Abdullah H.I (VTU22413)
        </p>
      </footer>
    </div>
  );
};

const Rule = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <Check className="w-4 h-4 mt-1 text-primary" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

const TeamCard = ({ title, members }: { 
  title: string; 
  members: Array<{ name: string; id: string; }> 
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Users className="text-primary" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {members.map((member) => (
        <div key={member.id} className="p-2 rounded-lg bg-secondary">
          <p className="font-medium">{member.name}</p>
          <p className="text-sm text-muted-foreground">{member.id}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default Index;