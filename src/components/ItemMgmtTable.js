import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopulatedTable from '../components/PopulatedTable';
import paged from '../components/Pagination';
import { getItemDocuments } from '../actions/itemActions';


const styles = {
  category: {
    whiteSpace: 'no-wrap',
  },
  description: {
    whiteSpace: 'no-wrap',
  },
  uprice: {
    textAlign: 'center',
  },
};


const columns = () => {
  return [
    {
      header: 'Category',
      cell: row => <div>{row.category}</div>,
      style: styles.category,
    },
    {
      header: 'Description',
      cell: row => <div>{row.description}</div>,
      style: styles.description,
    },
    {
      header: 'U Price',
      cell: row => <div>{row.unitPrice}</div>,
      style: styles.uprice,
    },

  ];
};

const Table = paged(PopulatedTable);
 
function ItemMgmtTable( {pageSize, history})  {

  const dispatch = useDispatch();

  const { loading, error, itemDetail } = useSelector((state) => state.getItemDetails);

  const { userAuth } = useSelector((state) => state.userLogin);

console.log('inside ItemMgmtTable, error is: ', error);
  // Fetching user details
  useEffect(() => {

    if (!userAuth) {
      console.log('Inside if');
      history.push('/login')
    } else {
      console.log('Inside else');
      dispatch(getItemDocuments(userAuth))
    }

  }, [dispatch, history, userAuth])

  return (
    <div>
      <Table
        pageSize={pageSize}
        columns={columns()}
        loading={loading}
        dataSelector={itemDetail.data}
        items={itemDetail.data.length}
      />
    </div>
  );

}

export default ItemMgmtTable;