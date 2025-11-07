# Dockerfile dla aplikacji webowej
FROM node:18-alpine

WORKDIR /app

# Kopiujemy package.json i instalujemy zależności
COPY package*.json ./
RUN npm install

# Kopiujemy całą aplikację
COPY . .

# Budujemy aplikację (jeśli jest to potrzebne)
RUN npm run build || echo "No build script found"

# Wystawiamy port 8080
EXPOSE 8080

# Uruchamiamy aplikację
CMD ["npm", "start"]
