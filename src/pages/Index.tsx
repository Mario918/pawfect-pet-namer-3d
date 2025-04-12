
import React from 'react';
import PetNameGenerator from '@/components/PetNameGenerator';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen pet-background flex flex-col items-center pb-16">
      <header className="w-full py-8 md:py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bubblegum bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
          Pawfect Pet Namer
        </h1>
        <p className="text-lg md:text-xl max-w-md mx-auto text-muted-foreground">
          Find the perfect name for your furry friend with our cute pet name generator!
        </p>
      </header>

      <main className="flex-1 w-full max-w-6xl">
        <PetNameGenerator />
      </main>

      <footer className="mt-12 text-center">
        <p className="flex items-center justify-center gap-2 text-muted-foreground">
          Made with <Heart className="h-4 w-4 text-primary animate-pulse" /> for pet lovers
        </p>
      </footer>
    </div>
  );
};

export default Index;
