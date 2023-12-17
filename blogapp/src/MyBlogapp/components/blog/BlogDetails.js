import React, { useEffect, useState } from "react";
import { Navbar } from "../../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBlogDetails } from "../../features/blog/blogSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentMedical,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "./BlogDetails.css";
import { Footer } from "../../navbar/Footer";
export const BlogDetails = () => {

  const blogDetail = useSelector((state) => state.blog);
  console.log("blogDetail", blogDetail);
  const { blog_Details, comments } = blogDetail;
  console.log("comment", comments);

  console.log("blog_details", blog_Details);
  const dispatch = useDispatch();
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    dispatch(getBlogDetails(id));
    console.log("Blog ID:", id);
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="blogDetail">
        <div className="blogCard">
          <img
            className="blogdetail-image"
            src={`http://localhost:7000${blog_Details.blogPic}`}
            alt=""
          />
          <h1 className="blogDetail-h1">{blog_Details.title}</h1>
          <p className="blogDetail-h5">{blog_Details.description}</p>
          <div className="Commentdetail-like-icon">
            <Link to={`/addcomment/${id}`}>
              <FontAwesomeIcon
                icon={faCommentMedical}
                className="commentdetail"
                style={{ color: "#0d0f11" }}
              />
            </Link>
            <FontAwesomeIcon
              className="blogdetail-like"
              icon={faThumbsUp}
              style={{ color: "#0c1017" }}
            />
          </div>
        </div>
      </div>

      <div className="comment-section">
        {comments &&
          comments.map((comment) => {
            const { profilePic } = comment.userId;
            const imageUrl = profilePic.split("\\uploads\\")[1];
            return (
              <div className="commentCard">
                <img
                  className="comment-image"
                  src={`http://localhost:7000/uploads/${imageUrl}`}
                />
                <FontAwesomeIcon
                  icon={faCommentMedical}
                  className="commenticon"
                  style={{ color: "beige" }}
                />
                <h2>{comment.userId.userName}</h2>
                <h1>{comment.comment}</h1>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};
