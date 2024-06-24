import "./WarehouseEdit.scss";
import icon from "../../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editWarehouse as editWarehouseApi, getWarehouseData } from "../../../services/api";

function WarehouseEdit() {
  const [warehouse, setWarehouse] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getWarehouse() {
      try {
        const warehouseData = await getWarehouseData(id);
        setWarehouse(warehouseData);
      } catch (error) {
        console.log("add warehouse error: ", error.message);
      }
    }
    getWarehouse();
  }, []);

  async function handleEditWarehouse(event) {
    try {
      event.preventDefault();
      console.log("submitted form");

      const editWarehouse = {
        warehouse_name: event.target.warehouse_name.value,
        address: event.target.address.value,
        city: event.target.city.value,
        country: event.target.country.value,
        contact_name: event.target.contact_name.value,
        contact_position: event.target.contact_position.value,
        contact_phone: event.target.contact_phone.value,
        contact_email: event.target.contact_email.value,
      };

      console.log(editWarehouse);

      await editWarehouseApi(id, editWarehouse);
      navigate("/warehouse");
    } catch (error) {
      console.log("add warehouse error: ", error.message);
    }
  }

  function backToWarehouse() {
    navigate("/warehouse");
  }

  return (
    <div className="warehouse-edit">
      <div className="edit-container">
        <div className="heading-container">
          <img
            className="heading__image"
            src={icon}
            alt=""
            onClick={backToWarehouse}
          />
          <h1 className="edit-heading">Edit Warehouse</h1>
        </div>
        <form onSubmit={handleEditWarehouse} className="container">
          <div className="main-container">
            <div className="warehouse-detail">
              <h2 className="warehouse-heading">Warehouse Details</h2>
              <div className="warehousename">
                <p className="warehouse__title">Warehouse Name</p>
                <input
                  defaultValue={warehouse.warehouse_name}
                  name="warehouse_name"
                  className="city"
                  type="text"
                  placeholder="Washington"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Street Address</p>
                <input
                  defaultValue={warehouse.address}
                  name="address"
                  className="city"
                  type="text"
                  placeholder="33 Pearl Street SW"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">City</p>
                <input
                  defaultValue={warehouse.city}
                  name="city"
                  className="city"
                  type="text"
                  placeholder="Washington"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Country</p>
                <input
                  defaultValue={warehouse.country}
                  name="country"
                  className="city"
                  type="text"
                  placeholder="USA"
                />
              </div>
            </div>

            <div className="contact-detail">
              <h2 className="warehouse-heading">Contact Details</h2>

              <div className="warehousename">
                <p className="warehouse__title">Contact Name</p>
                <input
                  defaultValue={warehouse.contact_name}
                  name="contact_name"
                  className="city"
                  type="text"
                  placeholder="Graeme Lyon"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Position</p>
                <input
                  defaultValue={warehouse.contact_position}
                  name="contact_position"
                  className="city"
                  type="text"
                  placeholder="Warehouse Manager"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Phone Number</p>
                <input
                  defaultValue={warehouse.contact_phone}
                  name="contact_phone"
                  className="city"
                  type="text"
                  placeholder="+1 (647) 504-0911"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Email</p>
                <input
                  defaultValue={warehouse.contact_email}
                  name="contact_email"
                  className="city"
                  type="text"
                  placeholder="glyon@instock.com"
                />
              </div>
            </div>
          </div>
          <div className="button">
              <button className="button__cancel-btn" onClick={backToWarehouse}>
                Cancel
              </button>
              <button className="button__save-btn">Save</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default WarehouseEdit;
