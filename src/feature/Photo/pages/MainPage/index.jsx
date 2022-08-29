import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/image';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PhotoList from 'feature/Photo/components/PhotoList';

MainPage.propTypes = {
    
};

function MainPage(props) {

    const photos = useSelector(state => state.photos);
    console.log("List of photos: ", photos)

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
                <PhotoList photoList={photos}></PhotoList>
            </Container>
        </div>
    );
}

export default MainPage;