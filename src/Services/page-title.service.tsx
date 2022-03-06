export function getPageTitle(url: string): string {
  const siteRoot = '/mkwii-combo-gen';

  switch (url) {
    case siteRoot:
      return 'Home';
    case `${siteRoot}/`:
      return 'Home';
    case `${siteRoot}/generate`:
      return 'Generator';
    case `${siteRoot}/generate/summary`:
      return 'Summary';
    case `${siteRoot}/stats`:
      return 'Stats';
    case `${siteRoot}/stats/vehicle`:
      return 'Stats';
    case `${siteRoot}/stats/summary`:
      return 'Summary';
    default:
      return '404';
  }
}
