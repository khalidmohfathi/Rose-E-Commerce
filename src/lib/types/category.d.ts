declare interface CategoryCardProps {
  image: string;
  name: string;
  noOfItems: number;
  url: string
}

declare interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string; // or Date, if you're parsing it
  updatedAt: string; // or Date
  productsCount: number;
}
