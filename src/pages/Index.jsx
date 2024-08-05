import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const Index = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setCatFact("Oops! Couldn't fetch a cat fact right now.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">All About Cats</h1>
        <div className="flex items-center justify-center mb-6">
          <Cat className="h-12 w-12 text-blue-500 mr-2" />
          <p className="text-xl text-gray-700">Discover the world of felines!</p>
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-64 rounded-md mb-6"
        />
        <div className="space-y-4">
          <p className="text-gray-600">
            Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
            They have been human companions for thousands of years and are one of the most popular pets worldwide.
          </p>
          <p className="text-gray-600">
            Did you know? Cats spend 70% of their lives sleeping and can make over 100 different vocal sounds.
          </p>
          <div className="bg-blue-100 p-4 rounded-md">
            <h2 className="font-semibold text-blue-700 mb-2">Random Cat Fact:</h2>
            <p className="text-gray-700">{catFact || "Click the button to get a cat fact!"}</p>
          </div>
          <Button onClick={fetchCatFact} className="w-full">
            Get a Cat Fact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
