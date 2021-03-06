import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

export default function Sidebar({theme}) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className={"sidebar"+theme}>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Fandom</span>
        <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D7OAZFTISY3C5MXRSE4IYHLITY.jpg" alt=""
        />
        <p>
          Создан для написания своих рассказов.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
} 