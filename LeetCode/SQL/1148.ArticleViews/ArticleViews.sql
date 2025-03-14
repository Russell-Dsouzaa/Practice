SELECT DISTINCT author_id AS id 
FROM Views 
WHERE author_id = viewer_id 
ORDER BY id ASC;

/*
 The following code works almost twice as fast compared to the previous one.
    SELECT author_id AS id 
    FROM Views 
    WHERE author_id = viewer_id 
    GROUP BY authour_id 
    ORDER BY id ASC;
*/