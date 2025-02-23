/* eslint-disable @next/next/no-img-element */
"use client";

import { languages } from "@/app/api/translate/constants/languages";
import { useTranslate } from "@/lib/i18n/hooks/use-translate";
import { TranslateResponse } from "@/modules/translate/translate.types";
import { useTranslateMutation } from "@/modules/translate/use-translate-mutation";

import { useState } from "react";

export default function App() {
  const [resp, setResp] = useState<TranslateResponse>();
  const [textInput, setTextInput] = useState("");
  const [targetLang, setTargetLang] = useState("zh-CN");

  const translateMutation = useTranslateMutation();

  const translatePage = useTranslate("translate");
  const commonTranslation = useTranslate("common");

  return (
    <div>
      <h2 className="text-center font-bold">{translatePage.heyyTranslate}</h2>

      <input
        className="w-full border-2 my-4 p-2 px-4 focus:outline-none rounded-full"
        placeholder="Heyy, say something..."
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            const value = (event.target as HTMLInputElement)?.value;

            setTextInput(value);

            translateMutation
              .mutateAsync({
                text: value,
                targetLang: targetLang,
              })
              .then((resp) => {
                setResp(resp);
              });
          }
        }}
      />

      <section className="">
        <h2 className="text-center text-2xl font-extralight mt-4">
          Select Target Language
        </h2>

        <div className="flex justify-center space-x-8 mt-4">
          {languages.map((lang) => {
            return (
              <button
                key={lang.id}
                onClick={() => {
                  setTargetLang(lang.id);
                }}
                className={targetLang === lang.id ? "text-white" : "opacity-40"}
              >
                <img src={lang.src} alt={lang.title} className="h-8" />
              </button>
            );
          })}
        </div>
      </section>

      <div className="text-center my-8 mt-24">
        {translateMutation?.isError ? (
          <div>{translatePage.translateError}</div>
        ) : translateMutation?.isPending ? (
          <div> {commonTranslation.loading} </div>
        ) : (
          <div>
            <p className="font-light text-2xl text-gray-500 dark:text-gray-200">
              {textInput}
            </p>
            <p className="text-4xl font-bold">{resp?.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
