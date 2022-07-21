# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
DELETE p1 FROM Person AS p1, Person as p2
WHERE p1.email = p2.email AND p1.id > p2.id;

# you're modifying the persons table
# p1 and p2 represent the same table but gives us a way to compare and remove duplicates
# Algorithim will delete matching emails
# p1.id > p2.id will keep the lower valued id, and delete higher id dupes
# p1.id < p2.id will delete lower value ids and keep latter;
