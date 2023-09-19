import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

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

// API_KEY 에 본인 API 키를 넣어주세요!
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null); // 뉴스 데이터 저장
  const [loading, setLoading] = useState(false); // 데이터를 불러올 때의 로딩 상태를 저장

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        // const query = category === "all" ? "" : `&category=${category}`;
        let query = "";
        if (category === "all") {
          query = "top-headlines?country=kr";
        } else if (category === "apple") {
          query =
            "everything?q=apple&from=2023-09-18&to=2023-09-18&sortBy=popularity";
        } else if (category === "tesla") {
          query = "everything?q=tesla&from=2023-08-19&sortBy=publishedAt";
        } else {
          query = `top-headlines?country=kr&category=${category}`;
        }
        const response = await axios.get(
          `https://newsapi.org/v2/${query}&apiKey=e26766509f464626aa890746ebdfbd33`
        );
        // https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e26766509f464626aa890746ebdfbd33
        // https://newsapi.org/v2/top-headlines?country=kr&apiKey=e26766509f464626aa890746ebdfbd33
        // https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=e26766509f464626aa890746ebdfbd33
        // https://newsapi.org/v2/everything?q=apple&from=2023-09-18&to=2023-09-18&sortBy=popularity&apiKey=e26766509f464626aa890746ebdfbd33
        // https://newsapi.org/v2/everything?q=tesla&from=2023-08-19&sortBy=publishedAt&apiKey=e26766509f464626aa890746ebdfbd33
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null; // map 함수 사용하기 전에 꼭 articles를 조회하여 해당 값이 현재 null인지 아닌지 검사해야 함
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
