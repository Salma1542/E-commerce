import slider from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364.jpg'

export default function Home() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide shadow-sm" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner ">
                <div className="carousel-item active "data-bs-interval="3000">
                    <img src={slider} className="d-block w-100" alt="Fresh Fruits" style={{height: '500px', objectFit: 'cover'}} />
                    <div className="carousel-caption d-none d-md-block custom-caption text-start">
                        <h5 className="display-4 fw-bold text-success">Fresh fruits <br/> & vegetable</h5>
                        <p className="fs-5 text-dark bg-light d-inline-block p-2 rounded shadow-sm">Fresh fruit, vegetable on our product</p>
                        <div className="mt-3">
                            <button className="btn btn-success btn-lg rounded-pill">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img src={slider2} className="d-block w-100" alt="Fresh Fruits" style={{height: '500px', objectFit: 'cover'}} />
                    <div className="carousel-caption d-none d-md-block custom-caption text-end">
                        <h5 className="display-4 fw-bold text-success">Fresh fruits <br/> & vegetable</h5>
                        <p className="fs-5 text-dark bg-light d-inline-block p-2 rounded shadow-sm">Fresh fruit, vegetable on our product</p>
                        <div className="mt-3">
                            <button className="btn btn-success btn-lg rounded-pill">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="3000">
                    <img src={slider3} className="d-block w-100" alt="Fresh Fruits" style={{height: '500px', objectFit: 'cover'}} />
                    <div className="carousel-caption d-none d-md-block custom-caption text-start">
                        <h5 className="display-4 fw-bold text-success">Fresh fruits <br/> & vegetable</h5>
                        <p className="fs-5 text-dark bg-light d-inline-block p-2 rounded shadow-sm">Fresh fruit, vegetable on our product</p>
                        <div className="mt-3">
                            <button className="btn btn-success btn-lg rounded-pill">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}