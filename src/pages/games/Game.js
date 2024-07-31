import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";
import { DropDown } from "../../components/DropDown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { axiosRes } from "../../api/AxiosDefaults";

import { toast } from "react-toastify";





const Game = (props) => {
  const {
    id,
    owner,
    title,
    gamePage
  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/games/${id}/`);
      toast.success("Game Deleted")
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Card>
      <Card.Body>
        <Media>

          <div>
            {is_owner && gamePage && (
              <DropDown handleDelete={handleDelete}/>
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
      </Card.Body>
    </Card>
  );
};


export default Game;