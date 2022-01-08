import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Warehouse Details Page
const WarehouseDetailsPage = (props) => {
  const [details, setDetail] = useState({});
  console.log(details);
  const { warehouseId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        setDetail(response.data);
      })
      .catch();
  });
  return <h1>Warehouse Details Page</h1>;
};

export default WarehouseDetailsPage;
