import axios from 'axios';


export const fetchWordData = async (word, language) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;  // Use language code dynamically
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching word data:", error);
    return null;
  }
};
