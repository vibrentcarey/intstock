import React,{Component} from "react";
import WareHouseInventoryList from "../../components/WareHouseInventoryList/WareHouseInventoryList";
import TopBar from '../../components/TopBar';
import TopBarDetails from "../../components/TopBarDetails";
import CategoryBar from '../../components/CategoryBar';
import { axios } from 'axios';


class WarehouseDetailsPage extends Component {
  // state = {
  //   inventories = []
  // }
  
  componentDidMount(){
  //   const inventories = axios.get('/warehouses/:wareHouseId/inventories');
  //   inventories
  //   .then(res)
   }
  
  render(){
    return (
      <>

        <CategoryBar categories={['inventory', 'category','status','quantity','actions']}/>
      
        <WareHouseInventoryList
          name='Television'
          category='Electronics'
          quantity = '500'
  
        />
      </>
    );
  };

  }
  
export default WarehouseDetailsPage;
