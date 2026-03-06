# My Homepage

A personal portfolio website inspired by [craftzdog's homepage](https://www.craftz.dog/).

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with hybrid static & server rendering
- [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library for React
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React

## Project Structure

```
$PROJECT_ROOT
├── components/        # React components
│   ├── layouts/      # Layout components
│   └── ...           # Other components
├── lib/              # Non-react modules (theme config)
├── pages/            # Page files
└── public/           # Static files (images, favicon)
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your profile image**
   - Replace `/public/images/profile.jpg` with your own profile picture
   - Recommended size: 200x200 pixels or larger

4. **Customize the content**
   - Edit `pages/index.js` to update your personal information
   - Update `components/navbar.js` with your links
   - Modify `components/logo.js` with your name
   - Edit `components/footer.js` with your details

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Customization Guide

### Theme Colors
Edit `/lib/theme.js` to customize:
- Background colors (light/dark mode)
- Accent colors
- Fonts

### Profile Information
Update in `pages/index.js`:
- Name and title
- Bio sections
- Social media links
- Work description

### Navigation
Modify `components/navbar.js` to:
- Add/remove navigation links
- Update external links

### 3D Model
The project includes a simple geometric dog made with Three.js boxes.
To customize, edit `components/voxel-dog.js`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## Credits

Design inspired by [Takuya Matsuyama](https://www.craftz.dog/)

## License

MIT License - feel free to use this for your own portfolio!

Remember to:
- Add attribution link to the original author
- Replace placeholder content with your own information
