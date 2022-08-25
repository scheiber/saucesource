DROP DATABASE IF EXISTS saucesource;
CREATE DATABASE saucesource; 

\c saucesource; 

CREATE TABLE sauces(
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT NOT NULL,
    scoville    INT DEFAULT 0,
    is_organic  BOOLEAN,
    is_kosher   BOOLEAN,
    image       TEXT
);