import React from 'react';
import styled from 'styled-components';
import { useSubstring } from '../../utils/hooks';
import Photo from './../Photo';

const Container = styled.article`
    width: 100%;
    max-width: var(--containerColumnWidth);
    margin: 0 0 6rem;
    padding: var(--articlePadding) 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const H1 = styled.h1`
    text-align: left;
    font-size: 3rem;
`;

const H2 = styled.h2`
    text-align: left;
`;

const Description = styled.div`
    font-size: 1.85rem;
    text-align: left;
`;

const OtherInfos = styled.div`
    margin-top: .75rem;
    text-align: left;
`;

const OtherSubInfos = styled.span`
    font-size: 1.85rem;
`;

const Article = (data) => {
    const articleData = data.data;
    const { text } = useSubstring(articleData.desc, 120);

    return (
        <Container>
            <Photo data={articleData}/>
            { articleData.title ? <H1>{articleData.title}</H1> : '' }
            { articleData.chapo ? <H2>{articleData.chapo}</H2> : '' }
            { text ? <Description>{text}</Description> : '' }
            <OtherInfos>
                { articleData.author ? <OtherSubInfos>{articleData.author}</OtherSubInfos> : '' }
                { articleData.author && articleData.media_name ? <OtherSubInfos> • </OtherSubInfos> : '' }
                { articleData.media_name ? <OtherSubInfos>{articleData.media_name}</OtherSubInfos> : '' }
                { articleData.media_name && articleData.date ? <OtherSubInfos> • </OtherSubInfos> : '' }
                { articleData.date ? <OtherSubInfos>{articleData.date}</OtherSubInfos> : '' }
                { articleData.date && articleData.time ? <OtherSubInfos> • </OtherSubInfos> : '' }
                { articleData.time ? <OtherSubInfos>{articleData.time}</OtherSubInfos> : '' }
            </OtherInfos>
        </Container>
    );
};

export default Article;