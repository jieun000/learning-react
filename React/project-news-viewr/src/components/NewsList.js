import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";
 
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    }
`;
 
const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? "" : `&category=${category}`;
        // API key: https://newsapi.org/
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=270d937ac8794256bd8bddc4f367d9dd`
        );
    }, [category]);
 
    // 대기 중
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // response값 미설정시
    if (!response) {
        return null;
    }

    // 에러 발생
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    // response값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;