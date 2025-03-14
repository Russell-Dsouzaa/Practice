SELECT customer_id,COUNT(customer_id) 
FROM Visits 
LEFT JOIN Transactions 
    ON Visits.visit_id = Transactions.visit_id 
WHERE transaction_id IS NUll 
GROUP BY customer_id;