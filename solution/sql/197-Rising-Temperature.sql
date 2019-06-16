# Write your MySQL query statement below
SELECT
    W2.Id
FROM
    Weather W1
    INNER JOIN Weather W2 
        ON (W1.RecordDate + INTERVAL 1 DAY) = W2.RecordDate
WHERE
    W1.Temperature < W2.Temperature;