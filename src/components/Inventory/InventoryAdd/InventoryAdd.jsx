
import { useState, useEffect } from "react";
import "./InventoryAdd.scss";
import ArrowBack from "../../../assets/icons/arrow_back-24px.svg";
import {
  createInventory,
  getWarehouseList,
  getInventoryList,
} from "../../../services/api.js";
import { useNavigate } from "react-router-dom";

function InventoryAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouseId: "",
  });
  const [warehouses, setWarehouses] = useState([]);
  const [errors, setErrors] = useState({});
  const categories = ["Accessories", "Apparel", "Clothing", "Electronics", "Food", "Furniture", "Gear", "Health"];
  const [submitError, setSubmitError] = useState("");


  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const warehouseList = await getWarehouseList();
        setWarehouses(warehouseList);
      }catch(error){
        console.error("Failed to fetch Warehouse List:", error);
      }
    };
    fetchWarehouse();
  },[]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.itemName) newErrors.itemName = "Item Name is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.warehouseId) newErrors.warehouseId = "Warehouse is required";
    if (
      formData.status === "In Stock" &&
      (!formData.quantity || isNaN(parseInt(formData.quantity)))
    ) {
      newErrors.quantity = "Quantity must be a valid number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      let {status, quantity} = formData;
      quantity = parseInt(quantity);

      if(status === "Out of Stock") {
        quantity = 0;
      }else if(quantity === 0) {
        status = "Out of Stock";
      }


      await createInventory({
        warehouse_id: formData.warehouseId,
        item_name: formData.itemName,
        description: formData.description,
        category: formData.category,
        status: formData.status,
        quantity: quantity,
      });

      navigate("/inventory");
    } catch (error) {
      console.error("Failed to create inventory item:", error);
      setSubmitError("Failed to create inventory item. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="inventory-add">
      <section className="inventory-add__container">
        <section className="inventory-add__heading-section">
          <img
            src={ArrowBack}
            alt="back Arrow sign"
            className="inventory-add__back-arrow"
            onClick={() => navigate("/inventory")}
          />
          <h1 className="inventory-add__heading">Add New Inventory Item</h1>
        </section>
        <form className="inventory-add__form" onSubmit={handleSubmit}>
          <section className="inventory-add__main-container">
            <div className="inventory-add__detail-container">
              <h2 className="inventory-add__detail-heading">Item Details</h2>

              <div className="inventory-add__item-name">
                <label htmlFor="itemName" className="inventory-add__label">
                  Item Name
                </label>
                <input
                  className="inventory-add__text"
                  type="text"
                  id="itemName"
                  name="itemName"
                  placeholder="Item Name"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
                {errors.itemName && <p className="inventory-add__error">{errors.itemName}</p>}
              </div>

              <div className="inventory-add__description">
                <label htmlFor="description" className="inventory-add__label">
                  Description
                </label>
                <textarea
                  className="inventory-add__text-box"
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                  placeholder="Please enter a brief item description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.description && (
                  <p className="inventory-add__error">{errors.description}</p>
                )}
              </div>

              <div className="inventory-add__category">
                <label htmlFor="category" className="inventory-add__label">
                  Category
                </label>
                <select
                  className="inventory-add__text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {errors.category && <p className="inventory-add__error">{errors.category}</p>}
              </div>
            </div>

            <section className="inventory-add__availability-container">
              <h2 className="inventory-add__availability-heading">
                Item Availability
              </h2>

              <div className="inventory-add__status">
                <label htmlFor="status" className="inventory-add__label">
                  Status
                </label>
                <div className="inventory-add__radio-section">
                  <label
                    className={`inventory-add__radio-list ${
                      formData.status === "In Stock" ? "checked" : ""
                    }`}
                  >
                    <input
                      className="inventory-add__radio-item"
                      type="radio"
                      name="status"
                      id="status-in-stock"
                      value="In Stock"
                      checked={formData.status === "In Stock"}
                      onChange={handleChange}
                    />
                    In Stock
                  </label>
                  <label
                    className={`inventory-add__radio-list ${
                      formData.status === "Out of Stock" ? "checked" : ""
                    }`}
                   >
                    <input
                      className="inventory-add__radio-item"
                      id="status-out-of-stock"
                      type="radio"
                      name="status"
                      value="Out of Stock"
                      checked={formData.status === "Out of Stock"}
                      onChange={handleChange}
                    />
                    Out of Stock
                  </label>
                </div>
              </div>

              {formData.status === "In Stock" && (
                <div className="inventory-add__quantity">
                  <label htmlFor="quantity" className="inventory-add__label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="inventory-add__text"
                    id="quantity"
                    name="quantity"
                    placeholder=""
                    defaultValue={formData.quantity}
                    onChange={handleChange}
                    required={formData.status === "In Stock"}
                  />
                  {errors.quantity && (
                    <p className="inventory-add__error">{errors.quantity}</p>
                  )}
                </div>
              )}

              <div className="inventory-add__warehouse">
                <label htmlFor="warehouseId" className="inventory-add__label">
                  Warehouse
                </label>
                <select
                  className="inventory-add__text"
                  id="warehouseId"
                  name="warehouseId"
                  value={formData.warehouseId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  ))}
                </select>
                {errors.warehouseId && (
                  <p className="inventory-add__error">{errors.warehouseId}</p>
                )}
              </div>
            </section>
          </section>
          <div className="inventory-add__button-section">
            <button
              type="button"
              className="inventory-add__button-cancel inventory-add--button"
              onClick={() => navigate("/inventory")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inventory-add__button-add-item inventory-add--button"
            >
              + Add Item
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default InventoryAdd;
