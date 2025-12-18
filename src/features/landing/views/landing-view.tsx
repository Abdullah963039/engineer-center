import { CTA } from "../components/sections/cta";
import { Features } from "../components/sections/features";
import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { States } from "../components/sections/states";

export const LandingView = () => {
  return (
    <main className="-mt-16">
      <Hero />

      <Services />

      <Features />

      <States />

      <CTA />
    </main>
  );
};
