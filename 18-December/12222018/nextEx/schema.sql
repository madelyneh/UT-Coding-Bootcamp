CREATE TABLE top_albums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_europe DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE top5000 (
  position INT NOT NULL,
  song VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_europe DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);


-- examples of multiple clauses
select * from top5000 where song = 'Good'  AND `col` = 'value' or `col` = 'value';

select * from top5000 where song = 'Good'  AND (`col` = 'value' or `col` = 'value');

INSERT INTO Top5000Albums (position, artist, album, year, raw_total, raw_usa, raw_uk, raw_europe, raw_row)
VALUES (1, "The Beatles", "Sgt Pepper's Lonely Hearts Club Band" ,1967, 62.984, 29.233, 13.31, 8.757, 0.553);


CREATE INDEX idx_artist ON Top5000 (artist, year);