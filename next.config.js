const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  compiler: {
    styledComponents: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.test('.svg')) {
        return { ...rule, exclude: /\.svg$/ };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;
