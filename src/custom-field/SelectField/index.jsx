import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';


SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};

SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const {
        field, form,
        options , label, placeholder, disabled
    } = props;
    const {name, value} = field;
    const selectedOption = options.find(option => option.value === value);
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for="titleId">{label}</Label>}
            <Select
                id={name} 
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                disabled={disabled}
                placeholder={placeholder}
                options={options}
                className={showError ? 'is-invalid' : ''}
            ></Select>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;