export const fetchAllCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}categories`);
    const data = await res.json();
    const response:Category[] = data.categories; 
    return response;    
};
