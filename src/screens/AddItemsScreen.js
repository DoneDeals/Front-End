import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer';
import { addItem } from '../actions/itemActions';


function AddItemsScreen({ history }) {

  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.addItem);
  const { userAuth } = useSelector((state) => state.userLogin);

console.log('AddItemsScreen, history: ', history);
  function submitMethod(e) {
    e.preventDefault();
    setMessage('Adding new item');
    dispatch(addItem(category, description, unitPrice));
  }

  return (

    <FormContainer>
      <h2>Add Items</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      
      {loading ? (
        <Loader />
      ) : (

        <Form onSubmit={submitMethod}>
          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='category'
              placeholder='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='description'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='unitPrice'>
            <Form.Label>Unit Price</Form.Label>
            <Form.Control
              type='unitPrice'
              placeholder='Unit Price'
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Add Item
          </Button>
        </Form>
      )}

    </FormContainer>

  );

}

export default AddItemsScreen
