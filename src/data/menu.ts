export type MenuItem = {
  name: string;
  /** Price in rupees, or null when the item is charged at MRP. */
  price: number | null;
  tags?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  /** Portion / minimum quantity shown on the printed menu. */
  unit?: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    unit: "8 pieces",
    blurb: "Griddle-charred tikkas and kababs to open the meal.",
    items: [
      { name: "Hara Bhara Tikka", price: 265 },
      { name: "Papadi Kabab", price: 275 },
      { name: "Paneer Tikka Dry", price: 300, tags: ["Popular"] },
    ],
  },
  {
    id: "soups",
    title: "Inspired Soups",
    unit: "200 / 250 ml",
    blurb: "Slow-cooked broths, Indo-Chinese classics and clear soups.",
    items: [
      { name: "Cream of Tomato", price: 125 },
      { name: "Minestrone Soup", price: 125 },
      { name: "Sweet Corn Veg. Soup", price: 135 },
      { name: "Veg. Hot & Sour Soup", price: 130 },
      { name: "Veg. Manchow Soup", price: 140 },
      { name: "Lemon Coriander Soup", price: 135 },
      { name: "Palak Phudina Soup", price: 140 },
      { name: "Veg. Mushroom Soup", price: 145 },
      { name: "Clear Soup (Veg. / Noodles)", price: 130 },
    ],
  },
  {
    id: "paneer",
    title: "Hindustani Rasoi · Paneer",
    unit: "350 gm",
    blurb: "Our signature counter — cheese, butter, kaju and heaps of paneer.",
    items: [
      { name: "Cheese Butter Masala", price: 280, tags: ["Chef's pick"] },
      { name: "Cheese Angoori", price: 280 },
      { name: "Paneer Butter Masala", price: 255 },
      { name: "Paneer Tikka Masala", price: 255 },
      { name: "Paneer Kadai", price: 260 },
      { name: "Handi Paneer", price: 260, tags: ["Green"] },
      { name: "Balti Paneer", price: 260 },
      { name: "Tawa Paneer", price: 260 },
      { name: "Paneer Toofani", price: 260 },
      { name: "Paneer Hara Masala", price: 260, tags: ["Green"] },
      { name: "Paneer Shahi Korma", price: 270, tags: ["Green", "Chef's pick"] },
      { name: "Paneer Bhurjee", price: 280 },
      { name: "Paneer Pasanda", price: 260, tags: ["Green"] },
      { name: "Mutter Paneer", price: 245 },
      { name: "Palak Paneer", price: 245, tags: ["Green"] },
      { name: "Methi Paneer", price: 245 },
      { name: "Kaju Khoya", price: 300, tags: ["Sweet"] },
      { name: "Kaju Balti Masala", price: 300 },
      { name: "Kaju Curry", price: 300 },
    ],
  },
  {
    id: "kofta",
    title: "Kofta",
    unit: "350 gm",
    blurb: "Hand-rolled koftas in rich, aromatic gravies.",
    items: [
      { name: "Cheese Kofta", price: 250 },
      { name: "Malai Kofta", price: 250, tags: ["Sweet"] },
      { name: "Veg. Kofta", price: 230 },
      { name: "Paneer Kofta", price: 245 },
      { name: "Kashmiri Kofta", price: 250, tags: ["Sweet"] },
      { name: "Nargish Kofta", price: 245 },
    ],
  },
  {
    id: "subzi",
    title: "Taazi Subzion ka Mela",
    unit: "300 gm",
    blurb: "A market of fresh vegetables — kadai, handi, kolhapuri and more.",
    items: [
      { name: "Mayur Special Veg.", price: 250, tags: ["House special"] },
      { name: "Veg. Kadai", price: 235 },
      { name: "Veg. Kolhapuri", price: 235 },
      { name: "Veg. Makhanwala", price: 235 },
      { name: "Veg. Jaipuri", price: 235 },
      { name: "Veg. Singapuri", price: 235 },
      { name: "Veg. Handi", price: 235, tags: ["Green"] },
      { name: "Veg. Jaffrezy", price: 235 },
      { name: "Subji Shahi Korma", price: 235, tags: ["Green"] },
      { name: "Palak Corn Capsicum", price: 235 },
      { name: "Mutter Methi Malai", price: 235, tags: ["Sweet"] },
      { name: "Baby Corn Makkhanwala", price: 260 },
      { name: "Navratan Korma", price: 245, tags: ["Sweet"] },
      { name: "Corn Tomato Bhartha", price: 270 },
      { name: "Mutter Mushroom", price: 280 },
      { name: "Mushroom Masala", price: 280 },
      { name: "Mix Vegetable", price: 215 },
      { name: "Chana Masala", price: 215 },
      { name: "Bhindi Masala", price: 215 },
      { name: "Aloo Mutter", price: 215 },
      { name: "Dum Aloo", price: 215 },
      { name: "Aloo Methi", price: 215 },
      { name: "Jeera Aloo", price: 215 },
      { name: "Dal Fry", price: 170 },
      { name: "Dal Fry Butter", price: 180 },
      { name: "Dal Fry Tadka", price: 200 },
    ],
  },
  {
    id: "continental",
    title: "Continental",
    unit: "300 gm",
    blurb: "Baked pastas finished with cheese and pineapple.",
    items: [
      { name: "Baked Macaroni Pineapple", price: 290 },
      { name: "Baked Spaghetti Pineapple", price: 290 },
    ],
  },
  {
    id: "sizzler",
    title: "Sizzler",
    unit: "600 – 700 gm",
    blurb: "Served on a smoking hotplate, straight to the table.",
    items: [
      { name: "Mix Grilled", price: 440 },
      { name: "Chinese Sizzler", price: 440, tags: ["Popular"] },
      { name: "Paneer Shahlik", price: 460 },
    ],
  },
  {
    id: "salad",
    title: "Salad, Papad & Raita",
    unit: "1 piece",
    blurb: "Cooling accompaniments to balance the spice.",
    items: [
      { name: "Roasted Papad", price: 30 },
      { name: "Fried Papad", price: 35 },
      { name: "Masala Papad", price: 58 },
      { name: "Plain Curd", price: 70, tags: ["240 gm"] },
      { name: "Boondi Raita", price: 95, tags: ["240 gm"] },
      { name: "Raita Mix Veg.", price: 95, tags: ["240 gm"] },
      { name: "Pineapple Raita", price: 115, tags: ["240 gm"] },
      { name: "Taza Green Salad", price: 85, tags: ["240 gm"] },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    blurb: "Lassis churned thick, and cooling chaas.",
    items: [
      { name: "Jal Jeera Water", price: 55, tags: ["250 ml"] },
      { name: "Fresh Lime Soda", price: 70, tags: ["250 ml"] },
      { name: "Fresh Lime Water (Sweet / Salted)", price: 55, tags: ["250 ml"] },
      { name: "Lassi (Sweet / Salted)", price: 95, tags: ["300 ml"] },
      { name: "Sp. Mayur Lassi", price: 125, tags: ["House special", "300 ml"] },
      { name: "Butter Milk", price: 43, tags: ["250 ml"] },
      { name: "Mineral Water", price: null, tags: ["1 litre", "MRP"] },
      { name: "Soft Drinks", price: null, tags: ["MRP"] },
    ],
  },
];

/** Curated plates shown in the "signature" strip on the landing page. */
export const signatures = [
  {
    name: "Paneer Tikka Dry",
    price: 300,
    section: "Starters",
    note: "Smoky griddle-finished paneer, a guest favourite at the table.",
  },
  {
    name: "Paneer Shahi Korma",
    price: 270,
    section: "Hindustani Rasoi",
    note: "Paneer simmered in a mild green herb and cashew korma.",
  },
  {
    name: "Mayur Special Veg.",
    price: 250,
    section: "Taazi Subzion ka Mela",
    note: "The house vegetable — a little of everything the market had.",
  },
  {
    name: "Chinese Sizzler",
    price: 440,
    section: "Sizzler",
    note: "Indo-Chinese tossed vegetables arriving on a smoking hotplate.",
  },
  {
    name: "Baked Macaroni Pineapple",
    price: 290,
    section: "Continental",
    note: "Macaroni baked with cheese and sweet pineapple.",
  },
  {
    name: "Sp. Mayur Lassi",
    price: 125,
    section: "Beverages",
    note: "Thick, hand-churned and a little indulgent.",
  },
];
