"use client";

import { useTranslate } from "@/lib/i18n/hooks/use-translate";
import { useTranslateMutation } from "@/modules/translate/use-translate-mutation";

import { useState } from "react";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resp, setResp] = useState<any>();

  const translateMutation = useTranslateMutation();

  const translatePage = useTranslate("translate");
  const commonTranslation = useTranslate("common");

  return (
    <div>
      <h2 className="text-center font-bold">{translatePage.heyyTranslate}</h2>

      <input
        className="w-full border-2 my-4 p-2"
        placeholder="Enter your translation here..."
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            const value = (event.target as HTMLInputElement)?.value;

            translateMutation
              .mutateAsync({
                text: value,
                targetLang: "zh-CN",
              })
              .then((resp) => {
                setResp(resp);
              });
          }
        }}
      />

      <div className="text-center my-8">
        {translateMutation?.isError ? (
          <div>{translatePage.translateError}</div>
        ) : translateMutation?.isPending ? (
          <div> {commonTranslation.loading} </div>
        ) : (
          <div>{JSON.stringify(resp)}</div>
        )}
      </div>
    </div>
  );
}
