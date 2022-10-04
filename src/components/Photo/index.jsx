import React, { useState } from 'react';
import styled from 'styled-components';
import noPhoto from './../../assets/images/no-img.jpg';
import gp from './../../assets/images/geopolitique-profonde.png';
import ina from './../../assets/images/ina.png';
import rc from './../../assets/images/radio-courtoisie.jpeg';
import rt from './../../assets/images/rt.jpeg';
import str from './../../assets/images/strategika.png';
import tvl from './../../assets/images/tvl.jpeg';
import sr from './../../assets/images/sud-radio.png';
import ntdtv from './../../assets/images/ntdtv.jpg';

const Photo = (data) => {
    const PhotoContainer = styled.div`
        width: 100%;
        height: 12.5rem;
        margin: var(--articlePaddingLess) var(--articlePaddingLess) var(--articlePadding);
        padding: 0 var(--articlePadding);
        background: transparent url(${_filterPhoto(data.data.photo, data.data.media_name)}) no-repeat center;
        background-size: cover;
    `;

    return (
        <PhotoContainer className='article-photo'/>
    );
};

function _filterPhoto(photo, mediaName) {
    let photoUrl = '';
    
    if (photo) {
        photoUrl=photo;
    }
    else {
        switch (mediaName.toLowerCase()) {
            case 'Ligne Droite'.toLowerCase():
                photoUrl = rc;
                break;
            case 'Strategika'.toLowerCase():
                photoUrl = str;
                break;
            case 'Volaire.net'.toLowerCase():
                photoUrl = ina;
                break;
            case 'rt'.toLowerCase():
                photoUrl = rt;
                break;
            case 'TVL'.toLowerCase():
                photoUrl = tvl;
                break;
            case 'RT FRANCE'.toLowerCase():
                photoUrl = rt;
                break;
            case 'Géopolitique-Profonde'.toLowerCase():
                photoUrl = gp;
                break;
            case 'Sud-Radio'.toLowerCase():
                photoUrl = sr;
                break;
            case 'Sud Radio'.toLowerCase():
                photoUrl = sr;
                break;
            case 'NTD TV'.toLowerCase():
                photoUrl = ntdtv;
                break;
            case 'NTDTV'.toLowerCase():
                photoUrl = ntdtv;
                break;
            default:
                photoUrl = noPhoto;
                break;
        }
    }
    return photoUrl;
}

export default Photo;