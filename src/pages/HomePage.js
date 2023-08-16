import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const HomePage = () => {
    return (
        <div>
            <Link to="/" className="home-button">
                <HomeIcon />
            </Link>
        </div>
    )
}
export default HomePage;