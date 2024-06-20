import "./WarehouseAdd.scss";
import icon from "../../../assets/icons/arrow_back-24px.svg";
function WarehouseAdd() {
  return (
    <div>
      <div className="warehouse-edit">
        <div className="container">
          <h1 className="heading">
            <img className="heading__image" src={icon} alt="" />
            Add New Warehouse
          </h1>

          <h2 className="warehouse-header">Warehouse Details</h2>
          <form className="warehousename">
            <p className="warehouse__title">Warehouse Name</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Warehouse Name"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">Street Address</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Street Address"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">City</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="City"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">Country</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Country"
            />
          </form>
          <h2 className="warehouse-header">Contact Details</h2>

          <form className="warehousename">
            <p className="warehouse__title">Contact Name</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Contact Name"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">Position</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Position"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">Phone Number</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Phone Number"
            />
          </form>
          <form className="warehousename">
            <p className="warehouse__title">Email</p>
            <input
              name="Washington"
              className="city"
              type="text"
              placeholder="Email"
            />
          </form>
          <div className="button">
            <button className="button__cancel">Cancel</button>
            <button className="button__save">+ Add Warehouse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WarehouseAdd;
