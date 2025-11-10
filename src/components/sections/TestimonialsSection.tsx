import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    content:
      "Wizora helped me understand my patterns and make better decisions. The AI insights are incredibly accurate.",
    result: "30% increase in self-awareness and improved decision-making",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Entrepreneur",
    content:
      "The birth chart analysis was mind-blowing. It explained so much about my personality and life path.",
    result: "Discovered optimal career timing and relationship patterns",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Wellness Coach",
    content:
      "I use Wizora daily for reflection. The AI companion feels like talking to a wise friend who truly understands me.",
    result: "Deeper client connections and personal growth breakthroughs",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    content:
      "As a skeptic, I was surprised how accurate the insights were. The AI really gets the nuances of astrology.",
    result: "Better timing for product launches and team management",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="pt-16 pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Loved by Seekers
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              See how Wizora is transforming lives
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ height: "fit-content" }}
          >
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                className="snap-center"
              >
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
