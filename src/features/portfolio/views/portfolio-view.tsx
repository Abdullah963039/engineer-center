"use client";

import { Button } from "@/components/ui/button";
import { Building2, Code, HardHat } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/project-card";
import { PortfolioStates } from "../components/portfolio-states";
import { TestimonialsCard } from "../components/testimonials-card";

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "web",
    description:
      "Full-featured online marketplace with payment integration and real-time inventory management",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    client: "TechRetail Inc.",
    year: "2024",
    rating: 5,
  },
  {
    id: 2,
    title: "Luxury Residential Complex",
    category: "architectural",
    description:
      "Contemporary 50-unit residential complex with modern amenities and sustainable design",
    image: "/luxury-apartment-building-architecture.jpg",
    tags: ["Residential", "3D Modeling", "Sustainable"],
    client: "Urban Living Group",
    year: "2024",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Highway Bridge Construction",
    category: "civil",
    description:
      "Structural design and construction of 2.5km highway bridge with advanced engineering",
    image: "/modern-highway-bridge.jpg",
    tags: ["Structural", "Infrastructure", "Engineering"],
    client: "State Transportation Authority",
    year: "2023",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "web",
    description:
      "Comprehensive hospital management platform with patient records and appointment scheduling",
    image: "/healthcare-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Security"],
    client: "City General Hospital",
    year: "2024",
    rating: 5,
  },
  {
    id: 5,
    title: "Corporate Office Building",
    category: "architectural",
    description:
      "20-story commercial office building with energy-efficient design and modern workspaces",
    image: "/modern-office-building-glass.jpg",
    tags: ["Commercial", "LEED Certified", "Modern"],
    client: "Global Tech Corp",
    year: "2023",
    rating: 5,
  },
  {
    id: 6,
    title: "Water Treatment Facility",
    category: "civil",
    description:
      "Design and construction of municipal water treatment plant serving 100,000 residents",
    image: "/water-treatment-plant-facility.jpg",
    tags: ["Infrastructure", "Environmental", "Municipal"],
    client: "City Water Department",
    year: "2023",
    rating: 4.3,
  },
  {
    id: 7,
    title: "Real Estate Platform",
    category: "web",
    description:
      "Property listing and management platform with virtual tours and CRM integration",
    image: "/real-estate-website-dashboard.jpg",
    tags: ["Vue.js", "Firebase", "Maps API"],
    client: "Prime Properties",
    year: "2024",
    rating: 5,
  },
  {
    id: 8,
    title: "Boutique Hotel & Spa",
    category: "architectural",
    description:
      "Luxury 80-room hotel with spa facilities, rooftop pool, and elegant interior design",
    image: "/luxury-hotel-interior-design.jpg",
    tags: ["Hospitality", "Interior Design", "Luxury"],
    client: "Oasis Hospitality",
    year: "2024",
    rating: 5,
  },
  {
    id: 9,
    title: "Shopping Mall Complex",
    category: "civil",
    description:
      "200,000 sq ft retail complex with parking structure and modern infrastructure",
    image: "/modern-shopping-mall.png",
    tags: ["Commercial", "Retail", "Large Scale"],
    client: "Metro Development",
    year: "2023",
    rating: 5,
  },
];

const testimonials = [
  {
    comment: `The team delivered an exceptional e-commerce platform that
                  exceeded our expectations. The attention to detail and
                  technical expertise was outstanding.`,
    rating: 5,
    user: {
      name: "Sarah Johnson",
      position: "CEO, TechRetail Inc.",
    },
  },
  {
    comment: `Their architectural designs brought our vision to life. The
                  3D visualizations helped us make informed decisions throughout
                  the project.`,
    rating: 5,
    user: {
      name: "Michael Chen",
      position: "Director, Urban Living Group",
    },
  },
  {
    comment: `Professional civil engineering team that completed our bridge
                  project on time and within budget. Highly recommend their
                  services.`,
    rating: 5,
    user: {
      name: "David Martinez",
      position: "Project Manager, State Transportation",
    },
  },
];

type Category = "web" | "architectural" | "civil";

type Filter = "all" | Category;

export const PortfolioView = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Showcasing our successful projects across web development,
              architectural design, and civil engineering
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-30"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="min-w-30"
            >
              <Code className="size-4 mr-2" />
              Web Dev
            </Button>
            <Button
              variant={filter === "architectural" ? "default" : "outline"}
              onClick={() => setFilter("architectural")}
              className="min-w-35"
            >
              <Building2 className="size-4 mr-2" />
              Architectural
            </Button>
            <Button
              variant={filter === "civil" ? "default" : "outline"}
              onClick={() => setFilter("civil")}
              className="min-w-30"
            >
              <HardHat className="size-4 mr-2" />
              Civil
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{ ...project, category: project.category as Category }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <PortfolioStates
        experience={15}
        happyClients={250}
        projects={500}
        satisfaction={98}
      />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from real projects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((tes) => (
              <TestimonialsCard key={tes.user.name} {...tes} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Start Your Project Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of satisfied clients who have transformed their
              ideas into successful projects
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
