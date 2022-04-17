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
    case `${siteRoot}/generate/summary/stats`:
      return 'Stats';
    case `${siteRoot}/track`:
      return 'Tracks';
    case `${siteRoot}/counter`:
      return '1v1s';
    case `${siteRoot}/counter/add`:
      return 'Add';
    default:
      if (url.startsWith(`${siteRoot}/counter/`)) {
        return 'Details';
      }
      return '404';
  }
}
