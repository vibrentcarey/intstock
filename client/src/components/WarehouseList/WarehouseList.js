import React from "react";
import "./WarehouseList.scss";
import chevronIcon from "../../assets/chevron_right-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import editIcon from "../../assets/edit-24px.svg";
import { Link } from "react-router-dom";

const WarehouseList = (props) => {
  return (
    <div>
      {props.warehouseList.map((warehouseList) => {
        return (
          <ul key={warehouseList.id}>
            <Link to={`warehouse-details/${warehouseList.id}`}>
              {warehouseList.name}
            </Link>
            <li>{warehouseList.address}</li>
            <li>{warehouseList.contact.name}</li>
            <li>{warehouseList.contact.phone}</li>
            <li>{warehouseList.contact.email}</li>
          </ul>
        );
      })}
    </div>
  );
  //   const { name, address, contact_Name, phone, email } = props.war
  //   return (
  //     <>
  //       <article className="warehouse">
  //         <div className="warehouse__container">
  //           <div className="warehouse__item-category">
  //             <div className="warehouse__wrapper">
  //               <div className="warehouse__name-wrapper">
  //                 <p className="warehouse__name warehouse__item">{name}</p>
  //                 <img
  //                   className="warehouse__arrow"
  //                   src={chevronIcon}
  //                   alt="arrow icon"
  //                 />
  //               </div>
  //             </div>
  //             <p className="warehouse__address warehouse__item">{address}</p>
  //           </div>
  //           <div className="warehouse__contact_Name"> {contact_Name}</div>

  //           <div className="warehouse__contact_Info">
  //             {/* <p className="warehouse__status warehouse__item">Status</p> */}
  //             <p className="warehouse__contact_Info warehouse__item">{phone}</p>
  //             <p className="warehouse__contact_Info warehouse__item">{email}</p>
  //           </div>
  //           <div className="warehouse__icons warehouse__desktop">
  //             <img
  //               className="warehouse__icon"
  //               src={deleteIcon}
  //               alt="delete icon"
  //             />
  //             <img className="warehouse__icon" src={editIcon} alt="edit icon" />
  //           </div>
  //         </div>
  //         <div className="warehouse__icons warehouse__mobile">
  //           <img className="warehouse__icon" src={deleteIcon} alt="delete icon" />
  //           <img className="warehouse__icon" src={editIcon} alt="edit icon" />
  //         </div>
  //       </article>
  //     </>
  //   );
};

export default WarehouseList;
