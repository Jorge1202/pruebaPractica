import React, {useState} from 'react';
import './styles/Home.css'

const Home = () => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('User')));

    return (
        <div className="Home">
            <h5>Hola {user.Name} {user.FatherLastName} {user.MotherLastName}</h5>
        </div>
    );
};

export default Home;