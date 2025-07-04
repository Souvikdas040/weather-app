# 🌤️ Weather Forecast Web App

A sleek, responsive, and real-time weather forecasting web application built using **React**, **TypeScript**, **TailwindCSS**, and **Lucide Icons**. It displays current weather conditions and a 7-day forecast with modern UI and icons. Optimized for both **light** and **dark mode**.

---

## 🔗 Live Demo

> 🌐 Deployed on [Render](https://render.com)  
> 🔗 **Live URL:** _coming soon after deployment_

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Real-time weather updates with temperature, wind, humidity
- 📅 7-day forecast view
- 🌙 Dark/Light theme support
- 📱 Fully responsive UI
- 🎨 Modern design with TailwindCSS
- ⚙️ Modular and scalable architecture

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [Vite](https://vitejs.dev/)
- [date-fns](https://date-fns.org/)

---

## 📸 App Preview

- [Desktop View](./public/desktop_layout.png)
- [Tablet View](./public/tablet_layout.png)
- [Mobile View](./public/mobile_layout.png)

---

## 📁 Folder Structure

```kotlin
public/
└── preview.png
weather-app/
├── public/
│ └── preview.png            # Optional app screenshot
├── src/
│ ├── api/                   # API calls & utility functions
│ ├── components/            # Reusable UI components
│ ├── types/                 # TypeScript interfaces & types
│ ├── App.tsx                # Main app component
│ └── main.tsx               # Entry point
├── .env                     # Environment variables
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md                # You're here!
```

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
npm install
```

---

## 🔧 Development

```bash
npm run dev
```
> Access at: ```http://localhost:5173```

---

## 🌍 Weather API Setup

- ### Get API Key
  - Sign up at [https://openweathermap.org/api](https://openweathermap.org/api)
  - Copy your API key
    
- ### Create ```.env``` File
  - ```VITE_WEATHER_API_KEY=your_api_key_here```
  - Use ```import.meta.env.VITE_WEATHER_API_KEY``` in your app.
