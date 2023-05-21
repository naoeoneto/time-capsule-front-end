/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
    // Por padrão, o Image não carrega imagens externas. Aqui, estamos dizendo ao Next quais domínios ele pode pegar as imagens.
  },
};

module.exports = nextConfig;
