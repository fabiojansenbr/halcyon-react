import React from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const sortOptions = {
    'Name A-Z': 'display_name',
    'Name Z-A': 'display_name_desc',
    'Email Address A-Z': 'email_address',
    'Email Address Z-A': 'email_address_desc'
};

const SearchForm = ({ onSearch, onSortChange }) => (
    <AvForm onValidSubmit={onSearch}>
        <FormGroup>
            <InputGroup>
                <AvInput name="search" type="text" placeholder="Search..." />
                <InputGroupAddon
                    addonType="prepend"
                    className="input-group-prepend"
                >
                    <Button type="submit" title="Search">
                        <FontAwesomeIcon icon={faSearch} fixedWidth />
                    </Button>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>Sort By</DropdownToggle>
                        <DropdownMenu right>
                            {Object.entries(sortOptions).map(
                                ({ key, value }) => (
                                    <DropdownItem
                                        key={key}
                                        onClick={() => onSortChange(value)}
                                    >
                                        {key}
                                    </DropdownItem>
                                )
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    </AvForm>
);

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired
};

export default SearchForm;
