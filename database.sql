CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path varchar (200) NOT NULL,
    description varchar (150) NOT NULL,
    likes varchar (200) NOT NULL
);

INSERT INTO gallery (path, description, likes)
VALUES ('images/france.jpeg', 'Waiting for bubble tea in France', 5),
('images/jamming.jpeg', 'Playing kendama outside', 12),
('images/niece.jpeg', 'Babysitting the niece', 20),
('images/lake.jpeg', 'Enjoying the lake on a cold day', 0)
;
