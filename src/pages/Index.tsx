import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mail, Phone, Check, AlertTriangle, Award, Building, Instagram, Coffee, IndianRupee, Trophy, Sparkles } from "lucide-react";
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

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">About Fusion Forge '25</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Fusion Forge '25 is an electrifying 24-hour hackathon where brilliant minds gather to innovate, solve problems, and create impactful solutions. Participants will compete in a hybrid mode, bringing the convenience of online collaboration and the excitement of offline interaction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="text-primary" />
                    Online Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Feb 12, 6:00 AM - Feb 13, 6:00 AM
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="text-primary" />
                    Offline Phase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Feb 13, 6:00 AM - 6:00 PM
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Prizes</h2>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <h3 className="text-3xl font-bold text-primary mb-4">
                <Trophy className="inline-block mr-2" />
                Prizes worth ₹25,000 await the best minds!
              </h3>
            </motion.div>
            <p className="text-lg text-muted-foreground italic">
              "Pay ₹300 for a chance to win ₹10,000 and free snacks—this is the jackpot you've been waiting for! 🎉"
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrizeCard title="1st Prize" amount="₹10,000" icon={<Trophy className="text-yellow-500" />} />
            <PrizeCard title="2nd Prize" amount="₹7,500" icon={<Trophy className="text-gray-400" />} />
            <PrizeCard title="3rd Prize" amount="₹5,000" icon={<Trophy className="text-amber-600" />} />
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="text-primary" />
                  Consolation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>₹1,000 each for three teams</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statements Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Problem Statements</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-center text-lg">
                Problem statements will be shared with registered participants on Feb 11 via email and on the website.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Food Menu</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="text-primary" />
                  Feb 13 (Offline)
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
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Event Guidelines</h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-primary" />
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
                <div className="space-y-2">
                  <p>Dr. R. Madonna Arieth (Associate Professor)</p>
                  <p className="text-primary">+91 9994537728</p>
                </div>
                <div className="space-y-2">
                  <p>Dr. B. Prabhu Shankar (Associate Professor)</p>
                  <p className="text-primary">+91 9894123922</p>
                </div>
              </CardContent>
            </Card>
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

const MenuItem = ({ time, item }: { time: string; item: string }) => (
  <div className="flex items-center gap-4">
    <Coffee className="w-4 h-4 text-primary" />
    <span className="font-medium">{time}</span>
    <span className="text-muted-foreground">{item}</span>
  </div>
);

const PrizeCard = ({ title, amount, icon }: { title: string; amount: string; icon: React.ReactNode }) => (
  <Card className="card-hover">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xl font-bold">{amount}</p>
    </CardContent>
  </Card>
);

const Rule = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <Check className="w-4 h-4 mt-1 text-primary" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Index;
