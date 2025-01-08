const apiKey = `your api key goes here`;

const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

function translateTo({ text, targetLang = "en" }) {
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

translateTo({
  text: "想办法",
  targetLang: "en-US",
}).then((resp) => {
  console.log("resp", resp);
});
