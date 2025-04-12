
import React, { useState } from 'react';
import { getRandomPetNames, type PetName } from '@/utils/petNames';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ThreeDPet from './ThreeDPet';
import NameDisplay from './NameDisplay';
import { Dog, Cat, Heart } from 'lucide-react';

const PetNameGenerator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [petNames, setPetNames] = useState<PetName[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateNames = () => {
    setLoading(true);
    setTimeout(() => {
      const newNames = getRandomPetNames(gender, 6);
      setPetNames(newNames);
      setLoading(false);
      
      toast({
        title: "Names Generated!",
        description: "Found some pawsome names for your pet!",
        duration: 3000,
      });
    }, 1200); // Artificial delay for effect
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bubblegum mb-6 text-primary flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Choose Pet Gender
              </h2>
              
              <RadioGroup
                value={gender}
                onValueChange={(value) => setGender(value as 'male' | 'female')}
                className="flex flex-col space-y-4 mb-8"
              >
                <div className="flex items-center space-x-3 rounded-lg border-2 border-pet-blue p-4 hover:bg-pet-blue/20 transition-colors cursor-pointer">
                  <RadioGroupItem value="male" id="male" className="text-pet-blue" />
                  <Label htmlFor="male" className="flex items-center cursor-pointer font-medium">
                    <Dog className="mr-2 h-5 w-5" />
                    Male Pet
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 rounded-lg border-2 border-pet-pink p-4 hover:bg-pet-pink/20 transition-colors cursor-pointer">
                  <RadioGroupItem value="female" id="female" className="text-pet-pink" />
                  <Label htmlFor="female" className="flex items-center cursor-pointer font-medium">
                    <Cat className="mr-2 h-5 w-5" />
                    Female Pet
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button 
                onClick={handleGenerateNames}
                disabled={loading}
                size="lg"
                className="w-full py-6 font-bubblegum text-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500"
              >
                Generate Pawfect Names
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Card className="w-full bg-gradient-to-b from-white/80 to-white/40 border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <ThreeDPet gender={gender} />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bubblegum mb-6 text-primary flex items-center gap-2">
            <Heart className="h-6 w-6" />
            Pawfect Pet Names
          </h2>
          
          <NameDisplay 
            names={petNames} 
            loading={loading} 
            onGenerateMore={handleGenerateNames} 
          />
        </div>
      </div>
    </div>
  );
};

export default PetNameGenerator;
