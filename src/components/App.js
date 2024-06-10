import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { blogData, posts } from '../data/blog.js'; 


function App() {
    return (
        <div className="App">
            <Header name={blogData.name} />
            <About image={blogData.image} about={blogData.about} />
            <ArticleList posts={posts} />
        </div>
    );
}

export default App;