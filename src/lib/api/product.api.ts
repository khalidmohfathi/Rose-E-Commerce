export const FetchTopProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?sort=-sold`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};
export const FetchTopRatingProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?sort=rateAvg`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};

export const FetchProduct = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products/${id}`
  );
  const data = await res.json();
  const response: Product = data.product;
  return response;
};

export const FetchALLProducts = async (params: {
  category?: string | string[] | undefined;
}) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products`);

  if (params.category) {
    if (Array.isArray(params.category)) {
      params.category.forEach((cat) => {
        url.searchParams.append("category", cat);
      });
    } else {
      url.searchParams.append("category", params.category);
    }
  }

  const res = await fetch(url);
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};

export const FetchALLProductsInCategory = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}products?category=${id}`
  );
  const data = await res.json();
  const response: Product[] = data.products;
  return response;
};
