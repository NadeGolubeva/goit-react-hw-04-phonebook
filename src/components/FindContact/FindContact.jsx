import PropTypes from 'prop-types';
import css from './FindContact.module.css';

export const FindContact = ({filter, onChangeFilter }) => {
    return (
        <>
            <label
            className={css.label}>
                <p>
                     Find contact by name
                </p>
                <input
                    onChange={onChangeFilter}
                    type="text"
                    name="filter"
                    value={filter}
                    className={css.input}
                >
                </input>
            </label>
        </>
    )
}

FindContact.prppTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}