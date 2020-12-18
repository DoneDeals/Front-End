import React from 'react'
import PopulatedTable from '../components/PopulatedTable';
import paged from '../components/Pagination';


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
// const columns = 
  //  [
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

const ItemMgmtTable = ({
  pageSize,
  loading,
}) => (
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


export default ItemMgmtTable;