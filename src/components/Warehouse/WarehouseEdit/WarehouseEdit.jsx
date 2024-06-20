import "./WarehouseEdit.scss";
import icon from "../../../assets/icons/arrow_back-24px.svg";
function WarehouseEdit() {
  return (
    <div className="warehouse-edit">
      <div className="container">
        <h1 className="heading">
          <img className="heading__image" src={icon} alt="" />
          Edit Warehouse
        </h1>

        <h2 className="warehouse-header">Warehouse Details</h2>
        <form className="warehousename">
          <p className="warehouse__title">Warehouse Name</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="Washington"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">Street Address</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="33 Pearl Street SW"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">City</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="Washington"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">Country</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="USA"
          />
        </form>
        <h2 className="warehouse-header">Contact Details</h2>

        <form className="warehousename">
          <p className="warehouse__title">Contact Name</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="Graeme Lyon"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">Position</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="Warehouse Manager"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">Phone Number</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="+1 (647) 504-0911"
          />
        </form>
        <form className="warehousename">
          <p className="warehouse__title">Email</p>
          <input
            name="Washington"
            className="city"
            type="text"
            placeholder="glyon@instock.com"
          />
        </form>
        <div className="button">
          <button className="button__cancel">Cancel</button>
          <button className="button__save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseEdit;
