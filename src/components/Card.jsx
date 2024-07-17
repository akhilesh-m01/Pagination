const Card = ({ postName, postImage }) => {
  return (
    <div className="w-1/6 p-2 m-2 border-2 border-sky">
         <img src={postImage} alt="image NA" className="" />
          <p className="p-10">{postName}</p>
    </div>
  );
};

export default Card;
