import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import { Route } from 'react-router-dom'
import gsap from 'gsap';

import Navigation from './components/navigation';
import Header from './components/header';

import Home from './pages/home';
import CaseStudies from './pages/caseStudies'
import Approach from './pages/approach'
import Services from './pages/services'
import About from './pages/about'

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'CaseStudies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about-us', name: 'About us', Component: About },
]

function App() {
  gsap.to('body', 0, { css: { visibility: "visible" } })

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 100)

    window.addEventListener('resize', debounceHandleResize)

    return () => {
      window.removeEventListener('resize', debounceHandleResize)
    }
  })

  return (
    <>
      <Header dimensions={dimensions} />

      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
