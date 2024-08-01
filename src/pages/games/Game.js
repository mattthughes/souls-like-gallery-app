import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";
import { DropDown } from "../../components/DropDown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { axiosRes } from "../../api/AxiosDefaults";

import { toast } from "react-toastify";

import styles from '../../styles/Game.module.css'





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

  const handleEdit = () => {
    history.push(`/games/${id}/edit`);
  };


  return (
    <Card>
      <Card.Body>
        <Media>
        
          <div>
            {is_owner && gamePage && (
              <DropDown handleDelete={handleDelete} handleEdit={handleEdit}/>
            )}
          </div>
        </Media>
      </Card.Body>
      <div className="col-6">
        <ul>
          <li className={styles.Li}>{title}</li>
        </ul>
      </div>
       
    </Card>
  );
};


export default Game;