export function objectToUrlParams(obj: Record<string, any>): string {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, String(obj[key]));
    }
  }

  return `?${params.toString()}`;
}
