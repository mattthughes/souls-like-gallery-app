import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { DropDown } from "../../components/DropDown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { axiosRes } from "../../api/AxiosDefaults";

import { toast } from "react-toastify";

import Image from "react-bootstrap/Image";


import appStyles from '../../App.module.css'


// Props for game detail component
const GameDetail = (props) => {
  const {
    id,
    owner,
    title,
    description,
    image,

    gamePage
  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  // Deleting the game id and redirecting user to the gallery page once deleted
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/games/${id}/`);
      history.push("/gallery");
      toast.success("Game Deleted")
    } catch (err) {
      toast.error("Game could not be deleted please try again")
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
            {/* If the user is the game author and they are on the game page allow the user edit or delete the game */}
            {is_owner && gamePage && (
              <DropDown handleDelete={handleDelete} handleEdit={handleEdit}/>
            )}
          </div>
        </Media>
      </Card.Body>
      <div>
        <h3 className={`text-center ${appStyles.Headings}`}>{title}</h3>
        <p className={`text-center p-4 ${appStyles.Text}`}>{description}</p>
        
      </div>
      <Image className="d-none d-md-block col-lg-4 d-flex align-self-center pb-3" src={image} alt={title} />
       
    </Card>
  );
};


export default GameDetail;