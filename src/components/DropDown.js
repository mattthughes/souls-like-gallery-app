import React from "react";
import Dropdown from "react-bootstrap/Dropdown";


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

export const DropDown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown  className="mt-auto" drop="up">
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