
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroArticle from './components/HeroArticle/HeroArticle';
import ArticleList from './components/ArticleList/ArticleList';
import CategorySection from './components/CategorySection/CategorySection';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <div className="App">
    <Navbar />
    <div className = "mainContent">
      <div className = "leftColumn">
        </div>
      <div className ="centerColumn">
      <HeroArticle
        title="Energy's New Wave"
        excerpt="An in-depth look at the future of clean energy and how innovation is driving a greener future."
        imageUrl="path-to-your-placeholder-image.jpg"
      />
      <ArticleList />
      </div>
      <div className ="rightColumn">
        </div>
      </div>
      <CategorySection categoryTitle="Trending" />
      <Footer />
   </div>
  );
}

export default App;
