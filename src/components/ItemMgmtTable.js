import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
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

const defaultData = { data: [] };

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

  const { loading, error, itemDetail = defaultData } = useSelector((state) => state.getItemDetails);

  const { userAuth } = useSelector((state) => state.userLogin);

  // Fetching user details
  useEffect(() => {

    if (!userAuth) {
      history.push('/')
    } else {
      dispatch(getItemDocuments(userAuth))
    }

  }, [dispatch, history, userAuth]);

  return (

    <div>
      {error && <Message variant='danger'>{error}</Message>}
      {loading ?
        (
          <Loader />
        ) : 
        (
          <Table
            pageSize={pageSize}
            columns={columns()}
            loading={loading}
            dataSelector={itemDetail.data}
            items={itemDetail.data.length}
          />
        )
      }
    </div>
    
  );

}

export default ItemMgmtTable;