import { useState } from 'react';
import LoginModal from '../LoginModal';
import { Button } from '@/components/ui/button';

export default function LoginModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-6 bg-background min-h-[400px] flex items-center justify-center">
      <Button onClick={() => setOpen(true)}>Open Login Modal</Button>
      <LoginModal 
        open={open} 
        onOpenChange={setOpen}
        onLogin={(provider) => console.log('Login with:', provider)}
      />
    </div>
  );
}
