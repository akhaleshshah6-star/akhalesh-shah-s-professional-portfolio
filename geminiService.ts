
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Using a mock response.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'mock_key' });

export const generateBio = async (name: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return new Promise(resolve => setTimeout(() => resolve(`A highly motivated and results-oriented Software Developer with a passion for creating elegant, efficient, and user-friendly web applications. ${name} thrives in collaborative environments and is always eager to tackle new challenges and learn cutting-edge technologies. Proficient in modern web development stacks and dedicated to writing clean, maintainable code.`), 1000));
  }

  try {
    const prompt = `Generate a short, professional, and impressive bio for a software developer portfolio. The developer's name is ${name}. The bio should be around 2-3 sentences, highlighting passion, skill, and eagerness to learn and contribute to challenging projects. Do not use markdown.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate bio from Gemini API.");
  }
};
   