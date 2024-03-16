import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import imageone from "../assets/images/12c0830f-aa27-4843-993d-b440aa389991.jpeg"
import menu from "../assets/images/menu.png"
import recom_image from "../assets/images/programming-doodle-on-blue-background.jpg"




function Navbar() {

    return (
      <>
        <div class=" Udemy__Header">
  
          <div class="Udemy__s1">
  
            <h1 class="Udemy__s1__1"> Udemy</h1>
  
          </div>
  
          <div class="Udemy__s2">
  
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} />
            <input type="text" placeholder="Search for anything here. Tech, Business, Art....."></input>
  
          </div>
  
          <div class="Udemy__s3">
  
            <h4 class="Udemy__s3__1"> Trending Courses</h4>
            <div class="MyLearning">
              <h4 class="Udemy__s3__2">My Learning</h4>
              <div class="myLearning__s1">
                <p> You did not purchase anything yet </p>
  
  
              </div>
  
            </div>
            <FontAwesomeIcon icon={faUser} style={{ color: '#00040a' }} />
            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#00060f' }} />
            <FontAwesomeIcon icon={faBell} style={{ color: '#000205' }} />
  
  
          </div>
          <div class="Udemy__s4">
  
            <img src={menu} alt=""></img>
          </div>
  
        </div>
  
      </>
    )
  }
  
  
  function Categories() {
    return (
  
      <>
        <div class="Udemy__categories">
          <p>Development</p>
          <p>Business</p>
          <p>IT & Software</p>
          <p>Personal Development</p>
          <p>Design</p>
          <p>Marketing</p>
  
  
        </div>
      </>
    )
  }
  
  function Udemy_image() {
    return (
      <>
        <div class="Udemy__img">
  
          <img src={imageone} alt="Sale Image"></img>
  
          <div class="Udemy__sale__offer">
  
            <h2>Udemy Flash offer! 24 hours to save</h2>
            <p>Get the top Courses for just 499. Just one day to save but a liftime to learn</p>
  
  
          </div>
        </div>
      </>
    )
  }
  
  function Recommented() {
    return (
      <>
  
        <div class="Udemy__recomm__">
  
          <h1 class="Udemy__recomm__title"> Recommended for you</h1>
          <p> Pick the best fit</p>
  
          <div class="Udemy__courses">
  
            <div class="Udemy__courses__1">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
            <div class="Udemy__courses__2">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8 ⭐⭐⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
            <div class="Udemy__courses__3">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
  
            <div class="Udemy__courses__4">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
  
          </div>
        </div>
      </>
  
    )
  }
  
  
  function Topics() {
  
    return (
      <>
        <div class="Udemy__topics__section">
  
          <h1 class="Udemy__topics__title">Topics recommended for you</h1>
  
          <div class="Udemy__topics">
            <p>Website</p>
            <p>Javascript</p>
            <p>Android</p>
            <p>iOS</p>
            <p>Data Analyst</p>
            <p>Software Testing</p>
            <p>Cloud</p>
            <p>Full Stack Development</p>
  
  
  
          </div>
        </div>
      </>
    )
  }
  
  
  function Popular() {
    return (
      <>
  
        <div class="Udemy__popular__section">
          <div class="Udemy__popular__title">
            <h1> Most Popular </h1>
            <p> Pick the best fit</p>
          </div>
  
          <div class="Udemy__popular__courses">
  
            <div class="Udemy__popular__courses__1">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
            <div class="Udemy__popular__courses__2">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8 ⭐⭐⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
            <div class="Udemy__popular__courses__3">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
  
            <div class="Udemy__popular__courses__4">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
            </div>
  
            <div class="Udemy__popular__courses__5">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
            <div class="Udemy__popular__courses__6">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
            <div class="Udemy__popular__courses__7">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
            <div class="Udemy__popular__courses__8">
              <img src={recom_image}></img>
              <h2>2023 Python Data</h2>
              <p>Visualisation Masterclass</p>
              <p>Col Steele</p>
              <p> 4.8⭐</p>
              <p>&#x20b9; 499 <del> 1999</del> </p>
  
  
            </div>
          </div>
  
  
        </div >
      </>
    )
  }
  
  function Footer() {
    return (
      <>
        <div class="Udemy__footer__section">
  
          <div class="Udemy__footer__s1">
            <div class="Section__1">
              <p>Udemy Business</p>
              <p>Teach on Udemy</p>
              <p>Get the app</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
  
            <div class="Section__2">
              <p>Careers</p>
              <p>Blog</p>
              <p>Help and Support</p>
              <p>Affilate </p>
              <p>Investers</p>
            </div>
  
  
          </div>
  
          <div class="Udemy__footer__s2">
  
            <h1>Udemy</h1>
            <p>2023 Udemy, Inc</p>
  
          </div>
  
        </div>
      
      
      </>
    )
  }

  
  export {Navbar, Categories, Udemy_image, Recommented, Topics, Popular, Footer}