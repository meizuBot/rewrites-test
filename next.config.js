module.exports = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        "source": "/:path*",
        "destination": "https://scoresaber.com/:path*"
      },
    ]
  }
}