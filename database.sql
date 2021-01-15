-- create database called "react-gallery"

CREATE TABLE "photo-gallery" (
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(250),
  "description" VARCHAR(250),
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "photo-gallery" ("path", "description")
VALUES
('images/goat_small.jpg', 'A small goat.'),
('images/me.jpeg', 'Hey, it''s me!')
('images/clara.jpeg', 'Clara at the rooftop bar at the Hewing Hotel.'),
('images/grand-marais.jpeg', 'Grand Marais harbor in winter.'),
('images/matcha.jpeg', 'A matcha latte poured by yours truly at Northern Coffeeworks.'),
('images/pourover.jpeg', 'A nice pourover setup.'),
('images/pup.jpeg', 'My amazing pup Roux!'),
('images/sea-sale-mocha.jpeg', 'A smoked Sea Salt Mocha.'),
('images/tea.jpeg', 'A nice Ruby Oolong at home.');
