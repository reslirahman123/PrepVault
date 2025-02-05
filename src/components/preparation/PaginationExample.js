import React, { useEffect, useState } from "react";

const PaginationExample = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} width={50} />
          </li>
        ))}
      </ul>
      
      {/* Pagination Controls */}
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
        Previous
      </button>
      <span> Page {currentPage} </span>
      <button onClick={() => setCurrentPage((prev) => (prev * productsPerPage < products.length ? prev + 1 : prev))} 
        disabled={indexOfLastProduct >= products.length}>
        Next
      </button>
    </div>
  );
};

export default PaginationExample;
