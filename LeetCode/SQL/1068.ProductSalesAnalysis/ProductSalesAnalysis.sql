SELECT product_name, year, price 
FROM Sales 
LEFT JOIN Product 
    ON Sales.product_id = Product.product_id;


/*

We could give aliases to table names, for convience and readability.
    SELECT p.product_name, s.year, s.price 
    FROM Sales s
    LEFT JOIN Product p 
        ON s.product_id = p.product_id;    

*/