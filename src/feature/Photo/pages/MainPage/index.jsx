import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner/Banner';
import Images from 'constants/image';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'feature/Photo/components/PhotoList';
import { removePhoto } from 'redux/photoSlice';

MainPage.propTypes = {
    
};

function MainPage(props) {

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    console.log("List of photos: ", photos)

    const onPhotoRemoveClick = (photo) => {
        console.log("Remove photo: ", photo);
        const action = removePhoto(photo);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
                <PhotoList photoList={photos} onPhotoRemoveClick={onPhotoRemoveClick}></PhotoList>
            </Container>
        </div>
    );
}

export default MainPage;