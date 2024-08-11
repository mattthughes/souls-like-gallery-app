import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";
import { DropDown } from "../../components/DropDown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { axiosRes } from "../../api/AxiosDefaults";

import { toast } from "react-toastify";

import Image from "react-bootstrap/Image";


import appStyles from '../../App.module.css'


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

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/games/${id}/`);
      history.push("/gallery");
      toast.success("Game Deleted")
    } catch (err) {
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
      <div>
        <h3 className={`text-center ${appStyles.Headings}`}>{title}</h3>
        <p className={`text-center p-4 ${appStyles.Text}`}>{description}</p>
        
      </div>
      <Image className="d-none d-md-block col-lg-4 d-flex align-self-center pb-3" src={image} alt={title} />
       
    </Card>
  );
};


export default GameDetail;