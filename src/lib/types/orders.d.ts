declare interface Order {
  _id: string;
  user: string;
  orderItems: OrderItem[];
  totalPrice: number;
  paymentType: string;
  isPaid: boolean;
  isDelivered: boolean;
  state: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  __v: number;
}

declare interface OrderItem {
  product: Product;
  price: number;
  quantity: number;
  _id: string;
}
