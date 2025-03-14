SELECT W1.id 
FROM Weather W1 
Join Weather W2 
    ON DATEDIFF(W1.recordDate,W2.recordDate) = 1
WHERE W1.temperature > W2.temperature;

/*
Here, we Self joined the table 'Weather'. DateDIFF is used to make pairs of two rows who's temperatures differ by one. eg:- (1,2) (2,3) (3,4) where 1,2,3 and 4 are ids.
*/


-- An alternative solution is to use Cross Join for the same table(that is cross join the table with itself). 
-- Cross Join's syntax is the same as INNER, LEFT and Right(CROSS JOIN table_name)
-- But when we cross join a table with itself, we can do it as :- FROM table_name t1,table_name t2
-- Here, aliases are necessary, so that we could refer to columns of specific tables using them.

/*
There would be some columns which would be common to both copies of the table, If we want to SELECT a column,typing out its name (SELECT column_name) would raise an error, 
since the column_name would be ambiguous, which means the same column 'columns_name' is present in both tables and sql is not sure which table's column_name you're referring to. 
*/

SELECT W1.id 
FROM Weather W1, Weather W2 
WHERE DATEDIFF(W1.recordDate, W2.recordDate) = 1 
    AND W1.temperature > W2.temperature;