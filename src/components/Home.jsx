import React from 'react';
import Friends from '../images/Friends.png';
import Family from '../images/Family.png';
import Partner from '../images/Partner.png';
import AfterHeroColumn1 from '../images/AfterHeroColumn1.png';
import AfterHeroColumn2 from '../images/AfterHeroColumn2.png';
import AfterHeroColumn3 from '../images/AfterHeroColumn3.png';
import AfterHeroColumn4 from '../images/AfterHeroColumn4.png';

const Home = () => {
  return (
    <div className="my-1">
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade p-1 mb-1 bg-light text-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="5000"
            style={{ height: '95vh' }}
          >
            <img
              src={Friends}
              className="d-block w-100 object-fit-fill border rounded"
              alt="Friends"
              style={{ height: '95vh' }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                class="fs-1 fw-bolder font-monospace text-dark text-bg-light p-2 border rounded"
                style={{ opacity: '0.5' }}
              >
                Less stress when share expenses with Friends.
              </h5>
              <p className="fs-3 text-dark-emphasis">
                Keep track of your shared expenses and balances with housemates,
                trips, groups, friends, and family.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src={Family}
              className="d-block w-100 object-fit-fill border rounded"
              alt="Family"
              style={{ height: '95vh' }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                class="fs-1 fw-bolder font-monospace text-success-emphasis text-bg-light p-2 border rounded"
                style={{ opacity: '0.6' }}
              >
                Less stress when share expenses with Family.
              </h5>
              <p className="fs-3 text-dark-emphasis">
                Keep track of your shared expenses and balances with housemates,
                trips, groups, friends, and family.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src={Partner}
              className="d-block w-100 object-fit-fill border rounded"
              alt="Partner"
              style={{ height: '95vh' }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                class="fs-1 fw-bolder font-monospace text-danger-emphasis text-bg-light p-2 border rounded"
                style={{ opacity: '0.5' }}
              >
                Less stress when share expenses with Partner.
              </h5>
              <p className="fs-3 text-dark-emphasis">
                Keep track of your shared expenses and balances with housemates,
                trips, groups, friends, and family.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="mx-3 text-center">
        <div class="row row-cols-2">
          <div class="col border p-3 bg-secondary text-white">
            <p className="fs-4 fw-semibold">Track balances</p>
            <p className="fs-6">
              Keep track of shared expenses, balances, and who owes who.
            </p>
            <img src={AfterHeroColumn1} className="h-50" />
          </div>
          <div class="col border p-3 bg-success text-white">
            <p className="fs-4 fw-semibold">Organize expenses</p>
            <p className="fs-6">
              Split expenses with any group: trips, housemates, friends, and
              family.
            </p>
            <img src={AfterHeroColumn2} />
          </div>
          <div class="col border p-3 bg-danger-subtle text-danger-emphasis">
            <p className="fs-4 fw-semibold">Add expenses easily</p>
            <p className="fs-6">
              Quickly add expenses on the go before you forget who paid.
            </p>
            <img src={AfterHeroColumn3} />
          </div>
          <div class="col border p-3 bg-secondary text-white">
            <p className="fs-4 fw-semibold">Pay friends back</p>
            <p className="fs-6">
              Settle up with a friend and record any cash or online payment.
            </p>
            <img src={AfterHeroColumn4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
