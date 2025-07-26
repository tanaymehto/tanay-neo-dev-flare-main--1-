import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'I build things that learn.',
    'I code with purpose.',
    'I design with intention.',
    'I explore with AI.'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timer = setTimeout(() => {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, texts]);

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-lg animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-accent rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Terminal-style intro */}
        {/* <div className="mb-8 font-mono text-sm text-muted-foreground">
          <span className="text-accent">$</span> whoami
        </div> */}
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-space-grotesk">
          <span className="text-gradient-primary">Tanay</span>
          <br />
          <span className="text-gradient-secondary">Mehto</span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
          Full-stack Developer + AI Explorer
        </div>
        
        {/* Dynamic text */}
        <div className="h-16 mb-12">
          <p className="text-2xl md:text-3xl font-medium text-primary">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover-lift hover:border-primary hover:text-primary"
          >
            <a href="https://github.com/tanaymehto" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover-lift hover:border-primary hover:text-primary"
          >
            <a href="https://www.linkedin.com/in/tanay-mehto/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover-lift hover:border-primary hover:text-primary"
          >
            <a href="mailto:tanaymehto21@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;