import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust if needed
import { Quote } from "lucide-react"; // Or your icon source

const testimonials = [
  {
    quote: "Malsha Jayawardena's methodical approach to quality assurance transformed our development process. Her ability to anticipate edge cases and identify potential issues before they reached production was nothing short of remarkable.",
    author: "Emily Rodriguez",
    position: "CTO",
  },
  {
    quote: "Working with Malsha was a game-changer for our product quality. Her test automation work significantly reduced our regression testing time while improving test coverage. The return on investment was immediate and impactful.",
    author: "Michael Chang",
    position: "VP of Engineering",
  },
  {
    quote: "Malsha doesn’t just find bugs—she helps prevent them. Her shift-left QA approach brought quality into our development process from the very beginning, leading to faster delivery and fewer defects.",
    author: "Sarah Johnson",
    position: "Product Manager",
  },
  {
    quote: "In over 15 years of working in software development, I’ve rarely seen someone as thorough and effective as Malsha. Her attention to detail and deep QA knowledge make her a trusted guardian of product quality.",
    author: "David Miller",
    position: "Senior Software Architect",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-platinum/10 dark:bg-navy/30 pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonials</h2>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="glass-card border-none h-full rounded-xl p-6 relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-teal/20" />
                    <p className="text-navy/80 dark:text-platinum/80 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-navy dark:text-platinum">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-navy/70 dark:text-platinum/70">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-teal text-white hover:bg-teal/90" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-teal text-white hover:bg-teal/90" />
          </Carousel>
        </div>

        <div className="mt-20">
          <div className="glass-card border-none rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 text-navy dark:text-platinum">
                  Ready to work together?
                </h3>
                <p className="text-navy/80 dark:text-platinum/80">
                  Let’s connect and explore how I can help improve your software quality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:col-span-2 justify-end">
                <div className="text-center">
                  <p className="text-sm text-navy/60 dark:text-platinum/60 mb-1">
                    Based in Stockholm, available for remote or on-site roles.
                  </p>
                  <div className="px-4 py-2 rounded-full bg-teal/10 text-teal font-medium">
                    Let’s collaborate
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-medium rounded-lg hover:bg-teal/90 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
