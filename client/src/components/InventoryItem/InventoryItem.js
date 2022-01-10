import React, { useState } from "react";
import "./InventoryItem.scss";
import chevronIcon from "../../assets/chevron_right-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import editIcon from "../../assets/edit-24px.svg";
import Stock from "../stock/Stock";
import axios from "axios";
import Modal from "../Modal";

const InventoryItem = (props) => {
  // props passed from Inventory Component
  const { id, name, category, status, quantity, warehouse } = props;

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true)
  }
  const handleModalClose = () => {
    setShowModal(false)
  }
  const deleteInventoryItem = () => {
    axios.delete(`http://localhost:8080/inventories/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
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
     {showModal && <Modal title={`Delete ${name} inventory item?`} message={`Please confirm that you want to delete ${name}. You won't be able to undo this action.`} onClose={handleModalClose} onDelete={deleteInventoryItem}/>}
      <article className="inventory">
        <div className="inventory__mobile-container">
          <div className="inventory__category-wrapper">
            <div className="inventory__category-container">
              <p className="inventory__categories">inventory item</p>
              <div className="inventory__name-wrapper">
                <p className="inventory__name inventory__item">{name}</p>
                <img
                  className="inventory__arrow"
                  src={chevronIcon}
                  alt="arrow icon"
                />
              </div>
            </div>

            <div className="inventory__category-container">
              <p className="inventory__categories">categories</p>
              <p className="inventory__category inventory__item">{category}</p>
            </div>
          </div>

          <div className="inventory__status-container">
            <div className="inventory__category-container">
              <p className="inventory__categories">status</p>
              <div className="inventory__status inventory__item">
                {inStock()}
              </div>
            </div>

            <div>
              <p className="inventory__categories">qty</p>
              <p className="inventory__quantity inventory__item">{quantity}</p>
            </div>
          </div>

          <div className="inventory__icons inventory__mobile">
            <img
              className="inventory__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={handleModalOpen}
            />
            <img className="inventory__icon" src={editIcon} alt="edit icon" />
          </div>
        </div>

        <div className="inventory__icons inventory__desktop">
          <img className="inventory__icon" src={deleteIcon} alt="delete icon" onClick={handleModalOpen}/>
          <img className="inventory__icon" src={editIcon} alt="edit icon" />
        </div>
      </article>
    </>
  );
};

export default InventoryItem;
