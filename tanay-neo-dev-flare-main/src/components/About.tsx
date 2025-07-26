import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Brain, Cpu, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          About <span className="text-gradient-primary">Me</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer and AI explorer pursuing dual degrees in <strong className="text-primary">Computer Science at VIT</strong> and 
            <strong className="text-secondary"> Data Science at IIT Madras</strong>. AWS Certified Cloud Practitioner with expertise in 
            building scalable web applications and data-driven solutions.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey spans from mastering <strong className="text-accent">data structures and algorithms</strong> to 
            exploring <strong className="text-primary">machine learning and artificial intelligence</strong>. I have hands-on experience 
            with enterprise systems through my internship at <strong className="text-secondary">NTPC Limited</strong>, where I developed 
            web solutions for IT department operations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-lg">AWS Certified Cloud Practitioner</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-secondary" />
              <span className="text-lg">Enterprise Software & SAP/ERP Systems</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-accent" />
              <span className="text-lg">Full-stack Development & AI Solutions</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="portfolio-card">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground">Dual Degree Journey</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-primary">B.Tech Computer Science & Engineering</h4>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-semibold text-secondary">BS Data Science & Applications</h4>
                <p className="text-sm text-muted-foreground">Indian Institute of Technology Madras</p>
                <p className="text-sm text-muted-foreground">2023 - 2028</p>
              </div>
            </div>
          </Card>

          <Card className="portfolio-card">
            <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary text-primary">AWS Cloud</Badge>
              <Badge variant="outline" className="border-secondary text-secondary">Machine Learning</Badge>
              <Badge variant="outline" className="border-accent text-accent">Data Science</Badge>
              <Badge variant="outline" className="border-primary text-primary">Enterprise Systems</Badge>
              <Badge variant="outline" className="border-secondary text-secondary">Full-stack Development</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;