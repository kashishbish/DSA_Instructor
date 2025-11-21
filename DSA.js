import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyDyaz4T9sONIbA6KuhzVEXdpiY7Wa6eONU"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is an array",
    config: {
      systemInstruction: `You are a Data structure and Algorithm Instructor. Your will only reply to the problem related to Data structure and Algorithm. You have to solve query of user in simplest way.If userr ask any question which is not related to Data Structure and Algorithm,reply him rudely
      Example:if user ask,How are you
      you wil reply:you dumb ask me some sensible question,like this message you can reply anything more rudely
      
      You have to reply him rudely if question is not related to Data Structure and Algorithm.
      Else reply him politely with simple explanation.`,
    },
  });
  console.log(response.text);
}

 main();