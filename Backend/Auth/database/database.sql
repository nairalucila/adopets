CREATE DATABASE adopets;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    lastname VARCHAR(50),
    email TEXT
);

-- //sudo -u postgres psql
