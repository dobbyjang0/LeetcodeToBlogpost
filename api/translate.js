import dotenv from "dotenv";
import axios from "axios";

const TRANSLATE_API_URL =
  "https://translation.googleapis.com/language/translate/v2";
dotenv.config();

async function translateText(text) {
  try {
    const response = await axios.post(
      TRANSLATE_API_URL,
      {},
      {
        params: {
          q: text,
          target: "ko",
          key: process.env.GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );
    const { translatedText } = response.data.data.translations[0];
    return translatedText;
  } catch (error) {
    console.error("Error during translation:", error);
    throw error;
  }
}

export { translateText };
