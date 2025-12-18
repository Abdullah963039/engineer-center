interface PortfolioStatesProps {
  projects: number;
  satisfaction: number;
  happyClients: number;
  experience: number;
}

export const PortfolioStates = ({
  experience,
  happyClients,
  projects,
  satisfaction,
}: PortfolioStatesProps) => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">
            Our Impact
          </h2>
          <p className="text-primary-foreground/80">
            Numbers that speak for themselves
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {projects}+
            </div>
            <div className="text-sm text-primary-foreground/80">
              Completed Projects
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {satisfaction}%
            </div>
            <div className="text-sm text-primary-foreground/80">
              Client Satisfaction
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {happyClients}+
            </div>
            <div className="text-sm text-primary-foreground/80">
              Happy Clients
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {experience}+
            </div>
            <div className="text-sm text-primary-foreground/80">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
