declare interface CartResponse {
  message: string;
  numOfCartItems: number;
  cart: Cart;
  error?:string
}

declare interface Cart {
  _id: string;
  user: string;
  cartItems: CartItem[];
  discount: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

declare interface CartItem {
    _id: string;
    product: Product;
    price: number;
    quantity: number;
  }