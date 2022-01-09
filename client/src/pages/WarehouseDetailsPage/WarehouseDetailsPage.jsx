import React,{Component} from "react";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import CategoryBar from '../../components/CategoryBar';
import  axios  from 'axios';


class WarehouseDetailsPage extends Component {
  
  state = {
    inventories:[]
  }

  // pass warehouse id to endpoint url
  fetchInventories = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouses/${warehouseId}/inventories`)
    .then(res => {
      this.setState({inventories: res.data})
    }) 
    .catch(err => {
      return err;
    }) 
  }

  // initial inventory list fetch
  componentDidMount(){
    let warehouseId = this.props.match.params.warehouseId
    this.fetchInventories(warehouseId)
  }
  

  render(){
    return (
      <>
        <CategoryBar categories={['inventory', 'category','status','quantity','actions']}/>
      
        <WarehouseInventory inventoryList = {this.state.inventories} />
      </>
    );
  };
  }
  
export default WarehouseDetailsPage;
