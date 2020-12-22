import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';


function AddItemsScreen() {

  const [category, setCategory] = useState('');
  // const [description, setDescription] = useState('');
  // const [unitPrice, setUnitPrice] = useState('');


  function submitMethod(e) {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage('Passwords do not match')
    // } else {
    //   dispatch(
    //     updateUserProfile(userAuth, { id: userInfo._id, name, email, password })
    //   )
    // }
  }

  return (

    <FormContainer>
      <h2>Add Items</h2>

      <Form onSubmit={submitMethod}>
        <Form.Group controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='category'
            placeholder='Category'
            value={category}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
      </Form.Group>
      </Form>
    </FormContainer>

  );

}

export default AddItemsScreen
