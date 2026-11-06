const API_URL = "/api/products";

const getProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

const createProducts = async (product) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });

    return response.json();
};

const deleteProducts = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
}

const updateProducts = async (id, product) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "UPDATE",
    })
}

export { getProducts, createProducts, deleteProducts, updateProducts } 