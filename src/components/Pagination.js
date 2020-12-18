import React from 'react';
import PaginationButton from './PaginationButton';
// import Loading from '../async/Loading/index';
// import { ellipsis as ellipsisChar } from '../constants/chars';
// import colors from '../constants/colors';
import PropTypes from 'prop-types';

const defaultPage = 1;
const maxButtons = 5;
const ellipsisChar = '\u2026';

const styles = {
  buttons: {
    float: 'right',
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

    handleOnSelect = (pageNumber, event) => {
      const { pageSize } = this.props;
      const offset = (pageNumber - 1) * pageSize;
      this.setState({ activePage: pageNumber, offset });
      // this.props.onFetchData(this.state.limit, offset);
    };

    renderButtons(
      pageCount,
      activePage,
      ellipsis,
      onSelect,
      buttonProps,
      boundaryLinks = true,
    ) {
      let startPage;
      let endPage;
      const pageButtons = [];

      if (maxButtons < pageCount) {
        startPage = Math.max(
          Math.min(
            activePage - Math.floor(maxButtons / 2, 10),
            pageCount - maxButtons + 1,
          ),
          1,
        );
        endPage = startPage + maxButtons - 1;
      } else {
        startPage = 1;
        endPage = pageCount;
      }

      for (let page = startPage; page <= endPage; ++page) {
        pageButtons.push(
          <PaginationButton
            {...buttonProps}
            key={page}
            disabled={activePage === page}
            onSelect={onSelect}
            eventKey={page}
            active={activePage === page}
          >
            {page}
          </PaginationButton>,
        );
      }

      if (ellipsis && boundaryLinks && startPage > 1) {
        if (startPage > 2) {
          pageButtons.unshift(
            <PaginationButton key="ellipsisFirst" disabled {...buttonProps}>
              <span aria-label="More">
                {ellipsis === true ? ellipsisChar : ellipsis}
              </span>
            </PaginationButton>,
          );
        }

        pageButtons.unshift(
          <PaginationButton {...buttonProps} key={1} eventKey={1}>
            1
          </PaginationButton>,
        );
      }

      if (ellipsis && endPage < pageCount) {
        if (!boundaryLinks || endPage < pageCount - 1) {
          pageButtons.push(
            <PaginationButton
              onSelect={onSelect}
              {...buttonProps}
              key="ellipsis"
              disabled
            >
              <span aria-label="More">
                {ellipsis === true ? ellipsisChar : ellipsis}
              </span>
            </PaginationButton>,
          );
        }

        if (boundaryLinks) {
          pageButtons.push(
            <PaginationButton {...buttonProps} onSelect={onSelect} key={pageCount} eventKey={pageCount}>
              {pageCount}
            </PaginationButton>,
          );
        }
      }

      return pageButtons;
    }

    render() {
    
      const {
        last = true,
        first = true,
        next = true,
        prev = true,
        ellipses = true,
        // buttonComponent,
        columns,
        // idSelector,
        loading,
        dataSelector,
        items,
        pageSize,
      } = this.props;

      const { activePage } = this.state;
      const pageCount = Math.ceil(items / pageSize);

      const buttonProps = {
        onSelect: this.handleOnSelect,
        // buttonComponent,
      };

      const tableProps = {
        data: dataSelector,
        columns,
        // idSelector,
      };
      
      return (
        <div>
          <div>
            {/* {loading ? <Loading overlay /> : null} */}
            <Table {...tableProps} />

            <ul style={styles.buttons}>
              {first ? 
                (<PaginationButton {...buttonProps} eventKey={1} disabled={activePage === 1}>
                  First
                 </PaginationButton>) : null}
              
              {prev ? 
                (<PaginationButton {...buttonProps} eventKey={activePage - 1} disabled={activePage === 1}>
                  Prev
                </PaginationButton>) : null}
              
              {this.renderButtons(
                pageCount,
                activePage,
                ellipses,
                this.handleOnSelect,
                buttonProps,
              )}
              
              {next ? (
                <PaginationButton
                  {...buttonProps}
                  eventKey={activePage + 1}
                  disabled={activePage >= pageCount}
                >
                  Next
                </PaginationButton>
              ) : null}
              {last ? (
                <PaginationButton
                  {...buttonProps}
                  eventKey={pageCount}
                  disabled={activePage >= pageCount}
                >
                  Last
                </PaginationButton>
              ) : null}
            </ul>

          </div>
        </div>
      );

    }

  }

  PagedTable.propTypes = {
    // columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    // idSelector: PropTypes.func,
    // loading: PropTypes.bool,
    dataSelector: PropTypes.array.isRequired,
    items: PropTypes.number,
    // pageSize: PropTypes.number.isRequired,
  };

  return PagedTable;
}

export default paged;