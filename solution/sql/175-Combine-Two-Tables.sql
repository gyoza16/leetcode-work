# Write your MySQL query statement below
select
    FirstName,
    LastName,
    City,
    State
from
    person
    left join address using(personid);