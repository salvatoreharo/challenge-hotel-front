import React from "react";
import UsersAPI from "../api";
import { Link } from "react-router-dom";

const Profile = ({ match: { params: { id } } }) => {
    const user = UsersAPI.get(parseInt(id));
    if (!user) {
        return <div>Lo sentimos, el usuario fue encontrado</div>;
    }
    return (
        <div>
            <h1>
                {user.name} (id: {user.id})
            </h1>
            <h2>Proyecto: {user.project}</h2>
            <Link to="/users">Back</Link>
        </div>
    );
};

export default Profile;
