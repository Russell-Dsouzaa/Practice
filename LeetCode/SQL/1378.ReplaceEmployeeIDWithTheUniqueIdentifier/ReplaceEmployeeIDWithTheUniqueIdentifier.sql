SELECT name,unique_id   /* Here, we cannot select id, since there are two id columns, one in each table. So sql doesn't understand which id column we're referring to, unless we specify it, as in, table_name.id or table2.id */
FROM Employees 
LEFT JOIN EmployeeUNI 
    ON Employees.id = EmployeeUNI.id;