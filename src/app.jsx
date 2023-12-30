import Desktopimg from "/src/images/image-hero-desktop.png";
import Mobileimg from '/src/images/image-hero-mobile.png';
import "/src/app.css";
import Databiz from '/src/images/client-databiz.svg';
import Audio from '/src/images/client-audiophile.svg';
import Meet from '/src/images/client-meet.svg';
import Market from '/src/images/client-maker.svg';

function App() {
  return (
    <>
      <div className="performance row-md">
        <aside className="col-md-4 order-md-2">
          <img src={Desktopimg} alt="dektop_img" className="desktop_img" />
          <img src={Mobileimg} alt="mobile_img" className="mobile_img" />
        </aside>
        <main className="col-md-7 order-md-1 ">
          <h1> Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div><button className="learn">Learn more</button></div>
          <div className="row logos">
          <img src={Databiz} alt="databiz" className="col  footer_logos"/>
          <img src={Audio} alt="audio" className="col footer_logos footer_audio"/>
          <img src={Meet} alt="meet" className="col footer_logos"/>
          <img src={Market} alt="market" className="col footer_logos"/>
          </div>
        </main>
      </div>
      
    </>
  );
}

export default App;
