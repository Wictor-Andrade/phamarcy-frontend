import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.souzs.com',
                pathname: '/**',
            }, {
                protocol: 'https',
                hostname: 'media.licdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
        ],
    },
    output: 'standalone',
}

export default nextConfig