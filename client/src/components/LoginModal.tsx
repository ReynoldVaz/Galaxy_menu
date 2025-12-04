import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { SiGoogle, SiGithub, SiApple } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin?: (provider: string) => void;
}

export default function LoginModal({ open, onOpenChange, onLogin }: LoginModalProps) {
  const providers = [
    { id: 'google', label: 'Continue with Google', icon: SiGoogle, color: 'hover:bg-red-500/10' },
    { id: 'github', label: 'Continue with GitHub', icon: SiGithub, color: 'hover:bg-gray-500/10' },
    { id: 'apple', label: 'Continue with Apple', icon: SiApple, color: 'hover:bg-gray-500/10' },
    { id: 'email', label: 'Continue with Email', icon: MdEmail, color: 'hover:bg-blue-500/10' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="font-serif text-2xl text-center">Welcome to Nebula Kitchen</DialogTitle>
          <DialogDescription className="text-center">
            Sign in to save favorites, make reservations, and track your cosmic dining journey.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 pt-4">
          {providers.map((provider) => (
            <Button
              key={provider.id}
              variant="outline"
              size="lg"
              className={`w-full justify-start gap-3 py-6 ${provider.color}`}
              onClick={() => {
                onLogin?.(provider.id);
                console.log(`Login with ${provider.id}`);
              }}
              data-testid={`button-login-${provider.id}`}
            >
              <provider.icon className="w-5 h-5" />
              {provider.label}
            </Button>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground pt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  );
}
