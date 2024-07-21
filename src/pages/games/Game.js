import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";




const Game = (props) => {
  const {
    id,
    owner,
    title,
    gamePage
  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner


  return (
    <Card>
      <Card.Body>
        <Media>

          <div>
            {is_owner && gamePage && ""}
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