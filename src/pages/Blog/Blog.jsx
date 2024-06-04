import React, { useEffect, useState } from "react";
import axios from 'axios';
import FAQ from "../../components/FAQ";
import img1 from '../../assets/MicrosoftTeams-image.png';
import img2 from '../../assets/Ultra realistic full body photo of a French male m (2).jpg';
import img3 from '../../assets/Ultra realistic full body photo of a French male m.jpg';
import img4 from '../../assets/Photo ultra définition.jpg';
import img5 from '../../assets/Photo ultra définition (1).jpg';
import img6 from '../../assets/Ultra realistic full body photo of a French male m (1).jpg';
import img7 from '../../assets/best-deal3-removebg-preview.png';
import img8 from '../../assets/A light blue skirt set with an A-line ankle-length (1).jpg';
import img9 from '../../assets/The indian woman wearing a black dress is posing i.jpg';
import img10 from '../../assets/happy alien. 25 year old male.jpg';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://minitgo.com/api/fetch_blog.php");
                setBlogs(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <header className="py-6 bg-white shadow">
                <div className="container flex items-center justify-between px-4 mx-auto">
                    <h1 className="text-3xl font-bold">Minitgo</h1>
                </div>
            </header>

            <div className="container d-flex flex-column">
                <div className="mx-auto image-container" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <img src={img1} alt="xd" style={{ width: '100%', display: 'block' }} />
                    <div className="text-overlay" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                        <h4 className="fs-1" style={{ color: 'white', margin: '0' }}>MINITGO</h4>
                        <h1 className="fs-2" style={{ color: 'white', margin: '0' }}>Supreme Summer Sale</h1>
                        <p className="fs-3" style={{ color: 'white', margin: '0' }}>Up to 50% off</p>
                    </div>
                </div>

                <section className="mt-5 spring-sale">
                    <h2 className="mb-5 text-center">Spring Sale Per Category</h2>
                    <div className="row justify-content-center w-100">
                        <div className="text-center col-sm-4 col-md-2">
                            <img src={img6} alt="Outwear" className="img-fluid" style={{ height: '15rem', width: '15rem' }} />
                            <h4>Outwear</h4>
                        </div>
                        <div className="mx-4 text-center col-sm-4 col-md-2">
                            <img src={img8} alt="Trending" className="img-fluid" style={{ height: '15rem', width: '15rem' }} />
                            <h4>Trending</h4>
                        </div>
                        <div className="text-center col-sm-4 col-md-2">
                            <img src={img7} alt="Footwear" className="img-fluid" style={{ height: '15rem', width: '15rem' }} />
                            <h4>Footwear</h4>
                        </div>
                    </div>
                </section>

                <section className="mt-5 new-arrivals">
                    <h2 className="mb-5 text-center">New Arrivals</h2>
                    <div className="row">
                        <div className="col-sm-4 position-relative">
                            <img src={img4} alt="The Pantsuit Collection" className="img-fluid h-100 w-100" />
                            <div className="text-overlay" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                                <h3 style={{ color: 'white', margin: '0' }}>The Pantsuit Collection</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 position-relative">
                            <img src={img2} alt="Sharp and sweet Menswear" className="img-fluid h-100 w-100" />
                            <div className="text-overlay" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                                <h3 style={{ color: 'white', margin: '0' }}>Sharp and sweet Menswear</h3>
                            </div>
                        </div>
                        <div className="col-sm-4 position-relative">
                            <img src={img5} alt="Adventures Await Accessories" className="img-fluid h-100 w-100" />
                            <div className="text-overlay" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                                <h3 style={{ color: 'white', margin: '0' }}>Adventures Await Accessories</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 bestsellers">
                    <h2 className="mb-5 text-center">Bestsellers by Category</h2>
                    <div className="row justify-content-center w-100">
                        <div className="col-sm-4 col-md-2 position-relative">
                            <img src={img6} alt="Dresses" className="img-fluid" style={{ height: '13rem', width: '13rem' }} />
                            <h5 className="image-overlay" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Dresses</h5>
                        </div>
                        <div className="mx-4 col-sm-4 col-md-2 position-relative">
                            <img src={img3} alt="Knitwear" className="img-fluid" style={{ height: '13rem', width: '13rem' }} />
                            <h5 className="image-overlay" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Knitwear</h5>
                        </div>
                        <div className="col-sm-4 col-md-2 position-relative">
                            <img src={img9} alt="CropTops" className="img-fluid" style={{ height: '13rem', width: '13rem' }} />
                            <h5 className="image-overlay" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>CropTops</h5>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-2 visit-stores" style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                    <img src={img10} alt="Visit Our Physical Stores" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', color: 'white' }}>
                        <h2 style={{ margin: '0', fontSize: '40px', color: 'white' }}>Visit Our<br />Physical Stores</h2>
                        <button className="btn btn-md btn-primary">Visit</button>
                    </div>
                </section>

                <section className="p-0 mt-5 mb-2 rounded contact-us" id="foot" style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
                    <img src={img5} alt="Contact Us" style={{ width: '100%', height: 'auto', position: 'absolute', top: '40%', transform: 'translateY(-50%)' }} />
                    <div style={{ position: 'absolute', top: '10%', left: '0', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                        <h1 className="text-center text-white fw-bold fs-2 fs-lg-4" style={{ margin: '0', letterSpacing: "5px" }}>Need Anything?</h1>
                        <div className="pt-5 mt-4 contact-info">
                            <hr className="text-white hr" style={{ borderColor: 'white', width: '100%', margin: '0', opacity: "2.25" }} />
                            <div className="mt-5 text-center d-flex justify-content-around" style={{ color: 'white' }}>
                                <div>
                                    <h3 className="fs-5">FAQs</h3>
                                    <h4>Click here</h4>
                                </div>
                                <div>
                                    <h3 className="fs-5">Track My Parcel</h3>
                                    <h4>Click here</h4>
                                </div>
                                <div>
                                    <h3 className="fs-5">Email Address</h3>
                                    <h4>hello@gmail.com</h4>
                                </div>
                                <div>
                                    <h3 className="fs-5">Socials</h3>
                                    <h4>Great</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQ />
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    #foot {
                        margin-bottom: 0;
                    }
                }
                .image-container img {
                    object-fit: cover;
                }
                .text-overlay {
                    background: rgba(0, 0, 0, 0.5);
                    padding: 10px;
                }
                .contact-info div {
                    margin-top: 20px;
                }
                .contact-info hr {
                    margin-top: 20px;
                }
            `}</style>
        </>
    );
};

export default Blog;
