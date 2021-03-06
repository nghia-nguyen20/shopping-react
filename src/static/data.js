let data = {
  cart: [],
  wishlist: [],
  vat: 16, //vat in percentage
  cartTotal: 0,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10,
    },
    {
      code: "FIVEPERCENT",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 300,
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 1000,
    },
  ],
  productMaxShowModal: false,
  modalMessage: null,
  showSideNavigation: false,
  // used currency should load with the default currency name and rate
  usedCurrency: { USA: 1, symbol: "$ "},
  // exchange rates can be got from any api source
  exchangeRates: {
    base: "USA",
    date: "2021-09-29",
    rates: {
      VN: 23000,
      USD: 1,
      GBP: 0.0075,
      EUR: 0.0087,
      TZS: 22.92,
      UGX: 36.33,
      NGN: 3.59,
      INR: 0.71,
    },
  },
  // overkill but doing it for fun
  currencySymbols: {
    VN: "VND ",
    USD: "$ ",
    GBP: "£ ",
    EUR: "€ ",
    TZS: "TSh ",
    UGX: "USh ",
    NGN: "₦ ",
    INR: "₹ ",
  },
  priceFilter: {
    min: 0,
    max: 3700,
    pricerange: 3700,
  },
  products: [
    {
      id: 1,
      name: "Men's Athletics",
      slug: "mens-analog-quartz-watch-547383",
      price: 50,
      discount_price: 100,
      category: "men",
      color: "black",
      subcategory: "",
      sale: true,
      article: "watch",
      quantity: 5,
      img: "analog-quartz-watch.jpg",
      options: [1, 2, 3],
      fulfilled_by_duka: true,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 1,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.8,
        votes: 350,
      },
    },
    {
      id: 2,
      name: "Women's Athletics",
      slug: "singedani-four-set-handbag-647483",
      price: 200,
      discount_price: 200,
      category: "women",
      color: "gray",
      subcategory: "",
      sale: false,
      article: "handbag",
      quantity: 8,
      img: "singedani-handbag.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 2,
        name: "Champiton",
      },
      ratings: {
        star_ratings: 5,
        votes: 200,
      },
    },
    {
      id: 3,
      name: "Toddler Kids' Athletics",
      slug: "boys-gray-boxer-set-546488",
      price: 230,
      discount_price: 220,
      category: "kids",
      color: "blue",
      sizes: ["S", "L", "M"],
      subcategory: "boys",
      sale: true,
      article: "boxer",
      quantity: 3,
      img: "boy_boxers.jpg",
      options: [2],
      fulfilled_by_duka: false,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 3,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.5,
        votes: 150,
      },
    },
    {
      id: 4,
      name: "Men's Champion Life",
      slug: "hiamok-men-leather-belt-238192",
      price: 230,
      discount_price: 300,
      category: "men",
      color: "brown",
      subcategory: "",
      sale: false,
      article: "belt",
      quantity: 10,
      img: "belt.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 4,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.8,
        votes: 20,
      },
    },
    {
      id: 5,
      name: "Women's Champion Life",
      slug: "vintage-print-flare-dress-987426",
      price: 172,
      discount_price: 325,
      category: "women",
      color: "White",
      sizes: ["S", "M", "L"],
      subcategory: "",
      sale: true,
      article: "dress",
      quantity: 0,
      img: "vintage-flare-dress.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 5,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.8,
        votes: 130,
      },
    },
    {
      id: 6,
      name: "Kids' Champion Life",
      slug: "capped-sleeves-red-cotton-dress-349824",
      price: 150,
      discount_price: 250,
      category: "kids",
      color: "Red",
      sizes: ["S", "M"],
      subcategory: "girls",
      sale: true,
      article: "dress",
      quantity: 2,
      img: "cotton-dress.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: true,
      duka_approved: true,
      vendor: {
        id: 1,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.6,
        votes: 268,
      },
    },
    {
      id: 7,
      name: "Men's Athletics",
      slug: "gemch-men-casual-running-shoes-459123",
      price: 200,
      discount_price: 200,
      category: "men",
      color: "black",
      sizes: ["39", "40", "42"],
      subcategory: "",
      sale: false,
      article: "shoes",
      quantity: 6,
      img: "gemch_shoes.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: true,
      duka_approved: true,
      vendor: {
        id: 2,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4,
        votes: 250,
      },
    },
    {
      id: 8,
      name: "Women's Champion Life",
      slug: "boho-printed-floral-dress-656623",
      price: 190,
      discount_price: 300,
      category: "women",
      color: "skyblue",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: true,
      article: "dress",
      quantity: 10,
      img: "floral-dress.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: false,
      duka_approved: false,
      vendor: {
        id: 3,
        name: "Champion",
      },
      ratings: {
        star_ratings: 5,
        votes: 129,
      },
    },
    {
      id: 9,
      name: "Kids' Athletics",
      slug: "baby-girl-bowknot-leather-shoes-312947",
      price: 193,
      discount_price: 202,
      category: "kids",
      color: "Silver",
      sizes: ["S"],
      subcategory: "girls",
      sale: false,
      article: "dress",
      quantity: 9,
      img: "leather-shoes.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 4,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.9,
        votes: 50,
      },
    },
    {
      id: 10,
      name: "Men's Athletics",
      slug: "men-khaki-trouser-navy-blue-537329",
      price: 134,
      discount_price: 134,
      category: "men",
      color: "Navy Blue",
      sizes: ["M", "L"],
      subcategory: "",
      sale: false,
      article: "shoes",
      quantity: 0,
      img: "gsoft-khaki.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 5,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 5.0,
        votes: 35,
      },
    },
    {
      id: 11,
      name: "Women's Athletics",
      slug: "women-printed-bodycon-dress-439618",
      price: 164,
      discount_price: 164,
      category: "women",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: false,
      article: "dress",
      quantity: 7,
      img: "bodycon-dress.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 1,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.2,
        votes: 240,
      },
    },
    {
      id: 12,
      name: "Kids' Athletics",
      slug: "girl-princess-lace-dress-123567",
      price: 180,
      discount_price: 235,
      category: "kids",
      color: "White",
      sizes: ["S", "M", "L"],
      subcategory: "girls",
      sale: true,
      article: "dress",
      quantity: 4,
      img: "princes-dress.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 2,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.6,
        votes: 70,
      },
    },
    {
      id: 13,
      name: "Men's Champion Life",
      slug: "mens-formal-slim-fit-suit-345987",
      price: 262,
      discount_price: 404,
      category: "men",
      color: "Dark Blue",
      sizes: ["M", "L", "XL"],
      subcategory: "",
      sale: true,
      article: "suit",
      quantity: 3,
      img: "slim-fit-suit.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: false,
      duka_approved: false,
      vendor: {
        id: 3,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 5.0,
        votes: 210,
      },
    },
    {
      id: 14,
      name: "Women's Athletics",
      slug: "womens-rome-strappy-gladiator-loe-flat-flip-230978",
      price: 123,
      discount_price: 234,
      category: "women",
      sizes: ["25", "35", "40"],
      subcategory: "",
      sale: true,
      article: "sandals",
      quantity: 2,
      img: "gladiator-flat-flip.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: false,
      duka_approved: true,
      vendor: {
        id: 4,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.5,
        votes: 3,
      },
    },
    {
      id: 15,
      name: "Big Girls' Athletics",
      slug: "navy-long-sleeved-boys-tshirt-786534",
      price: 120,
      discount_price: 120,
      category: "kids",
      color: "black",
      sizes: ["M", "L"],
      subcategory: "boys",
      sale: false,
      article: "dress",
      quantity: 0,
      img: "boys-t-shirt.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 5,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.9,
        votes: 65,
      },
    },
    {
      id: 16,
      name: "Men's Champion Life",
      slug: "3-piece-mens-vest-white-891267",
      price: 99,
      discount_price: 180,
      category: "men",
      color: "White",
      sizes: ["M", "L"],
      subcategory: "",
      sale: true,
      article: "suit",
      quantity: 8,
      img: "vest.jpg",
      options: [],
      fulfilled_by_duka: true,
      shipped_from_abroad: true,
      duka_approved: false,
      vendor: {
        id: 1,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.0,
        votes: 289,
      },
    },
    {
      id: 17,
      name: "Women's Champion Life",
      slug: "checkers-faix-leather-wrist-watch-120934",
      price: 241,
      discount_price: 243,
      category: "women",
      color: "Gold",
      subcategory: "",
      sale: true,
      article: "watch",
      quantity: 4,
      img: "quartz-wrist-watch.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: true,
      duka_approved: true,
      vendor: {
        id: 2,
        name: "Chanmpion",
      },
      ratings: {
        star_ratings: 4.0,
        votes: 200,
      },
    },
    {
      id: 18,
      name: "Champion x Naruto Shippuden",
      slug: "boys-black-crew-neck-tshirt-784301",
      price: 190,
      discount_price: 200,
      category: "kids",
      color: "Black",
      sizes: ["S", "M"],
      subcategory: "boys",
      sale: true,
      article: "dress",
      quantity: 7,
      img: "crew-neck-tshirt.jpg",
      options: [],
      fulfilled_by_duka: false,
      shipped_from_abroad: false,
      duka_approved: false,
      vendor: {
        id: 3,
        name: "Champion",
      },
      ratings: {
        star_ratings: 4.7,
        votes: 130,
      },
    },
  ],
};

export default data;
