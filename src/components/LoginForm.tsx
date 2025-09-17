import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome to TechCorp IT Solutions!",
      });
      setIsLoading(false);
    }, 2000);
  };

  const isFormValid = email.includes("@") && password.length >= 6;

  return (
    <Card className="glass-morphism w-full max-w-md mx-auto border-0">
      <CardHeader className="space-y-4 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-tech-gradient flex items-center justify-center">
          <Shield className="w-8 h-8 text-primary-foreground" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
            TechCorp IT Solutions
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Sign in to your account to continue
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="admin@techcorp.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-muted/50 border-border focus:border-primary transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 bg-muted/50 border-border focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
              />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full bg-tech-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-semibold"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:text-accent transition-colors font-medium">
              Contact IT Support
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};