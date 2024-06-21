import  { useState } from 'react';
import './InventoryAdd.scss';
import ArrowBack from "../../../assets/icons/arrow_back-24px.svg";
import { createInventory } from "../../../services/api.js";
import { useNavigate } from "react-router-dom";

function InventoryAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: ""
  });

  const handleSubmit = async () => {
    try {
      const quantity = parseInt(formData.quantity);
      if (isNaN(quantity)) {
        throw new Error('Quantity must be a number');
      }

      await createInventory({
        item_name: formData.itemName,
        description: formData.description,
        category: formData.category,
        status: formData.status,
        quantity: quantity
      });

      navigate('/inventory');
    } catch (error) {
      console.error('Failed to create inventory item:', error);
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
          <img src={ArrowBack} alt="back Arrow sign" className="inventory-add__back-arrow" />
          <h1 className="inventory-add__heading">Add New Inventory Item</h1>
        </section>
        <section className="inventory-add__main-container">
          <div className="inventory-add__detail-container">
            <h2 className="inventory-add__detail-heading">Item Details</h2>
            <form className="inventory-add__form">
              <div className="inventory-add__item-name">
                <label htmlFor="itemName" className="inventory-add__label">Item Name</label>
                <input
                  className="inventory-add__text"
                  type="text"
                  id="itemName"
                  name="itemName"
                  placeholder=""
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inventory-add__description">
                <label htmlFor="description" className="inventory-add__label">Description</label>
                <textarea
                  className="inventory-add__text-box"
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                  placeholder=""
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="inventory-add__category">
                <label htmlFor="category" className="inventory-add__label">Category</label>
                <input
                  className="inventory-add__text"
                  type="text"
                  id="category"
                  name="category"
                  placeholder=""
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </div>

          <section className="inventory-add__availability-container">
            <h2 className="inventory-add__availability-heading">Item Availability</h2>
            <div className="inventory-add__status">
              <label htmlFor="status" className="inventory-add__label">Status</label>
              <input
                className="inventory-add__text"
                type="text"
                id="status"
                name="status"
                placeholder=""
                value={formData.status}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inventory-add__quantity">
              <label htmlFor="quantity" className="inventory-add__label">Quantity</label>
              <input
                type="text"
                className="inventory-add__text"
                id="quantity"
                name="quantity"
                placeholder=""
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div className="inventory-add__warehouse">
              <label htmlFor="warehouse" className="inventory-add__label">Warehouse</label>
              <select
                className="inventory-add__text"
                name="warehouse_name"
                id="warehouse"
              ></select>
            </div> */}
          </section>
        </section>
      </section>

      <div className="inventory-add__button-section">
        <button
          type="submit"
          className="inventory-add__button-cancel inventory-add--button"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inventory-add__button-add-item inventory-add--button"
          onClick={handleSubmit}
        >
          + Add Item
        </button>
      </div>
    </section>
  );
}

export default InventoryAdd;
