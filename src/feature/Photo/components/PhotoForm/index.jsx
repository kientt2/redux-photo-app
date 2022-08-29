import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'; 
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/image';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-field/InputField';
import SelectField from 'custom-field/SelectField';
import RandomPhotoField from 'custom-field/RandomPhotoField';
import * as Yup from 'yup';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    console.log('photoform', props)

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        categoryId: Yup.number()
            .required('This field is required.')
            .nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise: Yup.string().notRequired(),
        })
    })

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                //do something here ...
                const {values, errors, touched, isSubmitting} = formikProps;
                // console.log({values, errors, touched})

                return (
                    <Form>
                        <FastField
                            name="title"
                            label="Title"
                            component={InputField}
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            label="Category"
                            component={SelectField}
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        
                        <FormGroup>
                            <Button 
                                color="primary" 
                                type="submit"
                                
                            >
                                {isSubmitting && <Spinner size="sm" /> }
                                Add to album
                            </Button>
                        </FormGroup>
            
                    </Form>
                );

            }}
        </Formik>
    );
}

export default PhotoForm;