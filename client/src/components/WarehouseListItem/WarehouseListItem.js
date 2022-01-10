import React from "react";
import "./WarehouseListItem.scss";
import chevronIcon from "../../assets/chevron_right-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import editIcon from "../../assets/edit-24px.svg";
import { Link } from "react-router-dom";

const WarehouseListItem = (props) => {
  const { id, name, address, contact_Name, phone, email, onClick } = props;
  return (
    <div>
      {
        <article className="warehouse">
          <div className="warehouse__container">
            <div className="warehouse__item-address">
              <div className="warehouse__wrapper">
                <div className="warehouse__name-wrapper">
                  <p className="warehouse__name warehouse__item">
                    <Link to={`warehouses/inventories/${id}`}>{name}</Link>
                  </p>
                  <img
                    className="warehouse__arrow"
                    src={chevronIcon}
                    alt="arrow icon"
                  />
                </div>
              </div>
              <p className="warehouse__address warehouse__item">{address}</p>
            </div>

            <div className="warehouse__contact_Name warehouse__item">
              {contact_Name}
            </div>

            <div className="warehouse__contact_Name-contact_Information">
              <p className="warehouse__contact_Information warehouse__item">
                {phone}
              </p>
              <p className="warehouse__contact_Information warehouse__item">
                {email}{" "}
              </p>
            </div>
            <div className="warehouse__icons warehouse__desktop">
              <img
                className="warehouse__icon"
                src={deleteIcon}
                alt="delete icon"
                onClick={() => onClick(id, name)}
              />
              <Link to={`edit-warehouse/${id}`}>
                <img className="warehouse__icon" src={editIcon} alt="edit icon" />
              </Link>
            </div>
          </div>
          <div className="warehouse__icons warehouse__mobile">
            <img
              className="warehouse__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={() => onClick(id, name)}
            />
            <Link to={`edit-warehouse/${id}`}>
              <img className="warehouse__icon" src={editIcon} alt="edit icon" />
            </Link>
          </div>
        </article>
      }
    </div>
  );
};

export default WarehouseListItem;
