import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      borderColor: "border-primary",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
      title: "Backend & APIs",
      icon: Database,
      color: "text-secondary",
      borderColor: "border-secondary",
      skills: ["Node.js", "Express.js", "MongoDB", "SQLAlchemy", "Flask", "FastAPI"]
    },
    {
      title: "Cloud & DevOps",
      icon: Palette,
      color: "text-accent",
      borderColor: "border-accent",
      skills: ["AWS", "EC2", "Lambda", "S3", "RDS", "SAP/ERP"]
    },
    {
      title: "AI/ML & Tools",
      icon: Cpu,
      color: "text-primary",
      borderColor: "border-primary",
      skills: ["OpenCV", "Pandas", "NumPy", "Machine Learning", "Arduino", "Raspberry Pi"]
    }
  ];

  const terminalSkills = {
    languages: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI"],
    databases: ["MongoDB", "SQLAlchemy", "AWS RDS"],
    cloud: ["AWS EC2", "Lambda", "S3", "API Gateway", "IAM"],
    tools: ["Git", "SAP/ERP", "Arduino", "Raspberry Pi", "OpenCV"],
    certifications: ["AWS Cloud Practitioner", "Google UX Design", "IIT Jodhpur Cyber Defence"]
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          Technical <span className="text-gradient-accent">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      {/* Terminal-style skills display */}
      <Card className="portfolio-card mb-12 bg-surface border-primary/20">
        <div className="font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-muted-foreground ml-2">tanay@portfolio:~$</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-accent">const</span> <span className="text-primary">skills</span> = {"{"}
            </div>
            
            {Object.entries(terminalSkills).map(([category, items], index) => (
              <div key={index} className="ml-4">
                <span className="text-secondary">{category}</span>: [
                <div className="ml-4">
                  {items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      "<span className="text-primary">{skill}</span>"{skillIndex < items.length - 1 ? "," : ""}
                    </div>
                  ))}
                </div>
                ]{index < Object.entries(terminalSkills).length - 1 ? "," : ""}
              </div>
            ))}
            
            <div>{"}"}</div>
          </div>
        </div>
      </Card>

      {/* Skill categories grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="portfolio-card group">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-lg bg-surface-elevated ${category.borderColor} border-2`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="outline" 
                  className="hover-lift cursor-pointer hover:border-primary hover:text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Additional info */}
      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground">
          Always learning, always growing. Currently exploring{" "}
          <span className="text-primary font-semibold">Advanced Machine Learning</span> and{" "}
          <span className="text-secondary font-semibold">Cloud Architecture</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;