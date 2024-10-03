import "./rightBar.scss"
import sampleIm from "/home/yosef/Desktop/react folders/React_Social_Media_Project/src/pages/images/image1.jpg";

const RightBar = () => {
    return (
        <div className="rightBar">
            <span>Suggestions For You</span>
            <div className="container">
              <div className="item">
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <span>Jone Doe</span>
                    </div>
                    <div className="buttons">
                        <button>follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <span>Jone Doe</span>
                    </div>
                    <div className="buttons">
                        <button>follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
              </div>
              <div className="item" >
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <p>
                        <span>Jone Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <p>
                        <span>Jone Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <p>
                        <span>Jone Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <p>
                        <span>Jone Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
              </div>
              <div className="item">
                <span>Online Friends</span>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src={sampleIm} alt="" />
                        <div className="online" />
                        <span>Jone Doe</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default RightBar