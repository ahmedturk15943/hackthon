module.exports = {
  reactStrictMode: true,  
  swcMinify: true,
  
  webpack: (config, { isServer }) => {
    
    return config;
  },
  
  env: {
    CUSTOM_KEY: 'value',  
  },
}
