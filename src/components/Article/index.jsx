import React from 'react';
import styled from 'styled-components';
import { useMediaCategories, useThemeCategories, useSubstring } from '../../utils/hooks';

const ArticleContainer = styled.article`
    margin: var(--articleMargin);
    padding: var(--articlePadding);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: var(--articleColor) solid 1px;
    border-radius: .5rem;
`;

const ImportantArticleContainer = styled.article`
    margin: var(--articleMargin);
    padding: var(--articlePadding);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: var(--articleColor) solid 1px;
    border-radius: .5rem;
    background-color: var(--articleColor);
`;

const Article = (data) => {
    const articleData = data.data;
    const { mediaType } = useMediaCategories(articleData.media_type);
    const { themeType } = useThemeCategories(articleData.theme_category);
    const { text } = useSubstring(articleData.desc, 120);

    const Photo = styled.div`
        width: 100%;
        height: 12.5rem;
        margin: var(--articlePaddingLess) var(--articlePaddingLess) var(--articlePadding);
        padding: 0 var(--articlePadding);
        background: transparent url(${articleData.photo}) no-repeat center;
        background-size: cover;
    `;

    const Ul = styled.ul`
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    `;

    const Li = styled.li`
        list-style: none;
        margin: 0 .5rem .5rem 0;
        padding: .25rem .5rem;
        background-color: var(--yellowStronger);
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: .125rem;
    `;

    const H1 = styled.h1`
        text-align: left;
    `;

    const H2 = styled.h2`
        text-align: left;
    `;

    const Description = styled.div`
        font-size: 1.35rem;
        text-align: left;
    `;

    const OtherInfos = styled.div`
        margin-top: .75rem;
        text-align: left;
    `;

    const OtherSubInfos = styled.span`
        font-size: 1.5rem;
    `;

    const IsUl = themeType && mediaType
        ? (
            <Ul>
                { themeType ? <Li>{themeType}</Li> : '' }
                { mediaType ? <Li>{mediaType}</Li> : '' }
            </Ul>
        )
        : '';

    const article = <>
        { articleData.photo ? <Photo className='article-photo'/> : '' }
        { IsUl }
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
    </>;

    const defaultArticle = <ArticleContainer>
        {article}
    </ArticleContainer>;
    
    const importantArticle = <ImportantArticleContainer>
        {article}
    </ImportantArticleContainer>;

    return (
        <>
            {
                articleData.important
                    ? importantArticle
                    : defaultArticle
            }
        </>
    );
};

export default Article;