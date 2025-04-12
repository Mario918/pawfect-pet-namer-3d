
export type PetName = {
  name: string;
  meaning?: string;
};

export const malePetNames: PetName[] = [
  { name: "Max", meaning: "Greatest" },
  { name: "Buddy", meaning: "Friend" },
  { name: "Charlie", meaning: "Free man" },
  { name: "Jack", meaning: "God is gracious" },
  { name: "Cooper", meaning: "Barrel maker" },
  { name: "Rocky", meaning: "Strong and sturdy" },
  { name: "Duke", meaning: "Leader" },
  { name: "Bear", meaning: "Strong and brave" },
  { name: "Tucker", meaning: "One who softens cloth" },
  { name: "Oliver", meaning: "Olive tree" },
  { name: "Leo", meaning: "Lion" },
  { name: "Milo", meaning: "Soldier or merciful" },
  { name: "Toby", meaning: "God is good" },
  { name: "Finn", meaning: "Fair" },
  { name: "Zeus", meaning: "Sky father in Greek mythology" },
  { name: "Oscar", meaning: "God spear" },
  { name: "Simba", meaning: "Lion" },
  { name: "Louie", meaning: "Famous warrior" },
  { name: "Murphy", meaning: "Sea warrior" },
  { name: "Gus", meaning: "Strength" },
  { name: "Winston", meaning: "Joy stone" },
  { name: "Teddy", meaning: "Divine gift" },
  { name: "Bentley", meaning: "Meadow with coarse grass" },
  { name: "Jasper", meaning: "Treasurer" },
  { name: "Diesel", meaning: "Powerful and energetic" },
];

export const femalePetNames: PetName[] = [
  { name: "Bella", meaning: "Beautiful" },
  { name: "Luna", meaning: "Moon" },
  { name: "Lucy", meaning: "Light" },
  { name: "Daisy", meaning: "Day's eye" },
  { name: "Lola", meaning: "Strong woman" },
  { name: "Sadie", meaning: "Princess" },
  { name: "Molly", meaning: "Star of the sea" },
  { name: "Bailey", meaning: "Bailiff or steward" },
  { name: "Stella", meaning: "Star" },
  { name: "Maggie", meaning: "Pearl" },
  { name: "Chloe", meaning: "Blooming" },
  { name: "Penny", meaning: "Weaver" },
  { name: "Zoey", meaning: "Life" },
  { name: "Lily", meaning: "Pure" },
  { name: "Coco", meaning: "Chocolate bean" },
  { name: "Sophie", meaning: "Wisdom" },
  { name: "Rosie", meaning: "Rose" },
  { name: "Ruby", meaning: "Red precious stone" },
  { name: "Gracie", meaning: "Grace" },
  { name: "Nala", meaning: "Gift" },
  { name: "Abby", meaning: "Father's joy" },
  { name: "Roxy", meaning: "Dawn" },
  { name: "Willow", meaning: "Slender and graceful" },
  { name: "Pepper", meaning: "Spicy" },
  { name: "Honey", meaning: "Sweet as honey" },
];

export function getRandomPetNames(gender: 'male' | 'female', count: number = 1): PetName[] {
  const namesList = gender === 'male' ? malePetNames : femalePetNames;
  const shuffled = [...namesList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
