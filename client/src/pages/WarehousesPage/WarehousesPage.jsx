import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Warehouses Page
const WarehousesPage = (props) => {
  const [list, setList] = useState([]);
  // const [detail, setDetail] = useState({});
  console.log(list);
  useEffect(() => {
    axios
      .get("http://localhost:8080/warehouses")
      .then((result) => {
        setList(result.data);
      })
      .catch();
  }, []);

  // const loadData = () => {
  //   axios
  //     .get("http://localhost:8080/warehouses")
  //     .then((result) => {
  //       setList(result.data);
  //     })
  //     .catch();
  // };

  // const details = (id) => {
  //   console.log(id);
  //   axios
  //     .get(`http://localhost:8080/warehouses/${id}`)
  //     .then((response) => {
  //       setDetail(response.data);
  //     })
  //     .catch();
  // };

  return (
    <div>
      <h1>Warehouses Page</h1>
      {/* <button onClick={loadData}>Click</button> */}
      {list.map((item) => (
        <ul key={item.id}>
          {/* <li onClick={() => details(item.id)}> {item.name}</li> */}
          <Link to={`warehouse-details/${item.id}`}>{item.name} </Link>

          <li> {item.address}</li>
          <li> {item.contact}</li>
        </ul>
      ))}
    </div>
  );
};

export default WarehousesPage;
