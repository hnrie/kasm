/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'hnrie KDE Registry',
    description: 'Personal Kasm workspace registry featuring KDE Plasma desktops and Chromium.',
    icon: '/img/logo.svg',
    listUrl: 'https://hnrie.github.io/kasm/',
    contactUrl: 'https://github.com/hnrie/kasm/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
