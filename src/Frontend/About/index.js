import React from "react";

const Index = () => {
  return (
    <div className="load">
      {/* <div className="container header">
        <header className="header">
          <div className="goBack" href="javascript:void(0);" onclick="goBack()">
            <img src="/assets/img/icons/go-back.svg" width={14} alt="Go Back" />
          </div>
          <a href="https://oyorooms.com" className="logo">
            <img src="/assets/img/OYO-logo.svg" alt="OYO" />
          </a>
        </header>
      </div> */}
      <section className="banner flex headerPadding">
        <div className="container">
          <div className="row center">
            <div className="column-6 ">
              <h1>
                Our
                <br /> Mission
              </h1>
              <p>
                OYO is a global platform that empowers entrepreneurs and small
                businesses with hotels and homes by providing full stack
                technology that increases earnings and eases operations.
                Bringing affordable and trusted accommodation that guests can
                book instantly.
              </p>
            </div>
            <div className="column-6">
              <div className="banner-img">
                <img
                  src="https://assets.oyoroomscdn.com/Firstfold_final.png"
                  alt
                  width={645}
                  className
                />
                <div id="bannerpopup">
                  <a
                    href="#video-popup"
                    data-effect="mfp-zoom-in"
                    className="play-icon"
                  >
                    <img
                      src="/assets/img/icons/play-icon.svg"
                      alt="play"
                      width={24}
                    />
                  </a>
                </div>
                <div className="rocket">
                  <img src="/assets/img/rocket.png" alt width={80} />
                </div>
              </div>
              {/* Popup itself */}
              <div
                id="video-popup"
                className="white-popup mfp-with-anim mfp-hide"
              >
                <video controls controlslist="nodownload">
                  <source
                    src="https://assets.oyoroomscdn.com/OYO-Intro-2021.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="oyo-grid ">
        <div className="container boxWrapper">
          <div className="row center">
            <div className="column-6" />
            <div className="column-6">
              <div className="box-container">
                We strive to make the lives of our patrons easier by multiplying
                revenue channels and using our technological expertise to
                maximize demand.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="oyo-patron ">
        <div className="container">
          <h1>
            157K+ storefronts are using <br />
            our tech globally
          </h1>
          <div className="flex center">
            <div className="column-6">
              <ul className="list-wrapper">
                <li>For maximising revenue</li>
                <li>To build online presence across channels </li>
                <li>To reach more guests &amp; optimise experience</li>
                <li>For hassle-free operations </li>
                <li>
                  To build a brand loved by both travellers &amp; city dwellers{" "}
                </li>
              </ul>
            </div>
            <img
              src="https://assets.oyoroomscdn.com/img_oyoinfra_dweb.png"
              className="patronImage"
            />
          </div>
        </div>
      </section>
      <section className="timelines ">
        <div className="container">
          <h1>Our Story</h1>
          <div className="timeline">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-year={2013}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2013</span>
                        <p className="timeline-title">
                          Opens first OYO with our patron Rajesh Yadav at C68
                          South City 1, Gurugram, India
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2013</span>
                        <p className="timeline-title">Launched oyorooms.com</p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2014</span>
                        <p className="timeline-title">
                          Receives Series-A funding
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2015}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2015</span>
                        <p className="timeline-title">Launched the OYO App </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2015</span>
                        <p className="timeline-title">
                          Expanded to 100 cities and crossed 10,000 rooms
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2016</span>
                        <p className="timeline-title">
                          Expanded to Malaysia, first region outside India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2016}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2016</span>
                        <p className="timeline-title">
                          Introduced dynamic pricing to capitalize seasonality,
                          demand surges and special events.
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2016</span>
                        <p className="timeline-title">
                          Hit the one million checkin mark for the first time
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2017</span>
                        <p className="timeline-title">
                          Launched OYO Townhouse, a mid-market brand at
                          handpicked locations for discerning travellers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2018}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2018</span>
                        <p className="timeline-title">
                          Expanded outside of Asia - UK
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2018</span>
                        <p className="timeline-title">
                          Expanded to China and Indonesia{" "}
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2018</span>
                        <p className="timeline-title">
                          Launched OYO OS for property managers to ensure
                          hassle-free operations{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2019}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2018</span>
                        <p className="timeline-title">
                          Launched long stay rental service under “OYO Life”
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2018</span>
                        <p className="timeline-title">
                          Launched customer loyalty program “OYO Wizard”
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2019</span>
                        <p className="timeline-title">
                          Launched in US, Europe and Middle East
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2019}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2019</span>
                        <p className="timeline-title">
                          Launched OYO Lite, a lighter version of our consumer
                          app and Yo! Chat, automated customer service
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2019</span>
                        <p className="timeline-title">
                          Introduced OYO Workspaces - a well designed flexible
                          friendly co-working space
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2019</span>
                        <p className="timeline-title">
                          Acquired @Leisure group to enter vacation homes
                          business across 40 countries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2020}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2020</span>
                        <p className="timeline-title">
                          OYO has crossed the 50 million app downloads mark
                          globally
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2020</span>
                        <p className="timeline-title">
                          OYO launched Sanitised stays- a safety protocol for
                          all its hotels and homes
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2020</span>
                        <p className="timeline-title">
                          Launched Discover OYO, a low cost new user acquisition
                          engine
                        </p>
                      </div>
                    </div>
                    {/* <div class="column-4">
                        <div class="swiper-slide-content">
                            <span class="timeline-year">2020</span>
                            <p class="timeline-title">Over 1.5 crore safe booking with OYO after reopening of hotels
                            </p>
                        </div>
                    </div> */}
                  </div>
                </div>
                <div className="swiper-slide" data-year={2021}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2021</span>
                        <p className="timeline-title">
                          OYO app crossed 100 million download mark
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2021</span>
                        <p className="timeline-title">
                          Launched OTA powerplay, a subscription product patrons
                          can opt-in to boost storefronts’ rankings on popular
                          OTA channels
                        </p>
                      </div>
                    </div>
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2021</span>
                        <p className="timeline-title">
                          Launched VaccinAid, a feature that shows vaccination
                          status of the hotels’ staff on the OYO app
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-year={2021}>
                  <div className="row content-center">
                    <div className="column-4">
                      <div className="swiper-slide-content">
                        <span className="timeline-year">2021</span>
                        <p className="timeline-title">
                          Launched OYO360, a self onboarding platform for our
                          patrons
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </section>
      <section className="our-team ">
        <button type="button" id="moveLeft" className="btn-nav" />
        <div className="slider" id="mySlider">
          <div className=" team-wrapper">
            <h4 id="memberNameDes">Ritesh Agarwal</h4>
            <div className="description">
              <h4 id="memberName">Ritesh Agarwal</h4>
              <div className="details">
                <p>
                  OYO Hotels &amp; Homes was founded by Ritesh Agarwal, the
                  first resident Asian to be accepted to the Thiel Fellowship
                  (started by Paypal founder Peter Thiel). Travelling across
                  India at the age of 17, Ritesh stayed in more than 100 bed and
                  breakfasts, guest houses, and hotels to realize there was a
                  massive dearth of affordable and good-quality hotels in the
                  unbranded budget hotel category.
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/Ritesh_Agarwal_final1.png"
                width={400}
                alt="Ritesh Agarwal"
                srcSet
              />
            </div>
          </div>
          <div className=" team-wrapper">
            <h4 id="memberNameDes">Aditya Ghosh</h4>
            <div className="description">
              <div className="details">
                <h4 id="memberName">Aditya Ghosh</h4>
                <p>
                  Aditya Ghosh is a seasoned business leader with over 22 years
                  of experience. Aditya is currently a member of the Board of
                  Directors at OYO. Most recently, he was the CEO at OYO Hotels
                  &amp; Homes- India &amp; South Asia.
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/Aditya_Ghosh_final1.png"
                width={400}
                alt="Aditya Ghosh"
                srcSet
              />
            </div>
          </div>
          <div className=" team-wrapper">
            <h4 id="memberNameDes">Bejul Somaia</h4>
            <div className="description">
              <h4 id="memberName">Bejul Somaia</h4>
              <div className="details">
                <p>
                  Bejul Somaia is a Partner at Lightspeed India Partners LLP,
                  which advises Lightspeed Venture Partners, a global venture
                  firm with more than USD 7 billion under management.
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/Bejul_final1.png"
                width={400}
                alt="Bejul Somaia"
                srcSet
              />
            </div>
          </div>
          <div className=" team-wrapper">
            <h4 id="memberNameDes">Deepa Malik</h4>
            <div className="description">
              <h4 id="memberName">Deepa Malik</h4>
              <div className="details">
                <p>
                  Dr. Deepa Malik, Padma Shri, Khel Ratna &amp; Arjuna Awardee,
                  is India’s first paraplegic woman biker, swimmer, rallyist
                  &amp; India’s first ever female Paralympic medalist. She has
                  continually risen above all odds, while also enabling people
                  with disabilities through her foundation Wheeling Happiness.
                  She also serves as the President of the Paralympic Committee
                  of India and has led the most successful Paralympic Team in
                  Indian history at Tokyo 2020.
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/deepa_malik.png"
                width={400}
                alt="Deepa Malik"
                srcSet
              />
            </div>
          </div>
          <div className="team-wrapper">
            <h4 id="memberNameDes">Troy Alstead</h4>
            <div className="description">
              <h4 id="memberName">Troy Alstead</h4>
              <div className="details">
                <p>
                  Troy worked with the Starbucks Corporation for 24 years having
                  most recently served as Chief Operating Officer. He is also on
                  the Board of Topgolf Group Ltd, Harley-Davidson Inc, and Levi
                  Strauss &amp; Co.
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/Troy_Alstead_final.png"
                width={400}
                alt="Troy Alstead"
                style={{ height: "auto" }}
                srcSet
              />
            </div>
          </div>
          <div className="team-wrapper" id="lastMember">
            <h4 id="memberNameDes">W. Steve Albrecht</h4>
            <div className="description">
              <h4 id="memberName">Dr. W. Steve Albrecht</h4>
              <div className="details">
                <p>
                  Dr. W. Steve Albrecht:&nbsp;Steve is the former president of
                  the American Accounting Association and Association of
                  Certified Fraud Examiners and has served on boards of 10
                  corporates
                </p>
              </div>
            </div>
            <div className="team-member-photo">
              <img
                src="https://assets.oyoroomscdn.com/medium/SteveA_final.png"
                width={400}
                alt="W. Steve Albrecht"
                srcSet
              />
            </div>
          </div>
        </div>
        <button type="button" id="moveRight" className="btn-nav" />
      </section>
     
    </div>
  );
};

export default Index;
