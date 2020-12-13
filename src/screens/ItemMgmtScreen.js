import React from 'react'
import PopulatedTable from '../components/PopulatedTable';
import paged from '../components/Pagination';


const Table = paged(PopulatedTable);

class ItemMgmtScreen extends React.Component {

  render() {
    return(
      <div>
        <h1>Item Management Component</h1>
      
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