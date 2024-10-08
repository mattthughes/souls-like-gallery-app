import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropDown } from "../../components/DropDown";
import CommentEditForm from "./CommentEditForm";

import styles from '../../styles/Comment.module.css'

import Avatar from "../../components/Avatar";

import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { axiosRes } from "../../api/AxiosDefaults";
import { toast } from "react-toastify";

// Settings the comment props component
const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // Using a delete request to delete the comment id from the previous post, if an error appears refresh the window.
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      toast.success("Comment deleted")
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      toast.error("Comment could not be deleted please try again")
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
        <Avatar src={profile_image}/>
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {/*If the user is the owner and show edit form is false show the drop down component*/ }
        {is_owner && !showEditForm && (
          <DropDown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;