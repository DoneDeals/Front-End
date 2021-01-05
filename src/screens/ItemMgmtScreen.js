import React from 'react';
import ItemMgmtTable from '../components/ItemMgmtTable';
import { Button } from 'react-bootstrap';
import AddItemsScreen from './AddItemsScreen';


class ItemMgmtScreen extends React.Component {

  render() {
    return(
      <div>
        <h1>Item Management Component</h1>
      
        <AddItemsScreen/>

        <ItemMgmtTable pageSize={3} loading={true} history/>

      </div>

    )
  }

}

export default ItemMgmtScreen