import React, { useState } from "react";

import { axiosReq } from "../../api/AxiosDefaults";

import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { useEffect } from "react";
import GameDetail from "./GameDetail";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import Asset from "../../components/Asset";

import appStyles from '../../App.module.css'


function GameLists() {
    const [games, setGames] = useState({ results: [] });
    const currentUser = useCurrentUser();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const { data } = await axiosReq.get(`/games/`);
                setGames(data);
                console.log(data)
            } catch (err) {
                console.log(err);

            }
        };

        fetchGames()
    }, []);



    return (
        <div>
            <div className="col-12 col-lg-10 border mb-5">
                <h3 className={`text-center ${appStyles.Headings}`}>Games List</h3>
                {games.length ? (
                <InfiniteScroll
                  children={games.map((game) => (
                    <GameDetail key={game.id} {...game} setGames={setGames} />
                  ))}
                  dataLength={games.length}
                  loader={<Asset spinner />}
                  hasMore={!!games.next}
                  next={() => fetchMoreData(games, setGames)}
                />
                ) : currentUser ? (
                    <span>No Games to show</span>
                ) : (
                    <span>No Games ... yet</span>
                )}

            </div>


        </div>
    );
}

export default GameLists;