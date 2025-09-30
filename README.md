# 🎬 Movie Library

<img width="100%" height="400" alt="Screenshot 2025-09-30 at 8 57 30 AM" src="https://github.com/user-attachments/assets/b2a95dd8-44a9-4957-aab5-cb8d1a32ecbc" />


## 📖 About

It is a modern, responsive web app that lets you effortlessly explore a curated movie collection, featuring rich details like thumbnails, genres, IMDB ratings, and custom ratings, with intuitive search and filter options for a personalized viewing experience.

---

## 🚀 Features

- ✅ Search movies by title  
- 🎭 Filter by **genre**, **language**, and **ratings**  
- ⭐ Separate support for **IMDB** and **custom ratings**  
- 📊 Movie count display  
- 📱 Responsive design with Material UI components  


---

# 🛠️ Tech Stack

| Library                                         | Version |
| ----------------------------------------------- | ------- |
| [React](https://reactjs.org/)                   | v19     |
| [Next.js](https://nextjs.org/)                  | v15     |
| [Material UI](https://mui.com)                  | v6      |
| [React Spring](https://www.react-spring.dev)    | v9      |
| [Emotion](https://emotion.sh/docs/introduction) | v11     |

---

# Getting Started

## Prerequisite

- Node 20+
- PNPM 9+

### Install Dependencies:

```bash
pnpm i
```

### run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Cleanup the movies data

```bash
pnpm run cleanup
```

It will do a cleanup on database. It will perform following actions

- Sort movies by year (reverse chronological order)
- Assign new ids to movies as per new order.
- Remove the duplicate movies
