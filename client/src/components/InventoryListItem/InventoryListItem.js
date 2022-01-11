import React, { useState } from "react";
import "./InventoryListItem.scss";
import chevronIcon from "../../assets/chevron_right-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import editIcon from "../../assets/edit-24px.svg";
import Stock from "../stock/Stock";
import TopBarSearch from "../TopBarSearch";
import Modal from "../Modal";
import axios from "axios";
import { Link } from "react-router-dom";

const InventoryListItem = (props) => {
  // props passed from Inventory List Component
  const { id, name, category, status, quantity, warehouse } = props;
  // Please allow use of hooks too late to refactor entire component to class :)
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const deleteInventoryItem = () => {
    axios
      .delete(`http://localhost:8080/inventory/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      handleModalClose()
  };
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
      {showModal && (
        <Modal
          title={`Delete ${name} inventory item?`}
          message={`Please confirm that you want to delete ${name}. You won't be able to undo this action.`}
          onClose={handleModalClose}
          onDelete={deleteInventoryItem}
        />
      )}
      <article className="inventory">
        <div className="inventory__container">
          <div className="inventory__item-category">
            <div className="inventory__wrapper">
              <p className="inventory__label">NAME</p>
              <div className="inventory__name-wrapper">
                <p className="inventory__name inventory__item">{name}</p>
                <img
                  className="inventory__arrow"
                  src={chevronIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
            <p className="inventory__label">CATEGORY</p>
            <p className="inventory__category inventory__item">{category}</p>
          </div>

          <div className="inventory__status-quantity">
            <div>
              <p className="inventory__label">STATUS</p>
              <p className="inventory__status inventory__item">{inStock()}</p>
            </div>
            <div>
              <p className="inventory__label">QUANTITY</p>
              <p className="inventory__quantity inventory__item">{quantity}</p>
            </div>
            <div></div>
            <p className="inventory__label">WAREHOUSE</p>
            <p className="inventory__warehouse inventory__item">{warehouse}</p>
          </div>
          <div className="inventory__icons inventory__desktop">
            <img
              className="inventory__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={handleModalOpen}
            />
            <Link to={`edit-inventory-item/${id}`}>
              <img className="inventory__icon" src={editIcon} alt="edit icon" />
            </Link>
          </div>
        </div>
        <div className="inventory__icons inventory__mobile">
          <img
            className="inventory__icon"
            src={deleteIcon}
            alt="delete icon"
            onClick={handleModalOpen}
          />
          <Link to={`edit-inventory-item/${id}`}>
            <img className="inventory__icon" src={editIcon} alt="edit icon" />
          </Link>
        </div>
      </article>
    </>
  );
};

export default InventoryListItem;
