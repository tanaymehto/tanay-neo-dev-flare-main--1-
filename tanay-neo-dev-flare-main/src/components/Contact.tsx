import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          Let's <span className="text-gradient-secondary">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, innovative projects, 
              or just having a chat about technology and AI. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">tanaymehto21@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+91-9352014048</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-muted-foreground">Vellore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="hover-lift hover:border-primary hover:text-primary">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" className="hover-lift hover:border-primary hover:text-primary">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="hover-lift hover:border-primary hover:text-primary">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="portfolio-card">
          <h3 className="text-xl font-semibold mb-6">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" className="bg-surface-elevated border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-surface-elevated border-border" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="What's this about?" className="bg-surface-elevated border-border" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell me about your project or just say hello!" 
                rows={5}
                className="bg-surface-elevated border-border resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full hover-lift bg-primary hover:bg-primary/90">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* Fun fact */}
      <div className="text-center mt-16 p-6 bg-surface/50 rounded-xl border border-border">
        <p className="text-muted-foreground">
          <span className="terminal-text">fun_fact:</span> I reply to emails faster than my code compiles!
        </p>
      </div>
    </section>
  );
};

export default Contact;