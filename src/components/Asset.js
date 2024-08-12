import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

// Reusuable component that will be used to load posts, games, src will be used to display the avatar image, message to show a message if data is not returned
const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;