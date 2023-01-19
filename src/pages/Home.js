import React from "react";

// add image
import finaleee from "../assets/orchidAssets/finaleee.png";
import thosss from "../assets/orchidAssets/thosss.png";
import kkkkkkkkkkkkkkkk from "../assets/orchidAssets/kkkkkkkkkkkkkkkk.png";
import etytr from "../assets/orchidAssets/etytr.jpg";
import image_1 from "../assets/images/image_1.jpg";
import image_2 from "../assets/images/image_2.jpg";
import image_3 from "../assets/images/image_3.jpg";
import image_4 from "../assets/images/image_4.jpg";
import image_5 from "../assets/images/image_5.jpg";
import image_6 from "../assets/images/image_6.jpg";
import image_7 from "../assets/images/image_7.jpg";
import image_8 from "../assets/images/image_8.jpg";
import image_9 from "../assets/images/image_9.jpg";
import image_10 from "../assets/images/image_10.jpg";
import bg_1 from "../assets/images/bg_1.jpg";
import bg_2 from "../assets/images/bg_2.jpg";
import person_1 from "../assets/images/person_1.jpg";
import person_2 from "../assets/images/person_2.jpg";
import person_3 from "../assets/images/person_3.jpg";

// import videos
import video_1 from "../assets/orchidAssets/0000-0250.mp4";

export default function Home() {
  return (
    <>
      <section id="home" className="video-hero js-fullheight">
        <div className="overlay"></div>
        <a
          className="player"
          data-property="{videoURL:'https://www.youtube.com/watch?v=ITUid-bDsl8',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"
        ></a>
        <div className="container" style={{ paddingBottom: "84px" }}>
          <div className="row js-fullheight justify-content-center d-flex align-items-center">
            <div className="col-md-8">
              <div className="text text-center">
                <span className="subheading">Welcome to</span>
                <h2>NAWRES BENSALAH'S PORTFOLIO </h2>
                <h3 className="mb-4">Freelance 3D Artist AKA " Orchid "</h3>
                <p>
                  <a
                    href="https://orchids0nacid.wixsite.com/portfolioorchids/about-6"
                    className="btn btn-primary py-3 px-4"
                  >
                    View my Bio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-featured-model">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${etytr})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Retro Dive </a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Retro Dive <br />
                        <span>Render</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${finaleee})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Soda Can</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Soda Can
                        <br />
                        <span>Render</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${thosss})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Abstract</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Abstract
                        <br />
                        <span>Render</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${kkkkkkkkkkkkkkkk})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Flip Phone</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Flip Phone
                        <br />
                        <span>Render</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                      <div className="box">
                        <p></p>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-about-section">
        <div className="container-fluid px-0">
          <div className="row d-md-flex text-wrapper">
            <div>
              <video controls loop width="750" height="600" autoPlay="true">
                <source src={video_1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text-inner pl-md-5">
                <span className="subheading">Hello!</span>
                <h3 className="heading">The Wedding Project</h3>
                <p>
                  Commissioned work for The Wedding Project at the Alserkal
                  Avenue Cultural Center in Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="services ftco-animate text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-quality"></span>
                </div>
                <div className="info mt-4">
                  <h3 className="mb-4">Fashion Shows</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services ftco-animate text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-megaphone"></span>
                </div>
                <div className="info mt-4">
                  <h3 className="mb-4">Corporate Events</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services ftco-animate text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-photo-camera"></span>
                </div>
                <div className="info mt-4">
                  <h3 className="mb-4">Commercial Photo Shots</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services ftco-animate text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-shopping-bag"></span>
                </div>
                <div className="info mt-4">
                  <h3 className="mb-4">Exhibitions/Trade Shows Shows</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-fluid px-4">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-3 d-flex align-items-center ftco-animate">
              <div className="heading-section text-center">
                <h2 className="">Our Tops Model's</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_1})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Andrea</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Andrea
                        <br />
                        <span>Smith</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_2})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Cassy</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Cassy
                        <br />
                        <span>Tailor</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_3})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Angela</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Angela
                        <br />
                        <span>Bocks</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_4})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">May</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        May
                        <br />
                        <span>Doe</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_5})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Nicole</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Nicole
                        <br />
                        <span>Wall</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_6})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Jannah</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Jannah
                        <br />
                        <span>Tan</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_7})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Mariel</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Mariel
                        <br />
                        <span>Rivera</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_8})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Maria</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Maria
                        <br />
                        <span>Corazon</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_9})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Ozawa</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Ozawa
                        <br />
                        <span>Smith</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${image_10})` }}
                >
                  <div className="name text-center">
                    <h3>
                      <a href="model-single.html">Maine</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="model-single.html">
                        Maine
                        <br />
                        <span>Mendoza</span>
                      </a>
                    </h3>
                    <div className="d-flex models-info">
                      <div className="box">
                        <p>Height</p>
                        <span>185</span>
                      </div>
                      <div className="box">
                        <p>Bust</p>
                        <span>79</span>
                      </div>
                      <div className="box">
                        <p>Waist</p>
                        <span>40</span>
                      </div>
                      <div className="box">
                        <p>Hips</p>
                        <span>87</span>
                      </div>
                      <div className="box">
                        <p>Shoe</p>
                        <span>40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center ftco-animate">
              <div className="btn-view">
                <p>
                  <a href="model.html" className="btn btn-white py-3 px-5">
                    View more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5 heading-section text-center ftco-animate">
              <span className="subheading">Blog</span>
              <h2 className="mb-4">Recent Blog</h2>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia{" "}
              </p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry bg-dark align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${image_1})` }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">May 17, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-3">
                    <a href="#">Asia's Next Top Model</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry bg-dark align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${image_2})` }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">May 17, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-3">
                    <a href="#">Asia's Next Top Model</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry bg-dark align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${image_3})` }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">May 17, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-3">
                    <a href="#">Asia's Next Top Model</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="ftco-section testimony-section img"
        style={{ backgroundImage: `url(${bg_2})`, marginTop: "100px" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-8 ftco-animate">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${person_1})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p className="name">Mike Lewis</p>
                      <span className="position">Architect</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${person_2})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Architect</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${person_3})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Architect</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${person_3})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-appointment ftco-section">
        <div className="overlay"></div>
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-md-8 mb-5 heading-section text-center ftco-animate">
              <span className="subheading">Stylistic</span>
              <h2 className="mb-4">Contact Us</h2>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia{" "}
              </p>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-4">
              <div className="row"></div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+216 50418677</a>
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Email:</span>{" "}
                  <a href="nawres.bs24@gmail.com">nawres.bs24@gmail.com</a>
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Website:</span> <a href="#">orchids0nacid.com</a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-8 appointment ftco-animate">
            <form action="#" className="appointment-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-me-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-me-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-me-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your City"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send A Message"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </section>
      {/* <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-fluid px-0">
          <div className="row no-gutters d-md-flex align-items-center">
            <div className="col-md-12 d-flex align-self-stretch">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ftco-quote ftco-section ftco-animate">
        <div className="container">
          <div className="row d-flex">
            <div
              className="col-md-6 req-quote py-5 text-center align-items-center img"
              style={{ backgroundImage: `url(${bg_2})` }}
            >
              <h3 className="ml-md-3">Become A Model?</h3>
              <span className="ml-md-3">
                <a href="#">Call us now to know how!</a>
              </span>
            </div>
            <div
              className="col-md-6 req-quote py-5 text-center align-items-center img"
              style={{ backgroundImage: `url(${bg_1})` }}
            >
              <h3 className="ml-md-3">Model Courses</h3>
              <span className="ml-md-3">
                <a href="#">Know more</a>
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
