import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import Game from './Game';


function GameLists() {
  const { id } = useParams()
  const [game, setGame] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: game }] = await Promise.all([
          axiosReq.get(`/games/`),
        ]);
        setGame({ results: [game] });
        console.log(game)

      } catch (err) {
        console.log(err)
      };


    }
    handleMount();
  }, [id]);

  return (
    <Row>
      <Col>
        <Game {...game.results[0]} setGame={setGame} gamePage />
      </Col>
    </Row>
  );
}

export default GameLists