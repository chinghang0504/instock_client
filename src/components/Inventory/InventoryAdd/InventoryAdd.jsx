import './InventoryAdd.scss';
import ArrowBack from "../../../assets/icons/arrow_back-24px.svg";
import {createInventory} from "../../../services/api.js";
import { useNavigate } from "react-router-dom";

// function postNewInventory() {
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); 

//     try {
//       await createInventory();
//       navigate('/inventory');
//     } catch (error) {
//       console.error('Failed to create inventory item:', error);
//     }
//   }
// };

function InventoryAdd() {
  return (
    <section className="inventory-add">
      <section className="inventory-add__container">
      <section className="inventory-add__heading-section">
          <img
            src={ArrowBack}
            alt="back Arrow sign"
            className="inventory-add__back-arrow"
          />
          <h1 className="inventory-add__heading">Add New Inventory Item</h1>
        </section>
        <section className="inventory-add__main-container">
        <div className="inventory-add__detail-container">
            <h2 className="inventory-add__detail-heading">Item Details</h2>
            <form className="inventory-add__form">
              <div className="inventory-add__item-name">
                <label htmlFor="title" className="inventory-add__label">
                  Item Name
                </label>
                <input
                  className="inventory-add__text"
                  type="text"
                  id="TV"
                  name="name"
                  placeholder=""
                  required
                />
              </div>

              <div className="inventory-add__description">
                <label htmlFor="title" className="inventory-add__label">
                  Description
                </label>
                <textarea
                  className="inventory-add__text-box"
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                  placeholder=""
                  required>
                  </textarea>
              </div>

              <div className="inventory-add__category">
                <label htmlFor="title" className="inventory-add__label">
                  Category
                </label>
            
                <select className="inventory-add__text" name="category" id="cat">
                  {/* {categories &&
                    categories.map((category) => {
                      return <option>{category.category}</option>;
                    })} */}
                </select>
              </div>
            </form>
          </div>

          <div className="inventory-add__availability-container">
            <h2 className="inventory-add__availability-heading">
              Item Availability
            </h2>

            <div className="inventory-add__status">
              <label htmlFor="title" className="inventory-add__label">
                Status
              </label>

              <div className="inventory-add__radio-section">
                <div className="inventory-add__radio-list">
                  <input
                    className="inventory-add__radio-item"
                    type="radio"
                    name="options"
                  />
                  In Stock
                </div>

                <div className="inventory-add__radio-list">
                  <input
                    className="inventory-add__radio-item"
                    type="radio"
                    name="options"
                  />
                  Out of Stock
                </div>
              </div>
            </div>

            <div className="inventory-add__quantity">
              <label htmlFor="title" className="inventory-add__label">
                Quantity
              </label>
              <input
                type="number"
                className="inventory-add__text"
              />

              {/* <select className="inventory-add__text"
              name="quantity" 
              id="quantity"
            >
               <option value=""></option>
            </select> */}
            </div>

            <div className="inventory-add__warehouse">
              <label htmlFor="title" className="inventory-add__label">
                Warehouse
              </label>
              <select
                className="inventory-add__text"
                name="warehouse_name"
                id="warehouse">
              </select>
            </div>
          </div>
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
            >
              + Add Item
            </button>
          </div>
      </section>
    </section>
  )
}

export default InventoryAdd
