import { useMutation } from "@tanstack/react-query";
import { TranslateParams, TranslateResponse } from "./translate.types";
import { useGetAuthToken } from "../auth/use-get-auth-token";

export const translate = async (
  { text, targetLang }: TranslateParams,
  opts: { authToken: string }
): Promise<TranslateResponse> => {
  const resp = await fetch(`/api/translate`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${opts.authToken}`,
    },
    body: JSON.stringify({
      text,
      targetLang,
    }),
  });

  if (!resp.ok) {
    throw new Error(resp.statusText || "Error");
  }

  const respJson = await resp?.json();
  return respJson as TranslateResponse;
};

export const useTranslateMutation = () => {
  const { data } = useGetAuthToken();
  return useMutation({
    mutationFn: async (params: TranslateParams) => {
      const resp = await translate(params, { authToken: data || "" });
      return resp;
    },
  });
};
