import IntroductionSection from "./IntroductionSection";
import MapSection from "./MapSection";

const IntroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-50 py-8 lg:py-16 gap-8 bg-slate-50">
      <IntroductionSection />
      <MapSection />
    </section>
  );
};

export default IntroSection;
