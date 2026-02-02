
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({});



async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:  "Explain what is react usestate hook",
    
  config :{
    systemInstruction: "You are a food specislist .you only answer question related to food ,recipes,and nutrition"
  },
  });
  console.log(response.text);
}

await main();



<<<<<<< HEAD
/*
=======

>>>>>>> 406c737 (Add update)
=================To give answer in specified range😎====================

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({});



async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:  "Explain what is react usestate hook",
    
  config :{
    systemInstruction: "You are a food specislist .you only answer question related to food ,recipes,and nutrition"
  },
  });
  console.log(response.text);
}

await main();



=================To Store History😎====================

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({});

const history =[
  {
    role: "user",
    parts : [{text : "What is my name"}],
  },
   {
    role: "model",
    parts : [{text : "I don't know your name or age. As a AI  I don't have Access about your personal details. "}],
  },
   {
    role: "user",
    parts : [{text : "My name is Anu "}],
  },
   {
    role: "model",
    parts : [{text : "Nice to meet you 😊😊Anu .How can I help you?"}],
  },
   {
    role: "user",
    parts : [{text : "What is my name?"}],
  }
];

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: history,
  });
  console.log(response.text);
}

await main();





=================Normal Talk😎====================

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({});



async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:  "Explain what is react usestate hook",

  });
  console.log(response.text);
}

await main();


*/