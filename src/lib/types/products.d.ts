declare interface Product {
    id: string;
    _id: string;
    title: string;
    slug: string;
    description: string;
    imgCover: string;
    images: string[];
    price: number;
    priceAfterDiscount: number;
    discount: number;
    quantity: number;
    sold: number;
    rateAvg: number;
    rateCount: number;
    category: string;  // Can be updated to `Category` interface if populated
    occasion: string;  // Can be updated to `Occasion` interface if populated
    createdAt: string; // or Date if you're converting
    updatedAt: string; // or Date if you're converting
    __v: number;
  }
  