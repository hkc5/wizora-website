import GlassCard from "./GlassCard";
import { Star } from "phosphor-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  result: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, result, rating }: TestimonialCardProps) => {
  return (
    <GlassCard className="min-w-[300px] md:min-w-[400px] h-full">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} weight="fill" className="text-primary" />
        ))}
      </div>
      <p className="mb-6 italic">"{content}"</p>
      <div className="glass-card p-3 rounded-lg mb-4 border border-primary/30">
        <p className="text-sm">
          <span className="text-primary font-medium">Result:</span> {result}
        </p>
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm opacity-70">{role}</p>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
