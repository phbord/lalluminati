import React from 'react';
import styled from 'styled-components';
import { useMediaCategories, useThemeCategories, useSubstring } from '../../utils/hooks';
import noPhoto from './../../assets/images/no-img.jpg';
import gp from './../../assets/images/geopolitique-profonde.png';
import ina from './../../assets/images/ina.png';
import rc from './../../assets/images/radio-courtoisie.jpeg';
import rt from './../../assets/images/rt.jpeg';
import str from './../../assets/images/strategika.png';
import tvl from './../../assets/images/tvl.jpeg';
import sr from './../../assets/images/sud-radio.png';
import ntdtv from './../../assets/images/ntdtv.jpg';
import meridienZero from './../../assets/images/meridien-zero.jpeg';
import ri from './../../assets/images/ri.png';
import klaTv from './../../assets/images/klatv.jpeg';
import revuescitoyennes from './../../assets/images/revuescitoyennes.png';
import stratpol from './../../assets/images/stratpol.jpeg';

const Ul = styled.ul`
    position: absolute;
    top: var(--defaultGutterSizeY);
    left: var(--defaultGutterSizeX);
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const Li = styled.li`
    list-style: none;
    margin: 0 .5rem .5rem 0;
    padding: .25rem .5rem;
    background-color: var(--yellowStronger);
    color: var(--dark);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: .125rem;
`;

const Photo = (data) => {
    const photoData = data.data;
    const { mediaType } = useMediaCategories(photoData.media_type);
    const { themeType } = useThemeCategories(photoData.theme_category);
        
    const PhotoContainer = styled.div`
        position: relative;
        width: 100%;
        height: 12.5rem;
        margin: var(--articlePaddingLess) 0 var(--articlePadding);
        border: var(--dark) solid 1px;
        background: transparent url(${_filterPhoto(data.data.photo, data.data.media_name)}) no-repeat center;
        background-size: cover;
    `;

    return (
        <PhotoContainer className='article-photo'>
            {
                themeType && mediaType && (
                    <Ul>
                        { themeType ? <Li>{themeType}</Li> : '' }
                        { mediaType ? <Li>{mediaType}</Li> : '' }
                    </Ul>
                )
            }
        </PhotoContainer>
    );
};

function _filterPhoto(photo, mediaName) {
    let photoUrl = '';
    
    if (photo) {
        photoUrl = photo;
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
            case 'Méridien Zéro'.toLowerCase():
                photoUrl = meridienZero;
                break;
            case 'Réseau International'.toLowerCase():
                photoUrl = ri;
                break;
            case 'Kla.tv'.toLowerCase():
                photoUrl = klaTv;
                break;
            case 'REVUES CITOYENNES'.toLowerCase():
                photoUrl = revuescitoyennes;
                break;
            case 'Stratpol'.toLowerCase():
                photoUrl = stratpol;
                break;
            default:
                photoUrl = noPhoto;
                break;
        }
    }
    return photoUrl;
}

export default Photo;