import React from 'react';
import ItemMgmtTable from '../components/ItemMgmtTable';



class ItemMgmtScreen extends React.Component {

  render() {
    return(
      <div>
        <h1>Item Management Component</h1>
      
        <ItemMgmtTable pageSize={8} loading={true}/>
        {/* <form onSubmit={this.handleSubmit} className="createComment">
          <input value={this.state.user} onChange={this.handleUserChange} placeholder="Your name" type="text"/>
          <input value={this.state.content} onChange={this.handleTextChange} placeholder="Thoughts?" type="text"/>
          <button type="submit">Post</button>
        </form> */}
      </div>

    )
  }

}

export default ItemMgmtScreen