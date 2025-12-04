import { useState } from 'react';
import Header from '../Header';

export default function HeaderExample() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-[200px] bg-background">
      <Header 
        onLoginClick={() => {
          setShowLogin(true);
          console.log('Login clicked');
        }}
        isLoggedIn={false}
      />
      {showLogin && (
        <div className="pt-20 px-4 text-center text-muted-foreground">
          Login modal would appear here
        </div>
      )}
    </div>
  );
}
