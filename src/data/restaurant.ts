export const restaurant = {
  name: "Mayur Restaurant",
  fullName: "Mayur Restaurant & Banquet",
  initials: "M",
  tagline: "Vegetarian North Indian & Chinese",
  intro:
    "North Indian, Punjabi and Chinese cooking done the traditional way — hand-ground masalas, slow-simmered gravies and paneer made fresh through the day.",
  establishedLine: "Khokhra Circle · Maninagar East · Ahmedabad",
  cuisines: [
    "North Indian",
    "Punjabi",
    "Chinese",
    "Continental",
    "Sizzlers",
    "Beverages",
  ],
  address: {
    lines: [
      "A-Block, Radhey Shopping Mall",
      "Above SBI Bank, Khokhra Circle",
      "Maninagar East, Ahmedabad, Gujarat",
    ],
    locality: "Maninagar East",
    region: "Gujarat",
    postalCode: "380008",
    country: "India",
    landmark: "Above SBI Bank, Radhey Shopping Mall",
  },
  phone: {
    display: "+91 95125 54440",
    tel: "+919512554440",
    whatsapp: "919512554440",
  },
  hours: {
    days: "Open all seven days",
    lunch: "11:00 AM – 3:00 PM",
    dinner: "6:30 PM – 10:45 PM",
  },
  rating: {
    score: 4.1,
    reviews: 1009,
  },
  costForTwo: "₹800",
  banquet: "Banquet hall for up to 150 guests",
  popularDishes: ["Paneer Tikka", "Paneer Angara"],
  mapsUrl: "https://maps.app.goo.gl/T3Gojbh36swAQ9hX9",
  taxNote: "Taxes (GST) extra as applicable.",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${restaurant.phone.whatsapp}?text=${encodeURIComponent(message)}`;
