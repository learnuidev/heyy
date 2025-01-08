"use client";

import { useTranslate } from "@/lib/i18n/hooks/use-translate";
import {
  TranslateParams,
  TranslateResponse,
} from "@/modules/translate/translate.types";
import { useEffect, useState } from "react";

const translate = async ({
  text,
  targetLang,
}: TranslateParams): Promise<TranslateResponse> => {
  const resp = await fetch(`/api/translate`, {
    method: "POST",
    // headers: {},
    body: JSON.stringify({
      text,
      targetLang,
    }),
  });

  // throw new Error("yooo");

  if (!resp.ok) {
    throw new Error(resp.statusText || "Error");
  }

  const respJson = await resp?.json();
  return respJson as TranslateResponse;
};

export default function App() {
  const [isTranslating, setIsTranslating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputText, setInput] = useState("");
  const [resp, setResp] = useState("");

  const translatePage = useTranslate("translate");
  const commonTranslation = useTranslate("common");

  useEffect(() => {
    setIsError(false);
    setIsTranslating(true);
    translate({
      text: inputText,
      targetLang: "en-US",
    })
      .then((resp) => {
        setIsTranslating(false);
        setResp(resp.text);
      })
      .catch(() => {
        setIsTranslating(false);
        setIsError(true);
      });
  }, [inputText]);
  return (
    <div>
      <h2 className="text-center font-bold">{translatePage.heyyTranslate}</h2>

      <input
        className="w-full border-2 my-4 p-2"
        placeholder="Enter your translation here..."
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            setInput((event.target as HTMLInputElement)?.value);
          }
        }}
      />
      <div className="text-center my-8">
        {isError ? (
          <div>{translatePage.translateError}</div>
        ) : isTranslating ? (
          <div> {commonTranslation.loading} </div>
        ) : (
          <div>{decodeURIComponent(resp)}</div>
        )}
      </div>
    </div>
  );
}
