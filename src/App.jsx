import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Pagination from './components/Pagination';

export default function App() {

  const [data,setData] = useState([]);
  const [currPage,setCurrPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);

  

  useEffect(()=>{
    async function fetchData(){
          const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      setData(res.data)
        }
    fetchData()
  },[])

  const lastIndex = currPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = data.slice(firstIndex,lastIndex);
  
  return (
    <div className='text-center bg-gray-950 text-white w-full min-h-screen'>
      <h1>Pagination Example</h1>
      <div className='flex flex-wrap justify-center items-center content-center'>
        {currentPosts.map((d)=>(
        <Card
          key={d.id}
          postName = {d.name}
          postImage = {d.image}
          />
        ))}

        <Pagination 
          totalPosts = {data.length}
          postsPerPage = {postsPerPage}
          setCurrPage = {setCurrPage}
          currPage = {currPage}
          />


      </div>
    </div>
  )
}
