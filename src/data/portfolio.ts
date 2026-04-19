export type PortfolioCategory =
  | 'All'
  | 'Social Media'
  | 'Manipulation'
  | 'Motion Design'
  | 'Print Design';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  aspect: string;
  color: string;
  tag: string;
  tools?: string[];
  year?: string;
}

export const categories: PortfolioCategory[] = [
  'All',
  'Social Media',
  'Manipulation',
  'Motion Design',
  'Print Design',
];

// Place your images in public/portfolio/{category-folder}/
// Then update the `image` path below, e.g. "/portfolio/social-media/bloom-glow.jpg"
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'bloom-glow',
    title: 'Bloom & Glow',
    category: 'Social Media',
    description:
      'A vibrant social media campaign featuring floral gradients and soft glow effects designed for Instagram stories and reels.',
    image: '/portfolio/social-media/bloom-glow.jpg',
    aspect: 'aspect-[9/16]',
    color: 'from-blush/30 to-lavender-light',
    tag: '9:16',
    tools: ['Photoshop', 'Illustrator'],
    year: '2025',
  },
  {
    id: 'celestial-dreams',
    title: 'Celestial Dreams',
    category: 'Manipulation',
    description:
      'A surreal photo manipulation blending night skies with dreamy landscapes, creating an ethereal and otherworldly atmosphere.',
    image: '/portfolio/manipulation/celestial-dreams.jpg',
    aspect: 'aspect-square',
    color: 'from-lavender/30 to-blush-light',
    tag: 'Edit',
    tools: ['Photoshop'],
    year: '2025',
  },
  {
    id: 'velvet-hour',
    title: 'Velvet Hour',
    category: 'Motion Design',
    description:
      'Smooth 9:16 motion graphics with velvet textures and warm transitions, perfect for Instagram reels and TikTok.',
    image: '/portfolio/motion/velvet-hour.jpg',
    aspect: 'aspect-[9/16]',
    color: 'from-peach/30 to-blush-light',
    tag: '9:16',
    tools: ['After Effects', 'Photoshop'],
    year: '2025',
  },
  {
    id: 'soft-petals',
    title: 'Soft Petals',
    category: 'Print Design',
    description:
      'Elegant floral print design for luxury packaging and stationery with delicate petal illustrations and soft color palettes.',
    image: '/portfolio/print/soft-petals.jpg',
    aspect: 'aspect-[4/5]',
    color: 'from-sage/30 to-cream',
    tag: 'Print',
    tools: ['Illustrator', 'InDesign'],
    year: '2024',
  },
  {
    id: 'golden-mist',
    title: 'Golden Mist',
    category: 'Social Media',
    description:
      'A warm-toned social media post series with golden hour aesthetics and misty overlays for a lifestyle brand.',
    image: '/portfolio/social-media/golden-mist.jpg',
    aspect: 'aspect-square',
    color: 'from-peach/40 to-lavender-light',
    tag: '1:1',
    tools: ['Photoshop', 'Lightroom'],
    year: '2024',
  },
  {
    id: 'lunar-phase',
    title: 'Lunar Phase',
    category: 'Manipulation',
    description:
      'A mystical photo manipulation series exploring lunar phases with double exposure techniques and celestial elements.',
    image: '/portfolio/manipulation/lunar-phase.jpg',
    aspect: 'aspect-[9/16]',
    color: 'from-lavender/40 to-sage/30',
    tag: 'Edit',
    tools: ['Photoshop'],
    year: '2024',
  },
  {
    id: 'rose-garden',
    title: 'Rose Garden',
    category: 'Social Media',
    description:
      'Romantic social media templates featuring hand-drawn rose illustrations with a modern minimalist touch.',
    image: '/portfolio/social-media/rose-garden.jpg',
    aspect: 'aspect-[4/5]',
    color: 'from-blush/40 to-cream',
    tag: '4:5',
    tools: ['Illustrator', 'Canva Pro'],
    year: '2024',
  },
  {
    id: 'crystal-clear',
    title: 'Crystal Clear',
    category: 'Motion Design',
    description:
      'Glass morphism inspired motion graphics with crystal-like reflections and smooth transitions for brand content.',
    image: '/portfolio/motion/crystal-clear.jpg',
    aspect: 'aspect-square',
    color: 'from-lavender-light to-blush/20',
    tag: 'Motion',
    tools: ['After Effects', 'Cinema 4D'],
    year: '2024',
  },
  {
    id: 'wildflower-press',
    title: 'Wildflower Press',
    category: 'Print Design',
    description:
      'Botanical print collection for artisan press, featuring wildflower illustrations with vintage letterpress aesthetics.',
    image: '/portfolio/print/wildflower-press.jpg',
    aspect: 'aspect-[9/16]',
    color: 'from-sage/40 to-peach/20',
    tag: 'Print',
    tools: ['Illustrator', 'InDesign'],
    year: '2024',
  },
];
