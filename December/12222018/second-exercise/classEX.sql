-- A query which returns all data for songs sung by a specific artist
SELECT * FROM Top5000 WHERE `artist` = 'Bing Crosby';
-- A query which returns all artists who appear within the top 5000 more than once
SELECT `artist`, count(*) from Top5000 group by `artist` having count(*) >= 2;

SELECT `artist`, count(*) from Top5000 group by `artist` having count(*) >= 2 LIMIT 25;

SELECT `artist`, count(*) as song_count from Top5000 group by `artist` having count(*) >= 2 ORDER BY song_count;
-- using "as" after the "count(*)" function is naming that function so it can be called again.

-- A query which returns all data contained within a specific range
select * from top5000 where `year` between '1980' and '2000' order by year asc;
-- A query which searches for a specific song in the top 5000 and returns the data for it
select * from top5000 where `song` = 'Call Me Maybe' order by `year` asc;

-- How to search for something similar using %
select * from top5000 where `artist` like 'Michael %';
select * from top5000 where song like '%Good%';
select * from top5000 where song like '%Good%'  order by `position` asc;
