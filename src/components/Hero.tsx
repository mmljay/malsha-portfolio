
import React from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center pattern-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-bold mb-4">
  <span className="block text-2xl md:text-4xl text-green dark:text-platinum">
    Malsha Jayawardena
  </span>
  <span className="block text-4xl md:text-5xl lg:text-6xl text-green dark:text-platinum">
    Strategic QA Specialist
  </span>
</h1>

            
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-teal">
            Shaping quality software through smart testing strategies
            </h2>
            
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
            I work closely with teams to catch problems early, improve processes, and make sure the final product meets expectations.


            </p>
            
            <div className="flex flex-wrap gap-4">
              
              
              <Button variant="outline" className="border-navy dark:border-platinum text-navy dark:text-platinum" onClick={() => window.open('https://drive.google.com/file/d/1CRn81oVzXBuKyI8hOqVMAS9rVRgyTIo6/view?usp=drive_link', '_blank')}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Download Resume</span>
              </Button>
              
              <Button variant="secondary" className="bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum hover:bg-navy/20 dark:hover:bg-platinum/20">
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-navy via-teal to-navy dark:from-teal dark:via-platinum dark:to-teal rounded-2xl blur-md opacity-70"></div>
              <div className="glass-card rounded-2xl p-6 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg">
                    <p className="text-4xl font-bold text-teal mb-2">97%</p>
                    <p className="text-sm text-navy/80 dark:text-platinum/80">Defect Reduction</p>
                  </div>
                  <div className="text-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg">
                    <p className="text-4xl font-bold text-teal mb-2">85%</p>
                    <p className="text-sm text-navy/80 dark:text-platinum/80">Automation Coverage</p>
                  </div>
                  <div className="text-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg">
                    <p className="text-4xl font-bold text-teal mb-2">6+</p>
                    <p className="text-sm text-navy/80 dark:text-platinum/80">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg">
                    <p className="text-4xl font-bold text-teal mb-2">50+</p>
                    <p className="text-sm text-navy/80 dark:text-platinum/80">Projects Delivered</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy dark:text-platinum mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum">
                      ISTQB Cetified
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum">
                      Manual testing
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum">
                      Selenium Expert
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum">
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-navy/70 dark:text-platinum/70 hover:text-teal dark:hover:text-teal transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
