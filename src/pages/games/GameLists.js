import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { axiosReq } from '../../api/AxiosDefaults'


function GameLists() {
  const {id} = useParams()
  const [game, setGame] = useState({results: []});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{data: game}] = await Promise.all([
          axiosReq.get(`/games/${id}`),
        ]);
        setGame({ results: [game]});
        console.log(game)

      } catch (err) {
        console.log(err)
      };

      
    }
    handleMount();
  }, [id]);
  return (
    <div>GameLists</div>
  )
}

export default GameLists