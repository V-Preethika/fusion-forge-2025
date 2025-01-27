import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mail, Check, AlertTriangle, Award, Building, Instagram, Coffee, IndianRupee, Trophy, Sparkles, List } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                  Feb 12, 6:00 PM - Feb 13, 6:00 AM<br />
                  <span className="text-sm text-muted-foreground">Problem statements will be shared via WhatsApp on Feb 12th</span>
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

      {/* Registration Fee Box */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="text-primary" />
                Registration Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-primary">₹300 per team</p>
              <p className="text-muted-foreground mt-2">Lunch and snacks included</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Prizes</h2>
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="text-primary" />
                Prizes worth ₹25,000 await the best minds!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="text-yellow-500" />
                  1st Prize: ₹10,000
                </p>
                <p className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="text-gray-400" />
                  2nd Prize: ₹7,500
                </p>
                <p className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="text-amber-600" />
                  3rd Prize: ₹5,000
                </p>
                <p className="text-muted-foreground">
                  Consolation Prizes: ₹1,000 each for three teams
                </p>
              </div>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-sm italic text-muted-foreground">
                  Pay ₹300 for a chance to win ₹10,000 and free snacks—this is the jackpot you've been waiting for!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="section-title text-center mb-8">Event Organizers</h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Convenors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="text-primary" />
                  Convenors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Prof. Dr. S.P. Chokkalingam</p>
                  <p className="text-muted-foreground">Dean - School of Computing</p>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-semibold">Prof. Dr. V. Dhilipkumar</p>
                  <p className="text-muted-foreground">Associate Dean</p>
                </div>
              </CardContent>
            </Card>

            {/* HOD */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="text-primary" />
                  Head of Department
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Dr. S. Alex David</p>
              </CardContent>
            </Card>

            {/* Event Coordinators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" />
                  Event Coordinators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Dr. R. Madonna Arieth</p>
                  <p className="text-muted-foreground">Associate Professor - +91 9994537728</p>
                </div>
                <div>
                  <p className="font-semibold">Dr. B. Prabhu Shankar</p>
                  <p className="text-muted-foreground">Associate Professor - +91 9894123922</p>
                </div>
              </CardContent>
            </Card>

            {/* Faculty Coordinators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" />
                  Faculty Coordinators
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                {[
                  "Dr. Peer Mohamed Appa M A Y (Assistant Professor Senior Grade)",
                  "Dr. M. Misba (Assistant Professor Senior Grade)",
                  "Dr. B. Sakthi Karthi Durai (Assistant Professor Senior Grade)",
                  "Dr. Devi P. P. (Assistant Professor Senior Grade)",
                  "Dr. D. Prabhu (Assistant Professor)",
                  "Ms. D. Annal Priyadarshini (Assistant Professor)",
                  "Mrs. M. S. Saranya (Assistant Professor)",
                  "Mrs. A. Lizy (Assistant Professor)",
                  "Ms. N. Hindumathy (Assistant Professor)"
                ].map((faculty, index) => (
                  <div key={index} className="p-2 rounded-lg bg-secondary">
                    <p className="text-sm">{faculty}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Student Coordinators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" />
                  Student Coordinators
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <List className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuItem>B. Haneesha (VTU22330)</DropdownMenuItem>
                      <DropdownMenuItem>V. Preethika (VTU21532)</DropdownMenuItem>
                      <DropdownMenuItem>T. Sonika (VTU22119)</DropdownMenuItem>
                      <DropdownMenuItem>B. Aswith Kumar (VTU21693)</DropdownMenuItem>
                      <DropdownMenuItem>K. Prasad (VTU24185)</DropdownMenuItem>
                      <DropdownMenuItem>Abdullah H. I (VTU22413)</DropdownMenuItem>
                      <DropdownMenuItem>M.V.L. Sravanthi (VTU23377)</DropdownMenuItem>
                      <DropdownMenuItem>N. Vinod Kumar (VTU23455)</DropdownMenuItem>
                      <DropdownMenuItem>K. Prashanth (VTU23449)</DropdownMenuItem>
                      <DropdownMenuItem>K. Yashwanthi (VTU22625)</DropdownMenuItem>
                      <DropdownMenuItem>R. K. Gowtham (VTU21354)</DropdownMenuItem>
                      <DropdownMenuItem>P. Hari Govind (VTU21907)</DropdownMenuItem>
                      <DropdownMenuItem>P. Akshay (VTU27165)</DropdownMenuItem>
                      <DropdownMenuItem>S. Sasi Kumar Reddy (VTU23375)</DropdownMenuItem>
                      <DropdownMenuItem>Aadityan M (VTU23911)</DropdownMenuItem>
                      <DropdownMenuItem>M. Charan (VTU22691)</DropdownMenuItem>
                      <DropdownMenuItem>Sai Charan (VTU22439)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">B. Haneesha</p>
                  <p className="text-xs text-muted-foreground">VTU22330</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">V. Preethika</p>
                  <p className="text-xs text-muted-foreground">VTU21532</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">T. Sonika</p>
                  <p className="text-xs text-muted-foreground">VTU22119</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">B. Aswith Kumar</p>
                  <p className="text-xs text-muted-foreground">VTU21693</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">K. Prasad</p>
                  <p className="text-xs text-muted-foreground">VTU24185</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">Abdullah H. I</p>
                  <p className="text-xs text-muted-foreground">VTU22413</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">M.V.L. Sravanthi</p>
                  <p className="text-xs text-muted-foreground">VTU23377</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">N. Vinod Kumar</p>
                  <p className="text-xs text-muted-foreground">VTU23455</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">K. Prashanth</p>
                  <p className="text-xs text-muted-foreground">VTU23449</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">K. Yashwanthi</p>
                  <p className="text-xs text-muted-foreground">VTU22625</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">R. K. Gowtham</p>
                  <p className="text-xs text-muted-foreground">VTU21354</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">P. Hari Govind</p>
                  <p className="text-xs text-muted-foreground">VTU21907</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">P. Akshay</p>
                  <p className="text-xs text-muted-foreground">VTU27165</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">S. Sasi Kumar Reddy</p>
                  <p className="text-xs text-muted-foreground">VTU23375</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">Aadityan M</p>
                  <p className="text-xs text-muted-foreground">VTU23911</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">M. Charan</p>
                  <p className="text-xs text-muted-foreground">VTU22691</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary">
                  <p className="text-sm font-medium">Sai Charan</p>
                  <p className="text-xs text-muted-foreground">VTU22439</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
                  CSE Block,<br />
                  Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology<br />
                  <span className="font-semibold mt-2 block">Department of Artificial Intelligence and Machine Learning</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary" />
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
                <div className="space-y-2 mt-4">
                  <p className="font-semibold">Student Coordinators:</p>
                  <a href="mailto:vtu22330@veltech.edu.in" className="text-primary block hover:underline">vtu22330@veltech.edu.in</a>
                  <a href="mailto:vtu21532@veltech.edu.in" className="text-primary block hover:underline">vtu21532@veltech.edu.in</a>
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
          Preethika V (VTU21532), Abdullah H.I (VTU22413), K.Prasad (VTU24185)
        </p>
      </footer>
    </div>
  );
};

const TeamSection = ({ title, members }: { title: string; members: Array<{ name: string; id: string }> }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-primary">{title}</h3>
    {members.map((member, index) => (
      <div key={index} className="p-2 rounded-lg bg-secondary">
        <p className="text-sm font-medium">{member.name}</p>
        <p className="text-xs text-muted-foreground">{member.id}</p>
      </div>
    ))}
  </div>
);

export default Index;
