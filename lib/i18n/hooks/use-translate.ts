import { translations } from "../translations/translations";

export const useTranslate = <
  TranslationNamespace extends keyof typeof translations,
>(
  nameSpace: TranslationNamespace
) => {
  return translations?.[nameSpace];
};
