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
    let warehouseId = '2922c286-16cd-4d43-ab98-c79f698aeab0'
    this.fetchInventories(warehouseId)
  }
  

  render(){
    console.log(this.props)
    return (
      <>
        <CategoryBar categories={['inventory', 'category','status','quantity','actions']}/>
      
        <WarehouseInventory inventoryList = {this.state.inventories} />
      </>
    );
  };
  }
  
export default withRouter(WarehouseDetailsPage);
