import {Product} from "./types";

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Majestic Mountain Graphic T-Shirt updated",
    price: 44,
    description:
      "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
    images: [
      '["https://i.imgur.com/QkIa5tT.jpeg"',
      '"https://i.imgur.com/jb5Yu0h.jpeg"',
      '"https://i.imgur.com/UlxxXyG.jpeg"]',
    ],
    creationAt: "2024-09-02T17:55:20.000Z",
    updatedAt: "2024-09-02T17:58:58.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
  {
    id: 2,
    title: "Classic Red Pullover Hoodie",
    price: 10,
    description:
      "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    images: [
      "https://i.imgur.com/1twoaDy.jpeg",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg",
    ],
    creationAt: "2024-09-02T17:55:20.000Z",
    updatedAt: "2024-09-02T17:55:20.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
  {
    id: 3,
    title: "Classic Heather Gray Hoodie",
    price: 69,
    description:
      "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
    images: [
      "https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg",
    ],
    creationAt: "2024-09-02T17:55:20.000Z",
    updatedAt: "2024-09-02T17:55:20.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
  {
    id: 4,
    title: "Classic Grey Hooded Sweatshirt",
    price: 90,
    description:
      "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
    images: [
      "https://i.imgur.com/R2PN9Wq.jpeg",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg",
    ],
    creationAt: "2024-09-02T17:55:20.000Z",
    updatedAt: "2024-09-02T17:55:20.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
  {
    id: 5,
    title: "Classic Black Hooded Sweatshirt",
    price: 79,
    description:
      "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
    images: [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg",
    ],
    creationAt: "2024-09-02T17:55:20.000Z",
    updatedAt: "2024-09-02T17:55:20.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
  {
    id: 65,
    title: "Yamaha MT09",
    price: 120000,
    description: "Moto de alto cilindraje",
    images: ['["https://yamahaizabal.com/wp-content/uploads/2020/06/de-lado"]'],
    creationAt: "2024-09-02T18:26:31.000Z",
    updatedAt: "2024-09-02T18:26:31.000Z",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-09-02T17:55:20.000Z",
      updatedAt: "2024-09-02T17:55:20.000Z",
    },
  },
];

const api = {
  search: (query?: string): Promise<Product[]> => {
    let results = PRODUCTS;

    if (query) {
      results = results.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    return new Promise((resolve) =>
      setTimeout(() => resolve(results), Math.floor(Math.random() * (3000 - 500 + 1)) + 500),
    );
  },
};

export default api;
