import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <div className="jumbotron d-flex">
            <img
                src="/images/logo.png"
                alt="Halcyon"
                className="img-thumbnail rounded-circle mr-3 d-none d-md-block d-lg-block"
                asp-append-version="true"
            />
            <div>
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">
                    Ducimus qui blanditiis praesentium voluptatum deleniti atque
                    cupiditate non provident, similique sunt in culpa qui
                    officia ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="text-right">
                    <Link
                        to="/account/register"
                        className="btn btn-primary btn-lg"
                    >
                        Get Started
                    </Link>
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <h2>Fusce condimentum</h2>
                <hr />
                <p>
                    In vel tincidunt elit, id pretium massa. Nullam rhoncus orci
                    nisl. Pellentesque in mi et eros porttitor sagittis quis at
                    justo. Sed ac faucibus enim, at tempus enim. Nunc gravida
                    accumsan diam ut maximus. Ut sed tellus odio. N am semper
                    blandit pretium. Suspendisse vitae elit turpis.
                </p>
            </div>

            <div className="col-lg-4">
                <h2>Voluptatum deleniti</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum sit amet ipsum nec dignissim. In aliquet, leo
                    non interdum sodales, tortor neque porta sem, eu vulputate
                    nunc leo mollis mauris. Mauris a efficitur lacus. Donec
                    elementum aliquet lectus sed vehicula.
                </p>
            </div>

            <div className="col-lg-4">
                <h2>Libero magna</h2>
                <hr />
                <p>
                    Nunc massa massa, scelerisque nec condimentum et, venenatis
                    faucibus dolor. Donec tortor lacus, consequat a commodo at,
                    lobortis in dolor. Donec mollis auctor lacus et fermentum.
                </p>
            </div>
        </div>
    </>
);

export default HomePage;
