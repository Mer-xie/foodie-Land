import {HomePage} from "./pages/home/homePage.jsx";
import "./styles.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./pages/contact/contactPage.jsx";
import RecipePage from "./pages/recipe/recipePage.jsx";
import AboutPage from "./pages/about/aboutPage.jsx";
import BlogPage from "./pages/blog/blogPage.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe" element={<RecipePage/>}/>
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer/>
      </BrowserRouter>

  )
}

export default App
