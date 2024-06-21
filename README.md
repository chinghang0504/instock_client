# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# API DOCUMENTATION 

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
