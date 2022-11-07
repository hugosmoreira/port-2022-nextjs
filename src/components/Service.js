const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Web Development</div>
              <div className="text">
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-music" />
              </div>
              <div className="name">Mobile App Development</div>
              <div className="text">
                We develop mobile apps for iOS and Android using React Js
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-ad" />
              </div>
              <div className="name">Custom Software Development</div>
              <div className="text">
                We follow your CD CI to make sure we have everything in place
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">Game Development</div>
              <div className="text">
                Developing memorable and unique mobile android, ios and video
                games.
              </div>
            </div>
          </div>
          
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-mobile-alt" />
              </div>
              <div className="name">Android Application</div>
              <div className="text">
                Games, playing music, handle network transactions, interacting
                content etc.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
