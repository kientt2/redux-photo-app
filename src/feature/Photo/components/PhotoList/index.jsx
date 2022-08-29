import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Photo from 'components/Photo';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    
};

function PhotoList(props) {
    const {photoList, onPhotoEditClick, onPhotoRemoveClick} = props;

    return (
        <Row>
            {photoList.map((item, index) => (
                <Col key={index} xs="12" md="6" lg="3">
                    <PhotoCard
                        photo={item}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>)
            )}
        </Row>
    );
}

export default PhotoList;