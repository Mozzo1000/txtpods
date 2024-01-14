import React from 'react'
import NavigationMenu from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Podcasts from './pages/Podcasts';
import PodcastDetails from './pages/PodcastDetails';
import Footer from "./components/Footer";
import About from "./pages/About";
import AboutAPI from './pages/AboutAPI';
import { SidebarProvider } from "./context/SidebarContext";

function App() {

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <NavigationMenu />
        
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
          </Route>
          <Route path="/about" element={<About/>} />
          <Route path="/about/api" element={<AboutAPI/>} />

          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/podcasts/:id" element={<PodcastDetails />} />

          <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </SidebarProvider>
    </div>
  )
}

export default App
