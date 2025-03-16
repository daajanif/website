// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { defaultLanguage, languages } from './i18n/config';

export const onRequest = defineMiddleware(async ({ request, locals, redirect }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Skip middleware for static assets
  if (pathname.match(/\.(css|jpg|jpeg|png|webp|svg|js|ico|json)$/)) {
    return next();
  }
  
  // Extract the language from the URL path
  const urlSegments = pathname.split('/').filter(Boolean);
  const langInUrl = urlSegments[0];
  
  // Check if we have a language code in the URL
  const isLangInUrl = langInUrl && Object.keys(languages).includes(langInUrl);
  
  // If no language in URL and default language should not be part of the URL, proceed
  if (!isLangInUrl && defaultLanguage === 'en') {
    locals.lang = defaultLanguage;
    return next();
  }
  
  // If language is in URL, save it in locals
  if (isLangInUrl) {
    locals.lang = langInUrl;
    return next();
  }
  
  // If no language in URL and not default, redirect to default language
  const newPathname = `/${defaultLanguage}${pathname}`;
  return redirect(newPathname);
});