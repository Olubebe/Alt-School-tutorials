// import React,{useEffect} from "react";
// import "./App.css"
// import {Routes, Route, NavLink, useSearchParams, useLocation, useNavigate} from 'react-router-dom'

// function Home() {

// //How to use  the useNavigate()
// const navigate = useNavigate()

// // Handle navigation
// const handlenavigate = (event) =>{
//   event.preventDefault();
//   navigate("/about")
// }

// //   const  [searchParams, setSearchParams] = useSearchParams();
  
// //   useEffect(() =>{
    
// //     // set the search params
// //     setSearchParams({
// //     id:"123456",
// //   })
// //     // Get the search params
// //   console.log(searchParams.get("id"));
// // }, [searchParams, setSearchParams])
 

// // useLocation
// // const location = useLocation();
// // console.log(location);

//   return( <section>
//     <h1>Home Page</h1>
//     <p>This is the home page</p>
//     <p>Click the link below to go to the about page</p>
//     <Navigation/>
//   </section>
//   )
// }

// function About() {
// // useLocation
// // const location = useLocation();
// // console.log(location);
//   return( <section>
//     <h1>About</h1>
//     <p>This is the about page</p>
//     <Navigation/>
//   </section>
//   )
// }

// function Navigation(){
// return(
//   <section className="navigation">
//   <NavLink
//   style={({isActive}) => isActive ? {color:'white'} : {color:'black'}} 
//    className="navigate" to="/">Home Page</NavLink>
//   <NavLink 
//    style={({isActive}) => isActive ? {color:'white'} : {color:'black'}} 
//    className="navigate" to="/about">About</NavLink>
//   </section>
// )
// }

// const App = () => {
//   return(
//     <section className="main-container">
//     <Routes>
//      <Route path="/" element={<Home/>} />
//      <Route path="/about" element={<About/>} />
    
//     </Routes>
//    </section>
//   )
// };

// export default App;


// import React from 'react'
// import { useEffect, useState } from 'react'
// import "./App.css"

// const App = () => {

//   const [currentItem, setCurrentItem] = useState(0)
//   const [news, setNews] = useState(null)
//   const [loading, setLoading] = useState(true)

// // Set our initail State
// useEffect(() =>{
//   const newsItems = [
//     {
//       title : " BBC News " ,
//       url :"https://www.bbc.com/",
//       description : " Latest news from BBC " ,
//       },
//       {
//       title : " ON News " ,
//       url : " https://www.com.com/ " ,
//       description : " Latest news from O " ,
//       },
//       {
//       title : " Google News ",
//       url : " https://news.google.com/",
//       description : " Latest news from Google",
//       },
//       {
//       title : " TechCrunch " ,
//       url : " https://techcrunch.com/ " ,
//       description : " Latest news from TechCrunch",
//       },
//       {
//       title : " The verge ",
//       url : " https://www.theverge.com/ ",
//       description : " Latest news from The Verge " ,
//       }
//   ];
// const item = newsItems[currentItem]

// setNews(item)
// setLoading(false)
// }, [currentItem])



// const handleNext = (event) => {
//   event.preventDefault();
//   // update our state
//   setCurrentItem(prev => prev + 1)
// }
// const handlePrevious = (event) => {
//   event.preventDefault();
//   setCurrentItem(next => next -1)
// }



//   return (
//     <div className="main-container">
//       <section className='news'>
//       {loading ? 
//       <div>loading</div> : 
//       <div className='news-item' >
//       <h2>{news.title}</h2>
//       <p>{news.description}</p>
//       <a href={news.url}>{news.url}</a>
//     </div>}
//     </section>
//       <div className="paginate">
//         <button className="prev" onClick={handlePrevious}>Previous</button>
//         <button className="next"onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   )
// }

// export default App