# 🎮 Save ur OShi!!!

A fun and interactive guessing game featuring JKT48 members! Test your knowledge by guessing member names with limited attempts. Built with React, TypeScript, and modern web technologies.

## 🌟 Features

- **Interactive Guessing Game**: Guess JKT48 member names with 10 attempts
- **Progressive Hints**: Letters are revealed as you guess correctly
- **Multiple Generations**: Includes members from Gen 3 to Gen 13, plus Virtual Gen 1
- **Share Your Victory**: Capture and share your winning screen directly to Twitter
- **Theme Support**: Built-in theme switcher with DaisyUI
- **Responsive Design**: Fully responsive layout that works on all devices
- **Image Export**: Save your victory screenshot using html-to-image
- **Cloud Storage**: Automatic image upload to Supabase storage

## 🎯 How to Play

1. Click **"Start"** to begin the game
2. You have **10 attempts** to guess the member's name
3. Enter letters or the full name (max 6 characters per guess, or full name)
4. Correctly guessed letters will be revealed in the name
5. Win by revealing the complete name before running out of attempts!
6. Share your victory on Twitter with the **"Save your Saves!!!"** button

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.3
- **Language**: TypeScript 5.7.2
- **Build Tool**: Vite 6.2.0
- **Styling**:
  - Tailwind CSS 4.1.2
  - DaisyUI 5.0.12
- **Backend/Storage**: Supabase
- **Image Processing**:
  - html-to-image 1.11.13
  - html2canvas 1.4.1
- **Utilities**: classnames 2.5.1

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/khaicalalf/guess-it-ts.git
cd guess-it-ts
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
guess-it-ts/
├── src/
│   ├── Components/
│   │   ├── GuessIt.tsx      # Main game component
│   │   ├── Theme.tsx         # Theme switcher
│   │   ├── WhatIs.tsx        # Info drawer
│   │   └── Footer.tsx        # Footer component
│   ├── assets/
│   │   └── image/member/     # Member images
│   ├── library/
│   │   └── supabase.ts       # Supabase client
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── logo.png
└── index.html
```

## 🎨 Features in Detail

### Game Mechanics

- **Smart Letter Matching**: Progressive letter revelation system
- **Attempt Counter**: Visual feedback on remaining attempts
- **Input Validation**: Prevents invalid inputs and provides helpful alerts
- **Victory Modal**: Celebratory modal with member image and stats

### Social Features

- **Twitter Integration**: One-click sharing to Twitter
- **Image Capture**: Automatic screenshot generation
- **Cloud Upload**: Images uploaded to Supabase for sharing

### UI/UX

- **Responsive Design**: Mobile-first approach
- **Theme Switching**: Multiple theme options via DaisyUI
- **Smooth Animations**: CSS animations for better user experience
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🎭 JKT48 Members Included

The game features **66 members** across multiple generations:

- Gen 3 (2 members)
- Gen 5 (1 member)
- Gen 7 (6 members)
- Gen 8 (2 members)
- Gen 9 (3 members)
- Gen 10 (6 members)
- Gen 11 (12 members)
- Gen 12 (16 members)
- Gen 13 (9 members)
- Virtual Gen 1 (3 members)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- All member photos are originally from the members' SNS
- No members were harmed in the development ✌️
- Special thanks to JKT48 and all the fans!

## 🔗 Live Demo

Visit the live demo at: [https://save-ur-oshiii.netlify.app/](https://save-ur-oshiii.netlify.app/)

---

Made with ❤️ for JKT48 fans
