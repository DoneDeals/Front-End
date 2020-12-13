import React from 'react';
// import PaginationButton from './PaginationButton';
// import Loading from '../async/Loading/index';
// import { ellipsis as ellipsisChar } from '../constants/chars';
// import colors from '../constants/colors';
import PropTypes from 'prop-types';

const defaultPage = 1;
const maxButtons = 5;

const styles = {
  buttons: {
    float: 'right',
    // color: colors.veryDarkGrey,
    paddingTop: '.25em',
    textAlign: 'right',
  },
};

const paged = Table => {

  class PagedTable extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        activePage: defaultPage,
        limit: props.pageSize,
        offset: defaultPage - 1,
      };
    }

    componentDidUpdate(prevProps, prevState) {

      if (!prevProps.loading && this.props.loading &&
          prevState.activePage === this.state.activePage && this.state.activePage !== defaultPage) {
        this.setState({
          activePage: defaultPage,
          offset: defaultPage - 1,
        });
      }

    }

    render() {
    
      const {
        last = true,
        first = true,
        next = true,
        prev = true,
        ellipses = true,
        buttonComponent,
        columns,
        idSelector,
        loading,
        dataSelector,
        items,
        pageSize,
      } = this.props;

      const { activePage } = this.state;
      const pageCount = Math.ceil(items / pageSize);

      // const buttonProps = {
      //   onSelect: this.handleOnSelect,
      //   buttonComponent,
      // };

      const tableProps = {
        data: dataSelector,
        columns,
        idSelector,
      };
      
      return (
        <div>
          <div>
            {/* {loading ? <Loading overlay /> : null} */}
            <Table {...tableProps} />

          </div>
        </div>
      );

    }

  }

  PagedTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    idSelector: PropTypes.func,
    // loading: PropTypes.bool,
    dataSelector: PropTypes.array.isRequired,
    items: PropTypes.number,
    // pageSize: PropTypes.number.isRequired,
  };

  return PagedTable;
}

export default paged;