import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is AI-powered astrology?",
    answer:
      "Our AI is trained on thousands of astrological texts and real birth charts. It combines traditional astrological wisdom with machine learning to provide highly accurate and personalized insights.",
  },
  {
    question: "Do I need to know my exact birth time?",
    answer:
      "For the most accurate birth chart, we recommend knowing your exact birth time. However, we can still provide valuable insights with just your birth date and location.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. We take your privacy seriously. Your birth chart data and conversations are encrypted and never shared with third parties.",
  },
  {
    question: "How is this different from other astrology apps?",
    answer:
      "Wizora uses advanced AI to provide conversational, personalized guidance that goes beyond generic horoscopes. It's like having a personal astrologer available 24/7.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="pt-12 pb-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="opacity-70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};
