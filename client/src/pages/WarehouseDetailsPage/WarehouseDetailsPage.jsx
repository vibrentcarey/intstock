import React,{Component} from "react";
import TopBar from '../../components/TopBar';
import TopBarDetails from "../../components/TopBarDetails";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import CategoryBar from '../../components/CategoryBar';
import  axios  from 'axios';


class WarehouseDetailsPage extends Component {
  
  state = {
    inventories:[]
  }
  
  componentDidMount(){
    const id = '2922c286-16cd-4d43-ab98-c79f698aeab0'
    axios.get(`http://localhost:8080/warehouses/${id}/inventories`)
    .then(res => {
      console.log(res.data)
      this.setState({inventories: res.data})
    })  
  }
  
  render(){
    return (
      <>
        <CategoryBar categories={['inventory', 'category','status','quantity','actions']}/>
      
        <InventoryItem inventoryList = {this.state.inventories} />
      </>
    );
  };

  }
  
export default WarehouseDetailsPage;
