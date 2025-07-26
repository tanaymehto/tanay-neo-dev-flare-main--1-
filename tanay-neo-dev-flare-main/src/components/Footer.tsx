import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div>
            <div className="text-2xl font-bold font-space-grotesk mb-2">
              <span className="text-primary">Tanay</span>
              <span className="text-secondary"> Mehto</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="hover:text-primary"
            >
              <a href="https://github.com/tanaymehto" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="hover:text-secondary"
            >
              <a href="https://www.linkedin.com/in/tanay-mehto/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="hover:text-accent"
            >
              <a href="mailto:tanaymehto21@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright and love */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tanay Mehto. 
            </p>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="font-mono text-xs text-muted-foreground text-center">
            <span className="text-accent">$</span> echo "Thanks for visiting my portfolio!" <br />
            <span className="text-primary">visitor@tanay-portfolio:~$</span> Have a great day! 🚀
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;