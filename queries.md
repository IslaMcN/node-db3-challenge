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

SELECT OrderID, ShipperName FROM [Orders]
JOIN Shippers on Orders.ShipperID = Shippers.ShipperID
WHERE OrderDate < '1997-01-09'

***OrderID	ShipperName***
**10248	Federal Shipping**
*10249	Speedy Express*
*10250	United Package*
*10251	Speedy Express*
*10252	United Package*
*10253	United Package*
*10254	United Package*
*10255	Federal Shipping*
*10256	United Package*
*10257	Federal Shipping*
*10258	Speedy Express*
*10259	Federal Shipping*
*10260	Speedy Express*
*10261	United Package*
*10262	Federal Shipping*
*10263	Federal Shipping*
*10264	Federal Shipping*
*10265	Speedy Express*
*10266	Federal Shipping*
*10267	Speedy Express*
*10268	Federal Shipping*
*10269	Speedy Express*
*10270	Speedy Express*
*10271	United Package*
*10272	United Package*
*10273	Federal Shipping*
*10274	Speedy Express*
*10275	Speedy Express*
*10276	Federal Shipping*
*10277	Federal Shipping*
*10278	United Package*
*10279	United Package*
*10280	Speedy Express*
*10281	Speedy Express*
*10282	Speedy Express*
*10283	Federal Shipping*
*10284	Speedy Express*
*10285	United Package*
*10286	Federal Shipping*
*10287	Federal Shipping*
*10288	Speedy Express*
*10289	Federal Shipping*
*10290	Speedy Express*
*10291	United Package*
*10292	United Package*
*10293	Federal Shipping*
*10294	United Package*
*10295	United Package*
*10296	Speedy Express*
*10297	United Package*
*10298	United Package*
*10299	United Package*
*10300	United Package*
*10301	United Package*
*10302	United Package*
*10303	United Package*
*10304	United Package*
*10305	Federal Shipping*
*10306	Federal Shipping*
*10307	United Package*
*10308	Federal Shipping*
*10309	Speedy Express*
*10310	United Package*
*10311	Federal Shipping*
*10312	United Package*
*10313	United Package*
*10314	United Package*
*10315	United Package*
*10316	Federal Shipping*
*10317	Speedy Express*
*10318	United Package*
*10319	Federal Shipping*
*10320	Federal Shipping*
*10321	United Package*
*10322	Federal Shipping*
*10323	Speedy Express*
*10324	Speedy Express*
*10325	Federal Shipping*
*10326	United Package*
*10327	Speedy Express*
*10328	Federal Shipping*
*10329	United Package*
*10330	Speedy Express*
*10331	Speedy Express*
*10332	United Package*
*10333	Federal Shipping*
*10334	United Package*
*10335	United Package*
*10336	United Package*
*10337	Federal Shipping*
*10338	Federal Shipping*
*10339	United Package*
*10340	Federal Shipping*
*10341	Federal Shipping*
*10342	United Package*
*10343	Speedy Express*
*10344	United Package*
*10345	United Package*
*10346	Federal Shipping*
*10347	Federal Shipping*
*10348	United Package*
*10349	Speedy Express*
*10350	United Package*
*10351	Speedy Express*
*10352	Federal Shipping*
*10353	Federal Shipping*
*10354	Federal Shipping*
*10355	Speedy Express*
*10356	United Package*
*10357	Federal Shipping*
*10358	Speedy Express*
*10359	Federal Shipping*
*10360	Federal Shipping*
*10361	United Package*
*10362	Speedy Express*
*10363	Federal Shipping*
*10364	Speedy Express*
*10365	United Package*
*10366	United Package*
*10367	Federal Shipping*
*10368	United Package
*10369	United Package*
*10370	United Package*
*10371	Speedy Express*
*10372	United Package*
*10373	Federal Shipping*
*10374	Federal Shipping*
*10375	United Package*
*10376	United Package*
*10377	Federal Shipping*
*10378	Federal Shipping*
*10379	Speedy Express*
*10380	Federal Shipping*
*10381	Federal Shipping*
*10382	Speedy Express*
*10383	Federal Shipping*
*10384	Federal Shipping*
*10385	United Package*
*10386	Federal Shipping*
*10387	United Package*
*10388	Speedy Express*
*10389	United Package*
*10390	Speedy Express*
*10391	Federal Shipping*
*10392	Federal Shipping*
*10393	Federal Shipping*
*10394	Federal Shipping*
*10395	Speedy Express*
*10396	Federal Shipping*
*10397	Speedy Express*
*10398	Federal Shipping*
*10399	Federal Shipping*
*10400	Federal Shipping*
*10401	Speedy Express*
*10402	United Package*
*10403	Federal Shipping*
*10404	Speedy Express*
*10405	Speedy Express*
*10406	Speedy Express*
*10407	United Package*
*10408	Speedy Express*

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM [OrderDetails]
JOIN Products on OrderDetails.ProductID = Products.ProductID
WHERE OrderID = '10251'

***ProductName	Quantity***
**Gustaf's Knäckebröd	6**
*Ravioli Angelo	15*
*Louisiana Fiery Hot Pepper Sauce	20*

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName FROM [Orders]
JOIN Customers on Orders.CustomerID = Customers.CustomerID
JOIN Employees on Orders.EmployeeID = Employees.EmployeeID

***OrderID	CustomerName	LastName***
**10248	Wilman Kala	Buchanan**
*10249	Tradição Hipermercados	Suyama*
*10250	Hanari Carnes	Peacock*
*10251	Victuailles en stock	Leverling
*10252	Suprêmes délices	Peacock
*10253	Hanari Carnes	Leverling
*10254	Chop-suey Chinese	Buchanan
*10255	Richter Supermarkt	Dodsworth
*10256	Wellington Importadora	Leverling
*10257	HILARIÓN-Abastos	Peacock
*10258	Ernst Handel	Davolio
*10259	Centro comercial Moctezuma	Peacock
*10260	Old World Delicatessen	Peacock
*10261	Que Delícia	Peacock
*10262	Rattlesnake Canyon Grocery	Callahan
*10263	Ernst Handel	Dodsworth
*10264	Folk och fä HB	Suyama
*10265	Blondel père et fils	Fuller
*10266	Wartian Herkku	Leverling
*10267	Frankenversand	Peacock
*10268	GROSELLA-Restaurante	Callahan
*10269	White Clover Markets	Buchanan
*10270	Wartian Herkku	Davolio
*10271	Split Rail Beer & Ale	Suyama
*10272	Rattlesnake Canyon Grocery	Suyama
*10273	QUICK-Stop	Leverling
*10274	Vins et alcools Chevalier	Suyama
*10275	Magazzini Alimentari Riuniti	Davolio
*10276	Tortuga Restaurante	Callahan
*10277	Morgenstern Gesundkost	Fuller
*10278	Berglunds snabbköp	Callahan
*10279	Lehmanns Marktstand	Callahan
*10280	Berglunds snabbköp	Fuller
*10281	Romero y tomillo	Peacock
*10282	Romero y tomillo	Peacock
*10283	LILA-Supermercado	Leverling
*10284	Lehmanns Marktstand	Peacock
*10285	QUICK-Stop	Davolio
*10286	QUICK-Stop	Callahan
*10287	Ricardo Adocicados	Callahan
*10288	Reggiani Caseifici	Peacock
*10289	B's Beverages	King
*10290	Comércio Mineiro	Callahan
*10291	Que Delícia	Suyama**
*10292	Tradição Hipermercados	Davolio*
*10293	Tortuga Restaurante	Davolio*****
*10294	Rattlesnake Canyon Grocery	Peacock*
*10295	Vins et alcools Chevalier	Fuller*
*10296	LILA-Supermercado	Suyama*********
*10297	Blondel père et fils	Buchanan*
*10298	Hungry Owl All-Night Grocers	Suyama*
*10299	Ricardo Adocicados	Peacock************
*10300	Magazzini Alimentari Riuniti	Fuller*
*10301	Die Wandernde Kuh	Callahan***********
*10302	Suprêmes délices	Peacock*
*10303	Godos Cocina Típica	King****
*10304	Tortuga Restaurante	Davolio*
*10305	Old World Delicatessen	Callahan*
*10306	Romero y tomillo	Davolio******
*10307	Lonesome Pine Restaurant	Fuller*
*10308	Ana Trujillo Emparedados y helados	King*
*10309	Hungry Owl All-Night Grocers	Leverling*
*10310	The Big Cheese	Callahan******************
*10311	Du monde entier	Davolio**
*10312	Die Wandernde Kuh	Fuller*
*10313	QUICK-Stop	Fuller*********
*10314	Rattlesnake Canyon Grocery	Davolio*
*10315	Island Trading	Peacock*************
*10316	Rattlesnake Canyon Grocery	Davolio*
*10317	Lonesome Pine Restaurant	Suyama*
*10318	Island Trading	Callahan***********
*10319	Tortuga Restaurante	King*
*10320	Wartian Herkku	Buchanan*
*10321	Island Trading	Leverling*
*10322	Pericles Comidas clásicas	King*
*10323	Königlich Essen	Peacock**********
*10324	Save-a-lot Markets	Dodsworth*
*10325	Königlich Essen	Davolio*******
*10326	Bólido Comidas preparadas	Peacock*
*10327	Folk och fä HB	Fuller**************
*10328	Furia Bacalhau e Frutos do Mar	Peacock*
*10329	Split Rail Beer & Ale	Peacock*********
*10330	LILA-Supermercado	Leverling**
*10331	Bon app'	Dodsworth*********
*10332	Mère Paillarde	Leverling*
*10333	Wartian Herkku	Buchanan**
*10334	Victuailles en stock	Callahan*
*10335	Hungry Owl All-Night Grocers	King*
*10336	Princesa Isabel Vinhoss	King*********
*10337	Frankenversand	Peacock******
*10338	Old World Delicatessen	Peacock*
*10339	Mère Paillarde	Fuller**********
*10340	Bon app'	Davolio***
*10341	Simons bistro	King*
*10342	Frankenversand	Peacock*
*10343	Lehmanns Marktstand	Peacock*
*10344	White Clover Markets	Peacock*
*10345	QUICK-Stop	Fuller**************
*10346	Rattlesnake Canyon Grocery	Leverling*
*10347	Familia Arquibaldo	Peacock***********
*10348	Die Wandernde Kuh	Peacock*
*10349	Split Rail Beer & Ale	King*
*10350	La maison d'Asie	Suyama**
*10351	Ernst Handel	Davolio****
*10352	Furia Bacalhau e Frutos do Mar	Leverling*
*10353	Piccolo und mehr	King******************
*10354	Pericles Comidas clásicas	Callahan*
*10355	Around the Horn	Suyama***************
*10356	Die Wandernde Kuh	Suyama*
*10357	LILA-Supermercado	Davolio*
*10358	La maison d'Asie	Buchanan*
*10359	Seven Seas Imports	Buchanan*
*10360	Blondel père et fils	Peacock*
*10361	QUICK-Stop	Davolio************
*10362	Bon app'	Leverling*
*10363	Drachenblut Delikatessend	Peacock*
*10364	Eastern Connection	Davolio*********
*10365	Antonio Moreno Taquería	Leverling*
*10366	Galería del gastrónomo	Callahan**
*10367	Vaffeljernet	King*************
*10368	Ernst Handel	Fuller*
*10369	Split Rail Beer & Ale	Callahan*
*10370	Chop-suey Chinese	Suyama*******
*10371	La maison d'Asie	Davolio*
*10372	Queen Cozinha	Buchanan****
*10373	Hungry Owl All-Night Grocers	Peacock*
*10374	Wolski	Davolio*************************
*10375	Hungry Coyote Import Store	Leverling*
*10376	Mère Paillarde	Davolio***************
*10377	Seven Seas Imports	Davolio*
*10378	Folk och fä HB	Buchanan****
*10379	Que Delícia	Fuller*******
*10380	Hungry Owl All-Night Grocers	Callahan*
*10381	LILA-Supermercado	Leverling************
*10382	Ernst Handel	Peacock*******
*10383	Around the Horn	Callahan*
*10384	Berglunds snabbköp	Leverling*
*10385	Split Rail Beer & Ale	Davolio*
*10386	Familia Arquibaldo	Dodsworth**
*10387	Santé Gourmet	Davolio*******
*10388	Seven Seas Imports	Fuller*
*10389	Bottom-Dollar Marketse	Peacock*
*10390	Ernst Handel	Suyama**********
*10391	Drachenblut Delikatessend	Leverling*
*10392	Piccolo und mehr	Fuller************
*10393	Save-a-lot Markets	Davolio*
*10394	Hungry Coyote Import Store	Davolio*
*10395	HILARIÓN-Abastos	Suyama**********
*10396	Frankenversand	Davolio****
*10397	Princesa Isabel Vinhoss	Buchanan*
*10398	Save-a-lot Markets	Fuller*******
*10399	Vaffeljernet	Callahan***
*10400	Eastern Connection	Davolio*
*10401	Rattlesnake Canyon Grocery	Davolio*
*10402	Ernst Handel	Callahan************
*10403	Ernst Handel	Peacock*
*10404	Magazzini Alimentari Riuniti	Fuller*
*10405	LINO-Delicateses	Davolio************
*10406	Queen Cozinha	King********
*10407	Ottilies Käseladen	Fuller*
*10408	Folies gourmandes	Callahan*
*10409	Océano Atlántico Ltda.	Leverling*
*10410	Bottom-Dollar Marketse	Leverling*
*10411	Bottom-Dollar Marketse	Dodsworth*
*10412	Wartian Herkku	Callahan**********
*10413	La maison d'Asie	Leverling*
*10414	Familia Arquibaldo	Fuller****
*10415	Hungry Coyote Import Store	Leverling*
*10416	Wartian Herkku	Callahan**************
*10417	Simons bistro	Peacock*
*10418	QUICK-Stop	Peacock*****
*10419	Richter Supermarkt	Peacock*
*10420	Wellington Importadora	Leverling*
*10421	Que Delícia	Callahan**************
*10422	Franchi S.p.A.	Fuller*
*10423	Gourmet Lanchonetes	Suyama*
*10424	Mère Paillarde	King*******
*10425	La maison d'Asie	Suyama*
*10426	Galería del gastrónomo	Peacock*
*10427	Piccolo und mehr	Peacock*****
*10428	Reggiani Caseifici	King****
*10429	Hungry Owl All-Night Grocers	Leverling*
*10430	Ernst Handel	Peacock*******************
*10431	Bottom-Dollar Marketse	Peacock*
*10432	Split Rail Beer & Ale	Leverling*
*10433	Princesa Isabel Vinhoss	Leverling*
*10434	Folk och fä HB	Leverling*********
*10435	Consolidated Holdings	Callahan*
*10436	Blondel père et fils	Leverling*
*10437	Wartian Herkku	Callahan**********
*10438	Toms Spezialitäten	Leverling*
*10439	Mère Paillarde	Suyama********
*10440	Save-a-lot Markets	Peacock*
*10441	Old World Delicatessen	Leverling*
*10442	Ernst Handel	Leverling*********
*10443	Reggiani Caseifici	Callahan*

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 