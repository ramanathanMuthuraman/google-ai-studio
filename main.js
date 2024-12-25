const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

const prompt = "Explain how AI works?";

async function generate() {
  const result = await model.generateContent([prompt]);
  console.log(result.response.text());
}

generate();