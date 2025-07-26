import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Map, Brain, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise IT Solutions - NTPC",
      description: "Template Website and Group Manager Website developed during internship at NTPC Limited for IT department operations and digital transformation.",
      icon: Zap,
      color: "text-primary",
      borderColor: "border-primary",
      tech: ["Web Development", "SAP/ERP", "Database Management", "Cybersecurity"],
      github: "https://github.com/tanaymehto/grp_management_final"
    },
    {
      title: "Resume Analyzer & Job Application Tool",
      description: "Intelligent resume parsing tool with skill gap analysis, automated job applications, and company-specific cold email generation. Built for streamlined job hunting.",
      icon: Brain,
      color: "text-primary",
      borderColor: "border-primary",
      tech: ["Next.js", "TypeScript", "FastAPI", "Gemini AI", "Gmail API"],
      github: "https://github.com/tanaymehto/resume-analyzer"
    },
    {
      title: "VIT Mess Management System",
      description: "Comprehensive web application for mess operations with student registration, meal booking, feedback system, and admin controls for efficient cafeteria management.",
      icon: Shield,
      color: "text-secondary",
      borderColor: "border-secondary",
      tech: ["React", "Next.js", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/chaudharymanik/VIT-Mess-Manager"
    },
    {
      title: "Vehicle Parking Management App",
      description: "CRUD web application for four-wheeler parking slot management with real-time availability tracking and efficient space utilization.",
      icon: Map,
      color: "text-accent",
      borderColor: "border-accent",
      tech: ["Flask", "SQLAlchemy", "Jinja", "Bootstrap", "HTML"],
      github: "https://github.com/tanaymehto/mad-1-project"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          Experience and <span className="text-gradient-secondary">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of projects that showcase my passion for building innovative solutions
        </p>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="portfolio-card group cursor-pointer">
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-lg bg-surface-elevated ${project.borderColor} border-2`}>
                <project.icon className={`w-6 h-6 ${project.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="hover:border-primary hover:text-primary"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="hover-lift"
        >
          <a href="https://github.com/tanaymehto" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;