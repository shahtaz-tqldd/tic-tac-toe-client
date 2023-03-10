import { createBrowserRouter } from "react-router-dom";
import Game from "../pages/Game";
import GameBoard from "../pages/GameBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/game',
        element: <Game />
    },
    {
        path: '/games/board/:id',
        element: <GameBoard />,
        loader: ({ params }) => fetch(`https://tic-toe-backend.vercel.app/games/board/${params.id}`)
    },
])