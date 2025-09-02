import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
          <span className="text-gradient-primary">Resume</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Download my resume or view it online to learn more about my experience and qualifications
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="portfolio-card text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Professional Resume</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dual-degree student pursuing B.Tech in Computer Science at VIT and BS in Data Science at IIT Madras. AWS Certified Cloud Practitioner with hands-on experience in enterprise systems, full-stack development, and AI-driven solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="hover-lift bg-primary hover:bg-primary/90"
            >
                <a href="/cv.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="mt-8 p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="font-semibold mb-4">Resume Highlights</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-medium text-primary mb-2">Education</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• B.Tech Computer Science - VIT Vellore (2023-2027)</li>
                  <li>• BS Data Science - IIT Madras (2023-2028)</li>
                  <li>• Current CGPA: Maintaining academic excellence</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-secondary mb-2">Experience</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Software Development Intern - NTPC Limited</li>
                  <li>• Enterprise IT Solutions Development</li>
                  <li>• Group Management System Implementation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-accent mb-2">Key Projects</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI-Powered Resume Analyzer Tool</li>
                  <li>• VIT Mess Management System</li>
                  <li>• Vehicle Parking Management App</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary mb-2">Certifications</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AWS Certified Cloud Practitioner</li>
                  <li>• Google UX Design Professional</li>
                  <li>• IIT Jodhpur Cyber Defence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Last updated: August 2025 | Version 3.0
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;