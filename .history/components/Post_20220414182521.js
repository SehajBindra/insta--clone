import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import { RiChat3Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { async } from "@firebase/util";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");



  useEffect(() => {
     onSnapshot(query(collection(db , 'posts', id, 'comments'),orderBy('timestamp', 'desc')), 
     snapshot => setComments(snapshot.docs))
  }, [db])

  const sendComment = async (e) =>{
    e.preventDefault();



    const commentToSend =  comment;
    setComment("");

    await addDoc(collection(db , 'posts', id , 'comments'),{
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),

    })
  }

 

  return (
    <div className="  bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5 ">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 capitalize font-normal">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img className=" object-cover w-full" src={img} alt="" />

      {/* Buttons */}

      {session && (
        <div className=" flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />

            <RiChat3Line className="h-7 w-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
            <PaperAirplaneIcon className="btn rotate-90" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <p className=" p-5  truncate">
        <span className="mr-1 font-semibold capitalize">{username}</span>
        {caption}
      </p>


      {/* comments */}
       {comments.length > 0 &&(
         <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
           {comments.map(comment => (
             <div className=" flex items-center space-x-2 mb-3" key={comment.id}>
               <img className=" h-7 rounded-full" src={comment.data().userImage} alt="" />
              <p><span>{comment.data().username}</span>{comment.data().comment}</p>
             </div>
           ))}
         </div>
       )}



      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="btn" />
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick= {sendComment}
            className=" font-light text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
