import React, { useState } from "react";

import { axiosReq } from "../../api/AxiosDefaults";

import { useRedirect } from "../../hooks/useRedirect";

import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { useEffect } from "react";
import GameDetail from "./GameDetail";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import Asset from "../../components/Asset";

import appStyles from '../../App.module.css'


function GameLists() {
    // Setting the games as an empty array called results which will be mapped over later
    const [games, setGames] = useState({ results: [] });
    const currentUser = useCurrentUser();
    useRedirect("loggedOut");

     // Fetching the games to help the user changing the game field
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const { data } = await axiosReq.get(`/games/`);
                setGames(data);
            } catch (err) {
                window.location.reload()
            }
        };

        fetchGames()
    }, []);



    return (
        <div>
            <div className="col-12 col-lg-10 border mb-5">
                <h3 className={`text-center ${appStyles.Headings}`}>Games List</h3>
                {/* Using an infinite scroll componet to also map over the games in the list and showcase them on the page */}
                {games.results.length ? (
                <InfiniteScroll
                  children={games.results.map((game) => (
                    <GameDetail key={game.id} {...game} setGames={setGames} gamePage />
                  ))}
                  dataLength={games.results.length}
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