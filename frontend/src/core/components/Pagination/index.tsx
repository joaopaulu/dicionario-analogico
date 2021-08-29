import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.scss';

type Props = {
  forcePage?: number;
  totalPages: number;
  range: number;
  onChange: (item: number) => void;
};

const Pagination = ({ forcePage, totalPages, range, onChange }: Props) => {
  const renderIcon = (type: 'previous' | 'next') => (
    <ArrowIcon className={`pagination-${type}`} />
  );

  return (
    <div className="pagination-container">
      {totalPages > 1 && (
        <ReactPaginate
          forcePage={forcePage}
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={selectedItem => onChange(selectedItem.selected)}
          previousLabel={renderIcon('previous')}
          nextLabel={renderIcon('next')}
          containerClassName="pagination"
          pageLinkClassName="pagination-item"
          breakClassName="pagination-item"
          activeLinkClassName="active"
          previousClassName="page-active"
          nextClassName="page-active"
          disabledClassName="page-inactive"
        />
      )}
    </div>
  );
};

export default Pagination;
