# Live Docs - Real-time Collaborative Document Editor

<div align="center">

![Live Docs Logo](public/assets/icons/logo.svg)

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, real-time collaborative document editor built with Next.js, featuring live collaboration, rich text editing, and user authentication.

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started)

</div>

## 📽️ Demo Video

Check out the full demo of LiveDocs on [YouTube](https://youtu.be/jVL9EE17NxY).

[![Watch the video](https://img.youtube.com/vi/jVL9EE17NxY/0.jpg)](https://www.youtube.com/watch?v=jVL9EE17NxY)

## Features


- 🔐 **Authentication**: Secure user authentication using Clerk
- 👥 **Real-time Collaboration**: Multiple users can edit documents simultaneously
- 📝 **Rich Text Editor**: Powered by Lexical editor with rich text formatting
- 💬 **Comments**: Add and manage comments on documents
- 🔔 **Notifications**: Real-time notifications for document updates and collaborations
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI components
- 📱 **Responsive Design**: Works seamlessly across all devices

## Tech Stack



| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 15.2.4 |
| **Authentication** | Clerk |
| **Real-time Collaboration** | Liveblocks |
| **Rich Text Editor** | Lexical |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI |
| **Language** | TypeScript |

## Project Structure



```
live_docs/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── editor/           # Editor-related components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── lib/                   # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── utils.ts          # Helper functions
│   └── liveblocks.ts     # Liveblocks configuration
├── public/               # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Clerk account for authentication
- Liveblocks account for real-time features

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd live_docs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

<div align="center">

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

</div>

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
