module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL ||'postgresql://postgres@localhost/kitchen_hero',
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000/api",
  }