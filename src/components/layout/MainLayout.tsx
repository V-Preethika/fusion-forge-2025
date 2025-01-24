import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/9aa577b1-6d9b-4b31-a434-23b4eb9b0a19.png" 
                alt="Vel Tech Logo" 
                className="h-12 md:h-14"
              />
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-primary">Fusion Forge '25</span>
                <span className="text-xs text-muted-foreground hidden md:block">
                  Department of Artificial Intelligence and Machine Learning
                </span>
              </div>
            </Link>
          </nav>
        </div>
        <div 
          className="h-0.5 bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-secondary mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Fusion Forge '25</h3>
              <p className="text-sm text-muted-foreground">
                24-Hour Hackathon by Department of Artificial Intelligence and Machine Learning
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fusion Forge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;