import React from "react";
import "./InventoryList.scss";
import chevronIcon from "../../assets/chevron_right-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import editIcon from "../../assets/edit-24px.svg";
import Stock from "../stock/Stock";
import TopBarSearch from "../../components/TopBarSearch";

const InventoryList = (props) => {
  // props passed from warehouseInventory Component

  const { name, category, quantity, warehouse } = props;

  // check if item is in stock
  const inStock = () => {
    if (quantity === 0) {
      return <Stock instock={false} />;
    } else {
      return <Stock instock={true} />;
    }
  };
  return (
    <>
      <TopBarSearch title={"Inventory"} />
      <article className="inventory">
        <div className="inventory__container">
          <div className="inventory__item-category">
            <div className="inventory__wrapper">
              <div className="inventory__name-wrapper">
                <p className="inventory__name inventory__item">{name}</p>
                <img
                  className="inventory__arrow"
                  src={chevronIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
            <p className="inventory__category inventory__item">{category}</p>
          </div>

          <div className="inventory__status-quantity">
            <p className="inventory__status inventory__item">{inStock()}</p>
            <p className="inventory__quantity inventory__item">{quantity}</p>
            <p className="inventory__warehouse inventory__item">{warehouse}</p>
          </div>
          <div className="inventory__icons inventory__desktop">
            <img
              className="inventory__icon"
              src={deleteIcon}
              alt="delete icon"
            />
            <img className="inventory__icon" src={editIcon} alt="edit icon" />
          </div>
        </div>
        <div className="inventory__icons inventory__mobile">
          <img className="inventory__icon" src={deleteIcon} alt="delete icon" />
          <img className="inventory__icon" src={editIcon} alt="edit icon" />
        </div>
      </article>
    </>
  );
};

export default InventoryList;
