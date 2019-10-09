# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM [Products]
join Categories on Products.Categoryid = Categories.Categoryid

***ProductName	CategoryName***
**Chais	Beverages**
*Chang	Beverages*
*Aniseed Syrup	Condiments*
*Chef Anton's Cajun Seasoning	Condiments*
*Chef Anton's Gumbo Mix	Condiments*
*Grandma's Boysenberry Spread	Condiments*
*Uncle Bob's Organic Dried Pears	Produce*
*Northwoods Cranberry Sauce	Condiments*
*Mishi Kobe Niku	Meat/Poultry*
*Ikura	Seafood*
*Queso Cabrales	Dairy Products*
*Queso Manchego La Pastora	Dairy Products*
*Konbu	Seafood*
*Tofu	Produce*
*Genen Shouyu	Condiments*
*Pavlova	Confections*
*Alice Mutton	Meat/Poultry*
*Carnarvon Tigers	Seafood*
*Teatime Chocolate Biscuits	Confections*
*Sir Rodney's Marmalade	Confections*
*Sir Rodney's Scones	Confections*
*Gustaf's Knäckebröd	Grains/Cereals*
*Tunnbröd	Grains/Cereals*
*Guaraná Fantástica	Beverages*
*NuNuCa Nuß-Nougat-Creme	Confections*
*Gumbär Gummibärchen	Confections*
*Schoggi Schokolade	Confections*
*Rössle Sauerkraut	Produce*
*Thüringer Rostbratwurst	Meat/Poultry*
*Nord-Ost Matjeshering	Seafood*
*Gorgonzola Telino	Dairy Products*
*Mascarpone Fabioli	Dairy Products*
*Geitost	Dairy Products*
*Sasquatch Ale	Beverages*
*Steeleye Stout	Beverages*
*Inlagd Sill	Seafood*
*Gravad lax	Seafood*
*Côte de Blaye	Beverages*
*Chartreuse verte	Beverages*
*Boston Crab Meat	Seafood*
*Jack's New England Clam Chowder	Seafood*
*Singaporean Hokkien Fried Mee	Grains/Cereals*
*Ipoh Coffee	Beverages*
*Gula Malacca	Condiments*
*Røgede sild	Seafood*
*Spegesild	Seafood*
*Zaanse koeken	Confections*
*Chocolade	Confections*
*Maxilaku	Confections*
*Valkoinen suklaa	Confections*
*Manjimup Dried Apples	Produce*
*Filo Mix	Grains/Cereals*
*Perth Pasties	Meat/Poultry*
*Tourtière	Meat/Poultry*
*Pâté chinois	Meat/Poultry*
*Gnocchi di nonna Alice	Grains/Cereals*
*Ravioli Angelo	Grains/Cereals*
*Escargots de Bourgogne	Seafood*
*Raclette Courdavault	Dairy Products*
*Camembert Pierrot	Dairy Products*
*Sirop d'érable	Condiments*
*Tarte au sucre	Confections*
*Vegie-spread	Condiments*
*Wimmers gute Semmelknödel	Grains/Cereals*
*Louisiana Fiery Hot Pepper Sauce	Condiments*
*Louisiana Hot Spiced Okra	Condiments*
*Laughing Lumberjack Lager	Beverages*
*Scottish Longbreads	Confections*
*Gudbrandsdalsost	Dairy Products*
*Outback Lager	Beverages*
*Fløtemysost	Dairy Products*
*Mozzarella di Giovanni	Dairy Products*
*Röd Kaviar	Seafood*
*Longlife Tofu	Produce*
*Rhönbräu Klosterbier	Beverages*
*Lakkalikööri	Beverages*
*Original Frankfurter grüne Soße	Condiments*

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 