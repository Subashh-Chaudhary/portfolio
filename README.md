# Portfolio Website

A modern, animated portfolio website built with Next.js 14, featuring smooth animations and a clean, scalable architecture.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Language:** TypeScript
- **UI Components:** shadcn/ui, 21st.dev
- **Icons:** Lucide React

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
├── components/            # Reusable components
│   ├── animated/         # Animation components
│   ├── cards/           # Card components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   └── ui/              # UI components
├── data/                 # Static data & constants
├── lib/                  # Utilities & libraries
│   ├── animations/      # Animation utilities
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   └── config/         # Configuration
├── types/               # TypeScript type definitions
└── public/             # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

Edit the constants in `/data/personal.ts`:
- Personal details
- Social links

### Add Projects

Add your projects to `/data/projects.ts`

### Update Experience

Modify your work history in `/data/experience.ts`

### Adjust Skills

Update your tech stack in `/data/skills.ts`

### Education & Certifications

Edit academic background in `/data/education.ts`

## 🎨 Features

- ✅ Fully responsive design
- ✅ Smooth page transitions
- ✅ Animated components with Framer Motion
- ✅ SEO optimized with metadata
- ✅ TypeScript for type safety
- ✅ Clean and scalable architecture
- ✅ Dark mode support (via Tailwind)
- ✅ Accessibility-focused

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ by Subash Tharu
