const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrPage,
  currPage
}) => {
  let pages = []

  for(let i=0;i<Math.ceil(totalPosts/postsPerPage);i++){
    pages.push(i+1)
  }
  
  return (
    <div className="">
      {
        pages.map((p,index)=>(
          <button key={index}
            onClick={()=>setCurrPage(p)}
            className={`text-white text-bolder hover:bg-gray-500 p-2 m-2 rounded-md} ${currPage===p?'bg-gray-500':''} rounded-md`}
            >{p}</button>
          
        ))
      }
    
    </div>
  )
};

export default Pagination;
