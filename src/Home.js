import React from 'react'

const Home = () => {
  return (
<div>
  <div className="site-header-wrap">
    {/* <div className="header-offerbar">
      <div className="container">
        <div className="marquee cntnt-grp">
          <p className="hide-1100">Get up to 15% OFF! On Authentic Ayurveda Products! Best Prices only on the brand store. Visit : <a href="https://store.jiva.com/" target="_blank">www.store.jiva.com</a></p>
          <p className="show-1100"><a href="tel:0129-4264323" style={{textAlign: 'left', float: 'left'}}>Call Us: 0129 4264323</a> <a href="https://store.jiva.com/" target="_blank" style={{textAlign: 'right', float: 'right'}}>Shop</a></p>
        </div>
      </div>
    </div> */}
    <header className="site-header">
      <div className="container">
        <div className="row rowflex">
          <div className="xlg-col-20 logo-clmn">
            <div className="logo-grp">
              <a href="/"><img src="/rajveda-logo.png" alt="Rajveda" width={165} className='img-fluid' /></a>
            </div>
            <div className="mtrigger-icons show-1100">
              <div className="search">Search</div>
              <div className="mnav-trigger"><span /><span /><span /></div>
            </div>
          </div>
          <div className="xlg-col-80 nav-clmn">
            <div className="nav-wrapper">
              <div className="mnav-trigger show-1100"><span /><span /><span /></div>
              <nav className="navigation">
                <ul>
                  {/* <li className="with-children">
                    <a href="diseases-ayurveda.html">Diseases</a>
                    <ul className="children-list">
                      <li><a href="diseases-ayurveda/index.html">Disease &amp; Ayurveda</a></li>
                      <li><a href="diseases-ayurveda/autoimmune.html">Autoimmune Disease</a></li><li><a href="diseases-ayurveda/childs-health.html">Child Health Issues</a></li><li><a href="diseases-ayurveda/endocrine/diabetes.html">Diabetes</a></li><li><a href="diseases-ayurveda/digestive.html">Digestive Disorders</a></li><li><a href="diseases-ayurveda/endocrine.html">Endocrine System</a></li><li><a href="diseases-ayurveda/ent.html">ENT</a></li><li><a href="diseases-ayurveda/gynae.html">Gynaecology</a></li><li><a href="diseases-ayurveda/hair-and-skin.html">Hairfall &amp; Skin</a></li><li><a href="diseases-ayurveda/cardio.html">Heart Disease</a></li><li><a target="_blank" href="https://ayurveda.jiva.com/infertility-program/">Infertility</a></li><li><a href="diseases-ayurveda/joint.html">Join &amp; Muscle Pain</a></li><li><a href="diseases-ayurveda/liver-gall.html">liver &amp; Gall</a></li><li><a href="diseases-ayurveda/neurological.html">Neurology</a></li><li><a href="diseases-ayurveda/endocrine/obesity.html">Obesity</a></li><li><a href="diseases-ayurveda/oncology.html">Oncology (Cancer)</a></li><li><a href="diseases-ayurveda/psychological.html">Psychological</a></li><li><a href="diseases-ayurveda/respiratory.html">Respiratory Problems</a></li><li><a href="diseases-ayurveda/sexual.html">Sexual Problems</a></li><li><a href="diseases-ayurveda/endocrine/thyroid.html">Thyroid Disorders</a></li><li><a href="diseases-ayurveda/urinary.html">Urinary Disorders</a></li>									<li><a href="index.html">Other Common Diseases</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/autoimmune">Autoimmune </a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/cardio">Cardio</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/childs-health">Child Health</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/digestive">Digestive </a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/endocrine">Endocrine </a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/ent">Eye, ENT &amp; Oral</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/gynae">Gynae</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/hair-and-skin">Hair And Skin</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/joint">Joint pain</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/liver-gall">Liver &amp; Gall</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda">Most Common Diseases</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/neurological">Neurological</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/oncology">Oncology </a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/psychological">Psychological</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/respiratory">Respiratory</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/sexual">Sexual</a></li>
                      <li><a href="https://www.jiva.com/diseases-ayurveda/urinary">Urinary</a></li>
                    </ul>
                  </li> */}
                  <li><a href="/">Home</a></li>
                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div className="search-open">
    <div className="container">
      <div className="input">
        <div className="typeahead__container">
          <div className="typeahead__field">
            <div className="typeahead__query search-disease">
              <img src="jiva/img/search-big.png" alt="Diseases Search" title="Diseases Search" />
              <input className="js-typeahead" placeholder="Search" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="close"><img src="jiva/img/close-btn.png" alt="Close Button" title="Close" /></div>
  </div>
</div>

  )
}

export default Home