import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="glass-container rounded-3xl p-8 md:p-10 w-full max-w-md animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass-button flex items-center justify-center">
          <User className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Crear cuenta
        </h1>
        <p className="text-muted-foreground text-sm">
          Regístrate para comenzar
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80 ml-1">
            Nombre completo
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="glass-input w-full pl-12 pr-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80 ml-1">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="glass-input w-full pl-12 pr-4 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80 ml-1">
            Contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="glass-input w-full pl-12 pr-12 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80 ml-1">
            Confirmar contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="glass-input w-full pl-12 pr-12 py-3.5 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            className="w-4 h-4 mt-0.5 rounded border-border bg-input accent-accent"
            required
          />
          <span className="text-muted-foreground">
            Acepto los{" "}
            <a href="#" className="text-accent hover:text-accent/80">
              términos y condiciones
            </a>{" "}
            y la{" "}
            <a href="#" className="text-accent hover:text-accent/80">
              política de privacidad
            </a>
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="glass-button w-full py-3.5 rounded-xl text-primary-foreground font-medium flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <>
              Crear cuenta
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Sign In Link */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        ¿Ya tienes cuenta?{" "}
        <a href="#" className="text-accent hover:text-accent/80 font-medium transition-colors">
          Inicia sesión
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
