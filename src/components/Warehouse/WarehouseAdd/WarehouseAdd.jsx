import "./WarehouseAdd.scss";
import icon from "../../../assets/icons/arrow_back-24px.svg";
function WarehouseAdd() {
  return (
    <div>
      <div className="warehouse-add">
        <form className="warehouse-container">
          <h1 className="heading">
            <img className="heading__image" src={icon} alt="" />
            Add New Warehouse
          </h1>
          <div className="warehouse-add__inputs">
            <div className="warehouse-add__warehouse-details">
              <h2 className="warehouse-header">Warehouse Details</h2>
              <div className="warehousename">
                <p className="warehouse__title">Warehouse Name</p>
                <input
                  name="warehouse_name"
                  className="city"
                  type="text"
                  placeholder="Warehouse Name"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Street Address</p>
                <input
                  name="address"
                  className="city"
                  type="text"
                  placeholder="Street Address"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">City</p>
                <input
                  name="city"
                  className="city"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Country</p>
                <input
                  name="Washington"
                  className="city"
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="warehouse-add__contact-details">
              <h2 className="warehouse-header">Contact Details</h2>

              <div className="warehousename">
                <p className="warehouse__title">Contact Name</p>
                <input
                  name="Washington"
                  className="city"
                  type="text"
                  placeholder="Contact Name"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Position</p>
                <input
                  name="Washington"
                  className="city"
                  type="text"
                  placeholder="Position"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Phone Number</p>
                <input
                  name="Washington"
                  className="city"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="warehousename">
                <p className="warehouse__title">Email</p>
                <input
                  name="Washington"
                  className="city"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="warehouse-add__button">
            <button className="warehouse-add__cancel">Cancel</button>
            <button className="warehouse-add__add">+ Add Warehouse</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default WarehouseAdd;
