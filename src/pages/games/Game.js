import React from "react";

import { Card } from "react-bootstrap";

import styles from '../../styles/Game.module.css'





const Game = (props) => {
  const {
    title,
  } = props


  return (
    <Card className={styles.Card}>
      
      <div className="col-12">
        <ul>
          <li className={styles.Li}>{title}</li>
        </ul>
      </div>
       
    </Card>
  );
};


export default Game;