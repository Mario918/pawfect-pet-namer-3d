
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type PetName } from '@/utils/petNames';
import { Heart } from 'lucide-react';

interface NameDisplayProps {
  names: PetName[];
  loading: boolean;
  onGenerateMore: () => void;
}

const NameDisplay: React.FC<NameDisplayProps> = ({ names, loading, onGenerateMore }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/50 backdrop-blur-sm min-h-[200px]">
        <div className="animate-bounce-slow mb-4">
          <Heart size={40} className="text-pet-pink" />
        </div>
        <p className="text-lg font-bubblegum animate-pulse">Finding pawfect names...</p>
      </div>
    );
  }

  if (names.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/50 backdrop-blur-sm min-h-[200px]">
        <p className="text-lg text-muted-foreground mb-4">No names generated yet</p>
        <p className="text-sm text-muted-foreground">Select a gender and generate names!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {names.map((petName, index) => (
          <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-pop" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-primary" />
                <h3 className="text-xl font-bubblegum">{petName.name}</h3>
              </div>
              {petName.meaning && (
                <p className="text-sm text-muted-foreground mt-1">{petName.meaning}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onGenerateMore}
          className="rounded-full py-6 px-8 font-bubblegum text-lg bg-gradient-to-r from-pet-pink to-pet-blue hover:from-pet-blue hover:to-pet-pink transition-all duration-500"
        >
          Generate More Names
        </Button>
      </div>
    </div>
  );
};

export default NameDisplay;
