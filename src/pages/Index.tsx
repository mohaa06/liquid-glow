import AnimatedBackground from "@/components/AnimatedBackground";
import LoginForm from "@/components/ui/LoginForm";
import RegisterForm from "@/components/ui/RegisterForm";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 py-8">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch max-w-4xl w-full">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Index;
