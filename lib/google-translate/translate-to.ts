const apiKey: string = process.env.GOOGLE_TRANSLATE_API_KEY || "";

const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

export function translateTo({
  text,
  targetLang = "en-US",
}: {
  text: string;
  targetLang: string;
}): Promise<string> {
  const data = {
    q: text,
    target: targetLang,
  };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(JSON.stringify(result, null, 4));

      const translationObj = result.data.translations[0];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { translatedText, detectedSourceLanguage } = translationObj;

      return translatedText;
    })
    .catch((error) => console.error("Error:", error));
}
