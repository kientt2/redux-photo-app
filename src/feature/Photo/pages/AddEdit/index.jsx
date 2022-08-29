import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Banner from 'components/Banner/Banner';
import PhotoForm from 'feature/Photo/components/PhotoForm';
import { useDispatch } from 'react-redux';
import photoSlice, { addPhoto } from 'redux/photoSlice';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (value) => {
        const action = addPhoto(value)
        dispatch(action);
        history.push('/photos')
    }

    return (
        <div className='photo-edit'>
            <Banner title="Pick your amazing photo 😎" />
            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmit} otherprops="kientt" />
            </div>
        </div>
    );
}

export default AddEditPage;