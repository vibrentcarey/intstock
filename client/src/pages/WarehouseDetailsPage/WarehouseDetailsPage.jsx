import React,{Component} from "react";
import TopBar from '../../components/TopBar';
import { withRouter } from "react-router-dom";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import TopBarDetails from "../../components/TopBarDetails";
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
      console.log(res.data)
      this.setState({inventories: res.data})
    }) 
    .catch(err => {
      return err;
    }) 
  }

  // initial inventory list fetch
  componentDidMount(){
    // Please check router props!!!!
    let warehouseId = this.props.match.params.warehouseId
    console.log(warehouseId);
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
