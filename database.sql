-- database is called "react_gallery"
-- extra test photo is in the 'images' folder to add to the DOM: cafe.jpeg

CREATE TABLE "photo-gallery" (
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(512),
  "description" VARCHAR(512),
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "photo-gallery" ("path", "description")
VALUES
('images/me.jpeg', 'Hey, it''s me!')
('images/clara.jpeg', 'Clara at the rooftop bar at the Hewing Hotel.'),
('images/grand-marais.jpeg', 'Grand Marais harbor in winter.'),
('images/matcha.jpeg', 'A matcha latte poured by yours truly at Northern Coffeeworks.'),
('images/pourover.jpeg', 'A nice pourover setup.'),
('images/pup.jpeg', 'My amazing pup Roux!'),
('images/sea-salt-mocha.jpeg', 'A Smoked Sea Salt Mocha.'),
('images/tea.jpeg', 'A nice Ruby Oolong at home.');
