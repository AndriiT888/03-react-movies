export function getImageUrl(
  filePath: string | null,
  size: string = 'w500',
  fileType?: 'png' | 'svg'
): string {
  if (!filePath) return '/fallback-image.jpg';

  const baseUrl = 'https://image.tmdb.org/t/p/';

  if (fileType) {
    return `${baseUrl}original${filePath}.${fileType}`;
  }

  return `${baseUrl}${size}${filePath}`;
}
