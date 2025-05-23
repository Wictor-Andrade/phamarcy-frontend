import { sanitizeUrl } from '@/utils/sanitizeUrl'

if (!process.env.NEXT_PUBLIC_CDN_URL) {
    console.warn('⚠️ NEXT_PUBLIC_CDN_URL não está definido, usando fallback.')
}

export const CDN_URL = sanitizeUrl(`${process.env.NEXT_PUBLIC_CDN_URL || 'https://images.souzs.com/'}`)

function joinCdnPath(base: string, path: string): string {
    return `${sanitizeUrl(base).replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

export const cdn = {
    logo: joinCdnPath(CDN_URL, '/phamarcy/logo-phamarcy.svg'),
    loginBackgroundImage: joinCdnPath(CDN_URL, '/phamarcy/login-background-image.jpg'),
}