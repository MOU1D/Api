-- Suppression des données existantes
DELETE FROM Cart_Items;
DELETE FROM Carts;
DELETE FROM Command_Items;
DELETE FROM Commands;
DELETE FROM Favorites;
DELETE FROM Products;
DELETE FROM Clients;

-- Insertion des produits
INSERT INTO Products (id, name_of_product, description_of_product, price_of_product, quantity, status, image_url) VALUES
(1, 'Sneakers Premium', 'Des sneakers confortables et élégantes pour toutes les occasions', 129.99, 10, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/sneakers-1.jpg'),
(2, 'T-shirt Design', 'T-shirt en coton bio avec design unique', 29.99, 20, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/tshirt-1.jpg'),
(3, 'Running Pro', 'Chaussures de course professionnelles', 149.99, 5, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/running-1.jpg'),
(4, 'Sneakers Classic', 'Version classique de nos sneakers best-seller', 99.99, 15, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/sneakers-2.jpg'),
(5, 'Sneakers Sport', 'Sneakers spécialement conçues pour le sport', 119.99, 8, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/sneakers-3.jpg'),
(6, 'Sneakers Limited', 'Édition limitée de nos sneakers premium', 159.99, 3, 'IN_STOCK', 'http://localhost:8081/api/v1/products/images/sneakers-4.jpg');

-- Insertion d'un client de test
INSERT INTO Clients (id, first_name, last_name, second_name, email, password, date_of_birth, address, phone_number) VALUES
(1, 'John', 'Doe', 'Test', 'john@example.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', '1990-01-01', '123 Test Street', '0123456789'); 