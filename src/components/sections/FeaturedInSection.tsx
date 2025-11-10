import ScrollReveal from "@/components/ScrollReveal";

const publications = ["TechCrunch", "Wired", "Forbes", "The Verge"];

export const FeaturedInSection = () => {
  return (
    <ScrollReveal>
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center mb-12 opacity-70">Featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {publications.map((pub) => (
              <div
                key={pub}
                className="text-2xl font-light opacity-50 hover:opacity-100 transition-opacity"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
