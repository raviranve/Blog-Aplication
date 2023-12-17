import React, { useEffect } from "react";
import "./BlogList.css";
import { Navbar } from "../../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/blog/blogSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentMedical,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../navbar/Footer";
export const BlogsList = () => {
  const blog = useSelector((state) => state.blog);
  const { blog_data } = blog;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = localStorage.getItem("user");
  const user = JSON.parse(res);
  console.log("user data", user);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <>
      <Navbar />
      <div className="BlAddBtn">
        <h3 className="Blog-h3">MY Blog</h3>
        <button className="addBlBtn">
          <Link to="/createBlog">Add Blog</Link>
        </button>
      </div>

      <div className="blog-image-content">
        {blog_data &&
          blog_data.map(({ _id, blogPic, title, description, createdAt }) => (
            <div className="blog-post-container">
              <Link to={`/blogdetails/${_id}`}>
                <img
                  src={`http://localhost:7000${blogPic}`}
                  className="post-image"
                />
                <div className="blog-post-content">
                  <div className="blog-Name-date">
                    <h2>{title}</h2>
                    <p className="blog-date">{createdAt.slice(0, 10)}</p>
                  </div>
                  <p className="post-descripton">{description}</p>
                </div>
              </Link>
              <div className="blog-commLike">
                {user?.userName ? <h3>{user?.userName}</h3> : navigate("/")}
                <div className="Comment-like-icon">
                  <FontAwesomeIcon
                    icon={faCommentMedical}
                    className="comments"
                    style={{ color: "#0d0f11" }}
                  />
                  <FontAwesomeIcon
                    className="blog-like"
                    icon={faThumbsUp}
                    style={{ color: "#0c1017" }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer/>
    </>
  );
};
