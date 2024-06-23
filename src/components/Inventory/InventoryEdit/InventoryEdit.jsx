import "./InventoryEdit.scss";
import React, { useState, useEffect } from "react";
import ArrowBack from "../../../assets/icons/arrow_back-24px.svg";
import {
  getInventoryEdit,
  createInventory,
  getWarehouseList,
  getInventoryList,
} from "../../../services/api.js";
import { useNavigate, useParams } from "react-router-dom";

function InventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [itemData, setItemData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "Out of Stock",
    quantity: 0,
    warehouse_id: "",
  });

  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const inventoryItem = await getInventoryEdit(id);
        setItemData(inventoryItem);
      } catch (error) {
        console.log("Error fetching inventory item data:", error);
      }
    };

    const fetchWarehousesAndCategories = async () => {
      try {
        const warehouseList = await getWarehouseList();
        setWarehouses(warehouseList);

        const categoryList = await getInventoryList();
        const uniqueCategories = Array.from(
          new Set(categoryList.map((category) => category.category))
        ).map((category) => {
          return categoryList.find((c) => c.category === category);
        });
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("Error fetching warehouses and categories:", error);
      }
    };

    fetchInventoryData();
    fetchWarehousesAndCategories();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (!itemData.item_name) newErrors.item_name = "Item Name is required";
    if (!itemData.description) newErrors.description = "Description is required";
    if (!itemData.category) newErrors.category = "Category is required";
    if (!itemData.warehouse_id) newErrors.warehouse_id = "Warehouse is required";
    if (itemData.status === "In Stock" && (!itemData.quantity || isNaN(parseInt(itemData.quantity)))) {
      newErrors.quantity = "Quantity must be a valid number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const quantity = itemData.status === "In Stock" ? parseInt(itemData.quantity) : 0;

      const updatedItemData = {
        ...itemData,
        id: id,  
        quantity: quantity,
      };


      const response = await createInventory(updatedItemData);

      navigate("/inventory");
    } catch (error) {
      console.error("Failed to update inventory item:", error);
      setSubmitError("Failed to update inventory item. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemData({ ...itemData, [name]: value });
  };

  return (
    <section className="inventory-edit">
      <section className="inventory-edit__container">
        <section className="inventory-edit__heading-section">
          <img
            src={ArrowBack}
            alt="back Arrow sign"
            className="inventory-edit__back-arrow"
            onClick={() => navigate("/inventory")}
          />
          <h1 className="inventory-edit__heading">Edit Inventory Item</h1>
        </section>

        <form className="inventory-edit__form" onSubmit={handleSubmit}>
          <section className="inventory-edit__main-container">
            <div className="inventory-edit__detail-container">
              <h2 className="inventory-edit__detail-heading">Item Details</h2>
              <div className="inventory-edit__item-name">
                <label htmlFor="item_name" className="inventory-edit__label">
                  Item Name
                </label>
                <input
                  className="inventory-edit__text"
                  type="text"
                  id="item_name"
                  name="item_name"
                  value={itemData.item_name}
                  onChange={handleChange}
                  required
                />
                {errors.item_name && (
                  <p className="inventory-edit__error">{errors.item_name}</p>
                )}
              </div>

              <div className="inventory-edit__description">
                <label htmlFor="description" className="inventory-edit__label">
                  Description
                </label>
                <textarea
                  className="inventory-edit__text-box"
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                  placeholder=""
                  value={itemData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.description && (
                  <p className="inventory-edit__error">{errors.description}</p>
                )}
              </div>

              <div className="inventory-edit__category">
                <label htmlFor="category" className="inventory-edit__label">
                  Category
                </label>
                <select
                  className="inventory-edit__text"
                  name="category"
                  id="category"
                  value={itemData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="inventory-edit__error">{errors.category}</p>}
              </div>
            </div>

            <div className="inventory-edit__availability-container">
              <h2 className="inventory-edit__availability-heading">
                Item Availability
              </h2>

              <div className="inventory-edit__status">
                <label htmlFor="status" className="inventory-edit__label">
                  Status
                </label>
                <div className="inventory-edit__radio-section">
                  <label className="inventory-edit__radio-list">
                    <input
                      className="inventory-edit__radio-item"
                      type="radio"
                      name="status"
                      value="In Stock"
                      checked={itemData.status === "In Stock"}
                      onChange={handleChange}
                    />
                    In Stock
                  </label>
                  <label className="inventory-edit__radio-list">
                    <input
                      className="inventory-edit__radio-item"
                      type="radio"
                      name="status"
                      value="Out of Stock"
                      checked={itemData.status === "Out of Stock"}
                      onChange={handleChange}
                    />
                    Out of Stock
                  </label>
                </div>
              </div>

              {itemData.status === "In Stock" && (
                <div className="inventory-edit__quantity">
                  <label htmlFor="quantity" className="inventory-edit__label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="inventory-edit__text"
                    id="quantity"
                    name="quantity"
                    value={itemData.quantity}
                    onChange={handleChange}
                    required={itemData.status === "In Stock"}
                  />
                  {errors.quantity && (
                    <p className="inventory-edit__error">{errors.quantity}</p>
                  )}
                </div>
              )}

              <div className="inventory-edit__warehouse">
                <label htmlFor="warehouse_id" className="inventory-edit__label">
                  Warehouse
                </label>
                <select
                  className="inventory-edit__text"
                  name="warehouse_id"
                  id="warehouse_id"
                  value={itemData.warehouse_id}
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
                {errors.warehouse_id && (
                  <p className="inventory-edit__error">{errors.warehouse_id}</p>
                )}
              </div>
            </div>
          </section>
          <div className="inventory-edit__button-section">
            <button
              type="button"
              className="inventory-edit__button-cancel inventory-edit--button"
              onClick={() => navigate("/inventory")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inventory-edit__button-save inventory-edit--button"
            >
              Save
            </button>
          </div>
          {submitError && <p className="inventory-edit__error">{submitError}</p>}
        </form>
      </section>
    </section>
  );
}

export default InventoryEdit;
