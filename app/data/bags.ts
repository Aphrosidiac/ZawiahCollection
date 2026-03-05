export type Condition = "Like New" | "Excellent" | "Good" | "Very Good";

export interface Bag {
  id: number;
  brand: string;
  model: string;
  condition: Condition;
  price: number;
  image: string;
  description: string;
  color: string;
  sold?: boolean;
  featured?: boolean;
  hidden?: boolean;
}

export const WHATSAPP_NUMBER = "601XXXXXXXX"; // Replace with Zawiah's real number

export function buildWhatsAppLink(bag: Bag): string {
  const message = encodeURIComponent(
    `Hi Zawiah! I'm interested in the ${bag.brand} ${bag.model} (${bag.color}) listed at RM${bag.price.toLocaleString()}. Is it still available?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const BRANDS = ["All", "Louis Vuitton", "Gucci", "Chanel", "Prada", "YSL", "Dior", "Burberry", "Coach"];
export const CONDITIONS: Condition[] = ["Like New", "Excellent", "Very Good", "Good"];

export const bags: Bag[] = [
  {
    id: 1,
    brand: "Louis Vuitton",
    model: "Neverfull MM",
    condition: "Like New",
    price: 3200,
    color: "Monogram",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description: "Classic LV Neverfull MM in iconic monogram canvas. Comes with dustbag. Barely used.",
    featured: true,
  },
  {
    id: 2,
    brand: "Gucci",
    model: "Soho Disco",
    condition: "Excellent",
    price: 2800,
    color: "Black",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description: "Gucci Soho Disco in pebbled black leather. Gold-toned hardware. With authenticity card.",
    featured: true,
  },
  {
    id: 3,
    brand: "Chanel",
    model: "Classic Flap Small",
    condition: "Very Good",
    price: 12500,
    color: "Beige",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Timeless Chanel Classic Flap in beige lambskin with gold CC clasp. Complete set.",
    featured: true,
  },
  {
    id: 4,
    brand: "Louis Vuitton",
    model: "Speedy 25",
    condition: "Very Good",
    price: 2500,
    color: "Damier Ebene",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    description: "LV Speedy 25 in Damier Ebene canvas. Beautiful patina. Comes with padlock and keys.",
  },
  {
    id: 5,
    brand: "Prada",
    model: "Saffiano Mini",
    condition: "Like New",
    price: 3800,
    color: "Dusty Rose",
    image: "https://images.unsplash.com/photo-1614179818511-2b49cb0c94b4?auto=format&fit=crop&w=600&q=80",
    description: "Prada Mini Saffiano in blush pink. Silver hardware. Perfect gift condition.",
  },
  {
    id: 6,
    brand: "YSL",
    model: "Kate Tassel",
    condition: "Excellent",
    price: 4500,
    color: "Nude",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80",
    description: "YSL Kate with tassel in nude leather. Gold YSL emblem. Sleek and timeless.",
  },
  {
    id: 7,
    brand: "Dior",
    model: "Saddle Bag",
    condition: "Like New",
    price: 8900,
    color: "Blue Oblique",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80",
    description: "Iconic Dior Saddle in Blue Oblique canvas. Comes with dustbag and box.",
    featured: true,
  },
  {
    id: 8,
    brand: "Burberry",
    model: "TB Shoulder Bag",
    condition: "Good",
    price: 2200,
    color: "Tan",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80",
    description: "Burberry TB bag in tan leather with signature TB monogram plaque.",
  },
  {
    id: 9,
    brand: "Coach",
    model: "Tabby 26",
    condition: "Like New",
    price: 1200,
    color: "Chalk",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description: "Coach Tabby in chalk white pebbled leather. Gold turn-lock hardware. Comes with dustbag.",
  },
  {
    id: 10,
    brand: "Gucci",
    model: "Dionysus Mini",
    condition: "Very Good",
    price: 3600,
    color: "GG Supreme",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Gucci Dionysus mini in GG Supreme canvas with tiger-head clasp. Iconic and rare.",
  },
  {
    id: 11,
    brand: "Louis Vuitton",
    model: "Pochette Metis",
    condition: "Excellent",
    price: 5200,
    color: "Monogram",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    description: "LV Pochette Metis in monogram. Functional and stylish. Date code verified.",
    sold: true,
  },
  {
    id: 12,
    brand: "Prada",
    model: "Cahier Card Holder",
    condition: "Like New",
    price: 1800,
    color: "Nero",
    image: "https://images.unsplash.com/photo-1614179818511-2b49cb0c94b4?auto=format&fit=crop&w=600&q=80",
    description: "Prada Cahier-inspired card wallet in black Saffiano. Perfect for minimalists.",
  },
];
