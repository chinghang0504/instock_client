# InStock

## Project Information

**Developers:**
- Ching Hang Lam
- Harpreet Jagra
- Jonathan Sage
- Thiago Gil Silva Mussa

**Last Modified:** June 23, 2024

## Table of Contents

- [Project Information](#project-information)
- [Project Setup](#project-setup)
  - [Download the Project Files](#download-the-project-files)
  - [Database Setup](#database-setup)
    - [Create the Database](#create-the-database)
    - [Setup the Database](#setup-the-database)
  - [Running the Application](#running-the-application)
    - [Server Side](#server-side)
    - [Client Side](#client-side)

## Project Setup

### Download the Project Files

- **Client Side Project:** [GitHub Repository](https://github.com/chinghang0504/instock_client)
- **Server Side Project:** [GitHub Repository](https://github.com/chinghang0504/instock_server)

### Database Setup

#### Create the Database

1. Open your SQL Workbench.
2. Execute the following SQL command to create a database named `instock`:
```sql
CREATE DATABASE instock;
```

#### Setup the Database
1. Navigate to the project directory.
2. Run the following command to create the required table schemas:

```shell
npm run migrate
```

3. Insert data into the tables by running:
```shell
npm run seed
```

Note: To delete all tables, use the following command:
```shell
npm run rollback
```

### Running the Application
#### Server Side
To start the server, run:
```shell
npm run start
```

#### Client Side
To start the client, run:
```shell
npm run dev
```

## API Documentation

-----------------------------------------------------FOR WAREHOUSES:
 --All ids refer to the warehouse id--

––How to retrieve a list of all Warehouses:
GET
/warehouse

RESPONSE SAMPLE: 
[ {
    "id": 1,
    "warehouse_name": "Manhattan",
    "address": "503 Broadway",
    "city": "New York",
    "country": "USA",
    "contact_name": "Parmin Aujla",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (646) 123-1234",
    "contact_email": "paujla@instock.com",
    "created_at": "2024-06-17T23:44:27.000Z",
    "updated_at": "2024-06-17T23:44:27.000Z"
  } ]

FRONT-END REQUIREMENTS:
	None


––How to create a new Warehouse:
POST
/warehouse

RESPONSE SAMPLE:
Returns new warehouse

FRONT-END REQUIREMENTS:

**Must include ID in URL
{
    "warehouse_name": "",
    "address": "",
    "city": "",
    "country": "",
    "contact_name": "",
    "contact_position": "",
    "contact_phone": "", ___ >> Must be a number 
    "contact_email": ""  ___>>  Must have an @ and a . 
}

––How to retrieve info of a single Warehouse:
GET
/warehouse/:id

RESPONSE SAMPLE: 
{
    "id": 1,
    "warehouse_name": "Manhattan",
    "address": "503 Broadway",
    "city": "New York",
    "country": "USA",
    "contact_name": "Parmin Aujla",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (646) 123-1234",
    "contact_email": "paujla@instock.com",
    "created_at": "2024-06-17T23:44:27.000Z",
    "updated_at": "2024-06-17T23:44:27.000Z"
  }

FRONT-END REQUIREMENTS:
**Must include ID in URL


––How to update the info of a single Warehouse:
PUT
/warehouse/:id

RESPONSE SAMPLE:
	Return updated warehouse

FRONT-END REQUIREMENTS:

**Must include ID in URL
{
    "warehouse_name": "",
    "address": "",
    "city": "",
    "country": "",
    "contact_name": "",
    "contact_position": "",
    "contact_phone": "",
    "contact_email": "" ___ >> MUST include an @ and a .
}

––How to delete a Warehouse & associated inventory: 
DELETE
/warehouse/:id

RESPONSE SAMPLE:
	None

FRONT-END REQUIREMENTS:
	**Must include ID in URL

––How to get the full inventory of a single Warehouse: 
GET
/warehouse/:id/inventories


RESPONSE SAMPLE:
[
{
    "id": 21,
    "item_name": "Television",
    "category": "Electronics",
    "status": "Out of Stock",
    "quantity": 0
  },
]

FRONT END REQUIREMENTS:
	**Must include id in URL

  ____Search in Warehouse
GET
/warehouse/search

RESPONSE 
  Returns words with letters in search bar



------------------------------------------------FOR INVENTORY:
 --All ids refer to the inventory id--


_____How to retrieve a list of all inventory (From all warehouses):
GET
/inventory

RESPONSE SAMPLE:
[ {
 "id": 1,
    "warehouse_id": 1,
    "warehouse_name": "Manhattan",
    "item_name": "Television",
    "description": "This 50\", 4K LED TV provides a clear picture and vivid colors.",
    "category": "Electronics",
    "status": "In Stock",
    "quantity": 500
} ]	

FRONT-END REQUIREMENTS:
	None


_____How to Create an Inventory Item
POST
/inventory

RESPONSE SAMPLE:
	Returns create Inventory Item
	

FRONT-END REQUIREMENTS:
* MUST PROVIDE ID IN URL
{
  "warehouse_id": ,___> MUST BE A NUMBER
  "item_name": "",
  "description": "",
  "category": "",
  "status": "",
  "quantity": ___> MUST BE A NUMBER 
}


_____How to retrieve a list of a single  inventory item:
GET
/inventory/:id

RESPONSE SAMPLE:
{
  "id": 3,
  "warehouse_id": 1,
  "warehouse_name": "Manhattan",
  "item_name": "Hoodie",
  "description": "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
  "category": "Apparel",
  "status": "Out of Stock",
  "quantity": 0
}

FRONT-END REQUIREMENTS:
**Must include ID in URL

_____How to edit an existing Inventory item
PUT
/Inventory/:id

RESPONSE SAMPLE:
	Returns Updated Inventory item

FRONT-END REQUIREMENTS:
* MUST PROVIDE ID IN URL
	{
  "warehouse_id": ,___> MUST BE A NUMBER
  "item_name": "",
  "description": "",
  "category": "",
  "status": "",
  "quantity": ___> MUST BE A NUMBER 
}


_____How to delete an existing Inventory item
DELETE
/inventory/:id

RESPONSE SAMPLE:
	No return
	
FRONT-END REQUIREMENTS:
**Must include ID 

____Search in Inventory 
GET
/inventory/search

RESPONSE 
  Returns words with letters in search bar
