export function sanitizeUrl(url: string): string {
    const trimmed = url.trim()
    return trimmed.replace(/([^:]\/)\/+/g, '$1')
}