import React, { useRef, useState } from "react";
import "./teamCard.css";

const TeamCard = ({ person }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div className="card card-syan">
      <div className="card__border"></div>

      <div className="card_title__container flex flex-wrap">
        <img
          src={person.img}
          alt={person.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-lg mb-4"
        />

        <div>
          <h1 className="name ml-10 mt-10">{person.name}</h1>
          <p className="txt ml-10">{person.desc}</p>
        </div>
      </div>

      <hr className="line" />

      <ul className="card__list">
        {person.listing.map((item, index) => (
          <li className="card__list_item " key={index}>
            <span className="check">
              <svg
                className="check_svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                />
              </svg>
            </span>

            <span className="list_text">{item}</span>
          </li>
        ))}
      </ul>

      <button className="button">{person.role}</button>
    </div>
  );
};

export default TeamCard;
