// Prefixes an app-internal path with Vite's configured base path (e.g. "/kisisel-guvenlik-kontrol-listesi/"
// on GitHub Pages, or "/" locally), so links keep working when the site isn't served from the domain root.
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
};
