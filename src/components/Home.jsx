import React from 'react';
import Friends from '../images/Friends.png';
import Family from '../images/Family.png';
import Partner from '../images/Partner.png';
import backgroundImage1 from '../images/backgroundImage1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            color: '#242038',
          }}
        >
          <div className="carousel-item active">
            <div className="row">
              <div
                className="col text-left d-flex flex-column"
                style={{
                  margin: '10rem 5rem',
                }}
              >
                <h1 className="text-wrap fs-1 fw-bolder lh-sm">
                  Less stress when sharing expenses with Friends.
                </h1>
                <p className="text-wrap fs-5 lh-sm">
                  Track shared expenses, split bills, and stay on top of your
                  finances with our easy-to-use platform. Whether you're
                  managing household costs, planning a trip, or sharing a meal,
                  ShareIn helps you keep things fair and organized.
                </p>
                <Link to="/signup">
                  <button className="btn btn-success" style={{ width: '6rem' }}>
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="col">
                <img src="" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div
                className="col text-left d-flex flex-column"
                style={{
                  margin: '10rem 5rem',
                }}
              >
                <h1 className="text-wrap fs-1 fw-bolder lh-sm">
                  Less stress when sharing expenses with Family.
                </h1>
                <p className="text-wrap fs-5 lh-sm">
                  Track shared expenses, split bills, and stay on top of your
                  finances with our easy-to-use platform. Whether you're
                  managing household costs, planning a trip, or sharing a meal,
                  ShareIn helps you keep things fair and organized.
                </p>
                <Link to="/signup">
                  <button className="btn btn-success" style={{ width: '6rem' }}>
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="col">
                <img src="" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div
                className="col text-left d-flex flex-column"
                style={{
                  margin: '10rem 5rem',
                }}
              >
                <h1 className="text-wrap fs-1 fw-bolder lh-sm">
                  Less stress when sharing expenses with Partner.
                </h1>
                <p className="text-wrap fs-5 lh-sm">
                  Track shared expenses, split bills, and stay on top of your
                  finances with our easy-to-use platform. Whether you're
                  managing household costs, planning a trip, or sharing a meal,
                  ShareIn helps you keep things fair and organized.
                </p>
                <Link to="/signup">
                  <button className="btn btn-success" style={{ width: '6rem' }}>
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="col">
                <img src="" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
