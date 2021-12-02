module.exports = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        "source": "/ss/:path*",
        "destination": "https://scoresaber.com/:path*"
      },
      {
        "source": "/disc/:path*",
        "destination": "https://discord.com/:path*"
      }
    ]
  }
}
