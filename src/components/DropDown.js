import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router";

// Setting the style of the drop down menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fas fa-ellipsis"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));


// Using the handleEdit, handleDelete functions that will be accessed from the post detail component
export const DropDown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown  className="mt-auto" drop="down">
            <Dropdown.Toggle as={ThreeDots}  />

            <Dropdown.Menu
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    onClick={handleEdit}
                    aria-label="edit"

                >
                    <i className="fas fa-edit" />
                Edit</Dropdown.Item>
                <Dropdown.Item
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="fas fa-trash-alt" />
                Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

// Setting the profile edit dropdwon to have the argument of Id which will target the profile based on the users id
export const ProfileEditDropdown = ({ id }) => {
    const history = useHistory();
    return (
      <Dropdown className={`ml-auto px-3`} drop="left">
        <Dropdown.Toggle as={ThreeDots} />
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/username`)}
            aria-label="edit-username"
          >
            <i className="far fa-id-card" />
            change username
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="edit-password"
          >
            <i className="fas fa-key" />
            change password
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
};