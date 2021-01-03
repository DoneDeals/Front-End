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

const dummyData = [
  {
    category: 'Clothes',
    description: 'Polo T-shirt',
    uprice: 12.3
  },
  {
    category: 'Toys',
    description: 'Lego brick',
    uprice: 45.6
  },
  {
    category: 'Electronics',
    description: 'Skull headphone',
    uprice: 78.9
  },
  {
    category: 'Clothes',
    description: 'Polo T-shirt',
    uprice: 12.3
  },
  {
    category: 'Toys',
    description: 'Lego brick',
    uprice: 45.6
  },
  {
    category: 'Electronics',
    description: 'Skull headphone',
    uprice: 78.9
  },
  {
    category: 'Clothes',
    description: 'Polo T-shirt',
    uprice: 12.3
  },
  {
    category: 'Toys',
    description: 'Lego brick',
    uprice: 45.6
  },
  {
    category: 'Electronics',
    description: 'Skull headphone',
    uprice: 78.9
  },
  {
    category: 'Clothes',
    description: 'Polo T-shirt',
    uprice: 12.3
  },
  {
    category: 'Toys',
    description: 'Lego brick',
    uprice: 45.6
  },
  {
    category: 'Electronics',
    description: 'Skull headphone',
    uprice: 78.9
  },
];

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
      cell: row => <div>{row.uprice}</div>,
      style: styles.uprice,
    },

  ];
};

const Table = paged(PopulatedTable);

// const ItemMgmtTable = ({
//   pageSize,
//   loading,
// }) => (
//   <div>
//     <Table
//       pageSize={pageSize}
//       columns={columns()}
//       loading={loading}
//       dataSelector={dummyData}
//       items={dummyData.length}
//     />
//   </div>
// );

 
function ItemMgmtTable( {pageSize, history})  {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [message, setMessage] = useState(null)

  const dispatch = useDispatch();

  const { loading, error, itemDetail } = useSelector((state) => state.getItemDetails);

  const { userAuth } = useSelector((state) => state.userLogin);


  // Fetching user details
  useEffect(() => {

    if (!userAuth) {
      history.push('/login')
    } else {
      dispatch(getItemDocuments(userAuth))
    }

  }, [dispatch, history, userAuth])


  return (
    <div>
      <Table
        pageSize={pageSize}
        columns={columns()}
        loading={loading}
        dataSelector={dummyData}
        items={dummyData.length}
      />
    </div>
  );

}

export default ItemMgmtTable;