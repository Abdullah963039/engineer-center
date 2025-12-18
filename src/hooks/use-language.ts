import { Language } from "@/features/translations/lib";
import { useLocalStorage } from "./use-local-storage";

export function useLanguage() {
  const [lang, setLang] = useLocalStorage<Language>("eng-center-lang", "en");

  return [lang, setLang] as const;
}
