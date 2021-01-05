import React from 'react';
import ItemMgmtTable from '../components/ItemMgmtTable';


function ItemMgmtScreen() {

  return(
    <div>
      <h1>Item Management Component</h1>
      <ItemMgmtTable pageSize={3} loading={true} history/>
    </div>
  );

}

export default ItemMgmtScreen