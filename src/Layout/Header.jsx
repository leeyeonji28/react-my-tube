import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100 border-b shadow-md">
        <div className="navbar-start">
          <div
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            {/* <Link to="/"> */}
            <FaYoutube className="inline-block mr-2 text-3xl text-red-500" />
            MyTube
            {/* </Link> */}
          </div>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content right-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div>
                  <Link to="/about">Profile</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to="/">Setting</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to="/about">Logout</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
