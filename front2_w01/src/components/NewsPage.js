import React, { useState } from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams(); // useParams()를 사용하여 현재 URL의 category 매개변수를 가져옴
  const [selectedCategory, setSelectedCategory] = useState(category || "all"); // category 매개변수가 없으면 디폴트로 'all'을 사용

  const handleCategorySelect = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <>
      <Categories onSelect={handleCategorySelect} />
      <NewsList category={selectedCategory} />
    </>
  );
};

export default NewsPage;
