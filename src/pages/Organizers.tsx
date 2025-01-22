import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Organizers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Event Organizers</h1>
        
        {/* Faculty Organizers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Faculty Organizers
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <OrganizerItem name="Dr. S.P. Chokkalingam" role="Dean, School Of Computing" />
            <OrganizerItem name="Dr. V. Dhilip Kumar" role="Associate Dean, School Of Computing" />
            <OrganizerItem name="Dr. Alex David" role="Head of Department, AI & ML" />
            <OrganizerItem name="Dr. Madona Arieth R." role="Event Organizer" />
          </CardContent>
        </Card>

        {/* Student Teams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamCard
            title="Presidents"
            members={[
              { id: "VTU22330", name: "B. Haneesha" },
              { id: "VTU21532", name: "Preethika V" }
            ]}
          />
          
          <TeamCard
            title="Vice-Presidents"
            members={[
              { id: "VTU21693", name: "B. Aswith Kumar Reddy" },
              { id: "VTU22119", name: "T. Sonika" }
            ]}
          />
          
          <TeamCard
            title="Technical Team"
            members={[
              { id: "VTU23495", name: "Y. Haswanth Phani Kumar", role: "Tech Lead" },
              { id: "VTU24185", name: "Jaya Prasad K", role: "Tech Lead" }
            ]}
          />
          
          <TeamCard
            title="Design Team"
            members={[
              { id: "VTU23377", name: "M.V.L. Sravanthi", role: "Design Lead" },
              { id: "VTU23455", name: "N. Vinod Kumar" }
            ]}
          />
          
          <TeamCard
            title="Management Team"
            members={[
              { id: "VTU23449", name: "K. Prashanth Kumar Reddy", role: "Management Lead" },
              { id: "VTU22625", name: "K. Yashwanthi" }
            ]}
          />
          
          <TeamCard
            title="Treasury"
            members={[
              { id: "VTU21354", name: "Gowtham RK", role: "Treasurer" },
              { id: "VTU21907", name: "Harigovind P", role: "Treasurer" }
            ]}
          />
          
          <TeamCard
            title="Marketing Team"
            members={[
              { id: "VTU27165", name: "Pulikandla Akshay Reddeppa" },
              { id: "VTU23375", name: "S. Sasi Kumar Reddy" }
            ]}
          />
          
          <TeamCard
            title="Sponsors Team"
            members={[
              { id: "VTU23911", name: "Aadithyan M" },
              { id: "VTU22691", name: "Morampudi Charan" },
              { id: "VTU22439", name: "A.V.S. Charan" }
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
};

const OrganizerItem = ({ name, role }: { name: string; role: string }) => (
  <div className="p-4 rounded-lg bg-secondary">
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-muted-foreground">{role}</p>
  </div>
);

const TeamCard = ({ title, members }: { 
  title: string; 
  members: Array<{ id: string; name: string; role?: string; }> 
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
          <p className="text-sm text-muted-foreground">
            {member.id}{member.role ? ` - ${member.role}` : ''}
          </p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default Organizers;