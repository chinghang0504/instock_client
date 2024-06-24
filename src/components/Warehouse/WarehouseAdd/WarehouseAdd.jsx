import "./WarehouseAdd.scss";
import icon from "../../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import { createWarehouse } from "../../../services/api";

function WarehouseAdd() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    console.log("form: ", event.target.warehouse_name.value);
    // 1. finish createing newWarehouse object with form input data ---- DONE
    const newWarehouse = {
      warehouse_name: event.target.warehouse_name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contact_name.value,
      contact_position: event.target.contact_position.value,
      contact_phone: event.target.contact_phone.value,
      contact_email: event.target.contact_email.value,
    };

    // 2. console.log(newWarehouse) to make sure it is working -- DONE
    async function addWarehouse() {
      try {
        console.log(newWarehouse);
        await createWarehouse(newWarehouse);
        navigate("/warehouse");
      } catch (error) {
        console.log("add warehouse error: ", error.message);
      }
    }
    addWarehouse();

    // 3. Send a axios.post(url, ) request to the backend -- DONE

    // 4. navigate to the warehouses list -- DONE
  }

  function backToWarehouse() {
    navigate("/warehouse");
  }

  return (
    <div>
      <div className="warehouse-add">
        <div className="warehouse-add__container">
          <div className="warehouse-add__heading-container">
            
              <img
                className="warehouse-add__heading-image"
                src={icon}
                alt="Back to warehouse list"
                onClick={backToWarehouse}
              />
              <h1 className="warehouse-add__heading">
              Add New Warehouse
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="warehouse-container">
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
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">Street Address</p>
                  <input
                    name="address"
                    className="city"
                    type="text"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">City</p>
                  <input
                    name="city"
                    className="city"
                    type="text"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">Country</p>
                  <input
                    name="country"
                    className="city"
                    type="text"
                    placeholder="Country"
                    required
                  />
                </div>
              </div>
              <div className="warehouse-add__contact-details">
                <h2 className="warehouse-header">Contact Details</h2>

                <div className="warehousename">
                  <p className="warehouse__title">Contact Name</p>
                  <input
                    name="contact_name"
                    className="city"
                    type="text"
                    placeholder="Contact Name"
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">Position</p>
                  <input
                    name="contact_position"
                    className="city"
                    type="text"
                    placeholder="Position"
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">Phone Number</p>
                  <input
                    name="contact_phone"
                    className="city"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="warehousename">
                  <p className="warehouse__title">Email</p>
                  <input
                    name="contact_email"
                    className="city"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="warehouse-add__button">
              <button
                className="warehouse-add__cancel"
                onClick={backToWarehouse}
              >
                Cancel
              </button>
              <button className="warehouse-add__add">+ Add Warehouse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default WarehouseAdd;
