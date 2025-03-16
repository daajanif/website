// src/i18n/config.ts
export const languages = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
};

export const defaultLanguage = 'en';

export const languageFlags = {
  en: '🇺🇸', // USA flag
  ar: '🇸🇦', // Saudi flag
  de: '🇩🇪', // Germany flag
};

// RTL languages
export const rtlLanguages = ['ar'];

// Language metadata for enhanced functionality
export const languageMetadata = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    locale: 'en-US',
    dateFormat: 'MM/DD/YYYY'
  },
  ar: {
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    locale: 'ar-SA',
    dateFormat: 'DD/MM/YYYY'
  },
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    locale: 'de-DE',
    dateFormat: 'DD.MM.YYYY'
  }
};

// Helper function to check if a language is RTL
export function isRtlLanguage(lang: string): boolean {
  return rtlLanguages.includes(lang);
}

// Helper function to get language metadata
export function getLanguageMetadata(lang: string) {
  return languageMetadata[lang as keyof typeof languageMetadata] || languageMetadata[defaultLanguage];
}

// Function to get language from URL
export function getLanguageFromURL(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  
  return Object.keys(languages).includes(firstSegment) ? firstSegment : defaultLanguage;
}

// Function to format path with language
export function formatPath(path: string, lang: string): string {
  // If it's the default language, don't add language prefix
  if (lang === defaultLanguage) {
    return path;
  }
  
  // If path starts with /, add language after /
  if (path.startsWith('/')) {
    return `/${lang}${path}`;
  }
  
  // Otherwise, add language before path
  return `/${lang}/${path}`;
}