const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-baseball-ball" />
              </div>
              <div className="name">Brazilian Jiu-Jitsu</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-campground" />
              </div>
              <div className="name">Guitar</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-chess-knight" />
              </div>
              <div className="name">Dota 2</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-headphones" />
              </div>
              <div className="name">Design & Video Editing</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
