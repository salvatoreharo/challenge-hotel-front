import React from "react";
import UsersAPI from "../api";
import { Link } from "react-router-dom";

const mapUser = url =>
    UsersAPI.all().map(u => (
        <li key={u.id}>
            <Link to={`${url}/${u.id}`}>{u.name}</Link>
        </li>
    ));

const AllUsers = ({ match }) => (
    <div>
        <ul>{mapUser(match.url)}</ul>
    </div>
);

export default AllUsers;
