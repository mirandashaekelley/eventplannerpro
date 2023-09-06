// src/components/NewsList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styling/NewsList.css'

const NEWS_QUERY = gql`
  query {
    newsQuery {
      category
      title
      description
      date
    }
  }
`;

const NewsList = () => {
  const { loading, error, data } = useQuery(NEWS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} Hint: Refer to the README file</p>;

  const newsItems = data.newsQuery;

  return (
    <div className='news'>
        <div className='section-header'>News and Highlights</div>
        <div className='news-section'>
            {newsItems.map((newsItem, index) => (
                <div key={index} className='news-block'>
                <p className='category'>{newsItem.category}</p>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.description}</p>
                <p>{newsItem.date}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default NewsList;
