import PropTypes from 'prop-types';
import { FilterWrapper, FilterInput, Button } from './Filter.styled';

export const Filter = ({ onChange, value, onClick }) => {
  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={value}
            onChange={onChange}
          />
        </label>

        <Button type="button" onClick={onClick}>
          Clear
        </Button>
      </FilterWrapper>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
