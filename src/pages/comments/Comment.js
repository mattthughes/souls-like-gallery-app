import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { axiosRes } from "../../api/AxiosDefaults";

import { DropDown } from "../../components/DropDown";



const Comment = (props) => {
  const { profile_id,  owner, updated_at, content, id, setPost, setComments } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      window.location.reload();
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
      console.log(err.response.data)
    }
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{updated_at}</span>
          <p>{content}</p>
          {is_owner && (
          <DropDown handleEdit={() => {}} handleDelete={handleDelete} />
        )}
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;