import AnimatedBackground from "@/components/AnimatedBackground";
import LoginForm from "@/components/ui/LoginForm";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <AnimatedBackground />
      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
