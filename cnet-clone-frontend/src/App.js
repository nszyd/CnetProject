
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import HeroArticleList from './components/HeroArticleList/HeroArticleList';
import StandardArticleList from './components/StandardArticleList/StandardArticleList';
import TagSection from './components/TagSection/TagSection';
import { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleView from './components/ArticleView/ArticleView';

const generateTestArticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Test Article ${i + 1}`,
    excerpt: 'This is a test excerpt for the article.',
    imageUrl: `https://via.placeholder.com/300x200?text=Article+${i + 1}`,
  }));
};

const tagsWithArticles = {
  'AI': generateTestArticles(9),
  'Tech': generateTestArticles(9),
  'Money': generateTestArticles(9),
  'Wellness': generateTestArticles(9),
  'Home Internet': generateTestArticles(9),
  'Deals': generateTestArticles(9),
  // ... other tags
};


 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authScreen, setAuthScreen] = useState(null); // 'login', 'signup', or null

  // Toggle between Login and SignUp screens
  const toggleAuthScreen = (screen) => {
    setAuthScreen(screen);
  };

  // Handle user authentication action (login/signup)
  const handleAuthAction = () => {
    setIsLoggedIn(true);
    setAuthScreen(null); // Hide auth screen after action
  };

  // Handle click on the logo to hide auth screen
  const handleLogoClick = () => {
    setAuthScreen(null);
  };

  const allArticles = Object.values(tagsWithArticles).flat();
  return (
    <Router>
      <div className="App">
        <Navbar onLoginClick={() => toggleAuthScreen('login')} onLogoClick={handleLogoClick} />
        <Routes> {/* Replaced Switch with Routes here */}
          {/* Route for the main content */}
          <Route path="/" element={
            !authScreen ? (
              <>
                <CategoriesBar />
                <main className="mainContent">
                  <HeroArticleList />
                  <StandardArticleList />
                  {Object.entries(tagsWithArticles).map(([tag, articles]) => (
                    <TagSection key={tag} tag={tag} articles={articles} />
                  ))}
                </main>
              </>
            ) : (
              authScreen === 'login' ? <Login onToggle={() => toggleAuthScreen('signup')} onAction={handleAuthAction} />
              : <SignUp onToggle={() => toggleAuthScreen('login')} onAction={handleAuthAction} />
            )
          } />

          {/* Route for the article view - Change this when migrating to real data*/}
          <Route path="/article/:id" element={<ArticleView articles={allArticles} />} />

          {/* Add other routes if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
