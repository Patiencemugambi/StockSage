# StockSage: Empowering Efficient Inventory Management

## Project Description
StockSage is a web-based application developed to address the challenges businesses face in managing and accurately documenting their inventory or stock quantities. It provides a comprehensive solution for businesses to easily track, record, and manage their stock levels and inventory.

## Features
- User Registration and Authentication: Implement a secure user registration and authentication system to ensure authorized access to StockSage.
- Stock Item Management: Enable businesses to add, edit, and delete stock items. The system allows for storing details such as name, description, quantity, and category of each stock item.
- Stock Quantity Tracking: Allow users to update and track stock quantities in real-time, providing an accurate overview of available inventory.
- Stock Alerts and Notifications: Implement notifications or alerts to notify users when stock levels reach predefined thresholds or when certain items need attention, such as low stock.

## License
This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## Author's Info
- LinkedIn: [Patience Mugambi](https://www.linkedin.com/feed/)

## JSON Server
This project utilizes a JSON server hosted at `https://fake-server-jhcl.onrender.com/` to simulate an API for managing stock items. The JSON server provides endpoints for retrieving, creating, updating, and deleting stock items.

### Available Endpoints
- `GET /stockitems`: Retrieves a list of all stock items.
- `GET /stockitems/{id}`: Retrieves the details of a specific stock item with the given `id`.
- `POST /stockitems`: Creates a new stock item.
- `PUT /stockitems/{id}`: Updates the details of a specific stock item with the given `id`.
- `DELETE /stockitems/{id}`: Deletes the stock item with the given `id`.

Please refer to the [JSON server documentation](https://github.com/typicode/json-server) for more information on how to interact with the API.

### Example Requests
Here are some example requests using the JSON server:

```bash
# Retrieve all stock items
GET https://fake-server-jhcl.onrender.com/stockitems

# Retrieve a specific stock item with id 1
GET https://fake-server-jhcl.onrender.com/stockitems/1

# Create a new stock item
POST https://fake-server-jhcl.onrender.com/stockitems
Body:
{
  "name": "New Item",
  "description": "This is a new stock item",
  "quantity": 10,
  "category": "Electronics"
}

# Update the details of stock item with id 2
PUT https://fake-server-jhcl.onrender.com/stockitems/2
Body:
{
  "name": "Updated Item",
  "description": "This is an updated stock item",
  "quantity": 5,
  "category": "Books"
}

# Delete the stock item with id 3
DELETE https://fake-server-jhcl.onrender.com/stockitems/3
