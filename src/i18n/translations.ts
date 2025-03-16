// src/i18n/translations.ts
import { defaultLanguage } from './config';

// This uses Vite's import.meta.glob to dynamically import all JSON files
// The 'eager: true' option means they're loaded immediately rather than lazily
const importedTranslations = import.meta.glob('./translations/*.json', { eager: true });

// Process the imported translations into a more usable format
const translations: Record<string, any> = {};

Object.entries(importedTranslations).forEach(([path, module]) => {
  // Extract language code from file path (e.g., './translations/en.json' → 'en')
  const langCode = path.split('/').pop()?.replace('.json', '');
  
  if (langCode) {
    // Store the translation data in our translations object
    translations[langCode] = module.default || module;
  }
});

// Helper function to get translations for a specific language
export function getTranslations(lang: string) {
  // Return the translations for the requested language, or fallback to default
  return translations[lang] || translations[defaultLanguage] || {};
}

// Helper function to log available languages
export function getAvailableLanguages() {
  return Object.keys(translations);
}

// For debugging - log available languages
console.log('Available language translations:', Object.keys(translations));

export default translations;