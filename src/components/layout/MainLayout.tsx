import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

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
            <Link to="/" className="text-xl font-bold text-primary">
              Fusion Forge '25
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/schedule" className="nav-link">Schedule</Link>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </nav>
        </div>
        <div 
          className="h-0.5 bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      <main className="pt-16">
        <motion.div
          key={location.pathname}
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
                24-Hour Hackathon at Vel Tech University
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/guidelines" className="block text-sm text-muted-foreground hover:text-primary">
                  Guidelines
                </Link>
                <Link to="/register" className="block text-sm text-muted-foreground hover:text-primary">
                  Register
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
              </p>
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