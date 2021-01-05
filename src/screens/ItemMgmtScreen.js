import React from 'react';
import ItemMgmtTable from '../components/ItemMgmtTable';


function ItemMgmtScreen({ history }) {

  return(
    <div>
      <h1>Item Management Component</h1>
      <ItemMgmtTable pageSize={8} history={history}/>
    </div>
  );

}

export default ItemMgmtScreen