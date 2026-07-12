# CDA ARMS Weather Bot (Serverless)

Tech stack:
- Cloudflare Workers
- Cloudflare D1 DB to keep track of members
- grammY (Telegram Bot API client)
- Cloudflare KV for caching weather data

Services:
- telegram-bot-worker
- weather-cat-service
- weather-wbgt-service