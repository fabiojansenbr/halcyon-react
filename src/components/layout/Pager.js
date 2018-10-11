import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pager = ({
    hasNextPage,
    hasPreviousPage,
    onNextPage,
    onPreviousPage
}) => {
    if (!hasNextPage && !hasPreviousPage) {
        return null;
    }

    return (
        <Pagination className="d-flex justify-content-center">
            <PaginationItem disabled={!hasPreviousPage}>
                <PaginationLink onClick={onPreviousPage}>
                    Previous
                </PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={!hasNextPage}>
                <PaginationLink onClick={onNextPage}>Next</PaginationLink>
            </PaginationItem>
        </Pagination>
    );
};

Pager.propTypes = {
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired
};

export default Pager;
