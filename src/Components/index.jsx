import React from "react";
import Mapimage from "../Imges/building.jpg";
export default function index() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        backgroundImage: `url(${Mapimage})`,
      }}
    >
      {/* Bgimage */}
      <div>
        {/* Zoomin/zoomout */}

        <div className="Parent_Layout">
          <div className="FirstLayout">
            {" "}
            <div className="Container_01">
              <div className="Layout_Container_01">
                {" "}
                <div>
                  <img
                    src="https://img.icons8.com/external-neu-royyan-wijaya/32/null/external-add-neu-interface-neu-royyan-wijaya-2.png"
                    alt="plusIcon"
                    style={{
                      marginTop: "6px",
                      width: "26px",
                    }}
                  />
                </div>
                <div
                  style={{
                    borderTop: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  <img
                    src="https://img.icons8.com/material-sharp/24/null/home-page.png"
                    alt="HomeIcon"
                  />
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/windows/32/null/minus-math.png"
                    alt="minusIcon"
                  />
                </div>
              </div>
            </div>
            <div className="icon_Building">
              <img
                src="https://img.icons8.com/sf-ultralight/25/null/building.png"
                alt="building"
                style={{
                  width: "50px",
                }}
              />
            </div>
            <div className="Container_02">
              <div className="Layout_Container_01">
                <div>3</div>
                <div
                  style={{
                    borderTop: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    borderBottom: "2px solid black",
                  }}
                >
                  1
                </div>
                <div>B</div>
              </div>
            </div>
          </div>
          <div className="SecondLayout">
            <div className="Container_03">
              <div className="Multibutton">
                <img
                  src="https://img.icons8.com/sf-ultralight/25/null/picture.png"
                  alt="ImageIcon"
                  style={{ width: "26px", height: "31px" }}
                />
              </div>
              <div className="Multibutton">
                <img
                  src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/null/external-equalizer-music-audio-anggara-glyph-anggara-putra.png"
                  alt="Equalizer"
                  style={{ width: "26px", height: "31px", marginTop: "6px" }}
                />
              </div>

              <div className="Multibutton_messageIcon">
                <img
                  src="https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-round-telegram-flat-icons-inmotus-design.png"
                  alt="MessageIcon"
                  style={{ width: "32px", height: "35px", marginTop: "6px" }}
                />
              </div>
              <div className="Multibutton">
                <img
                  src="https://img.icons8.com/ios/50/000000/search--v1.png"
                  alt="SearchIcon"
                  style={{ width: "26px", height: "31px", marginTop: "6px" }}
                />
              </div>
            </div>
            <div>
              <div className="Dropdown_bg">
                <select style={{ width: "170px", height: "40px" }}>
                  <option style={{ fontSize: "150%" }} value="actual value 1">
                    Display Text 1
                  </option>
                  <option style={{ fontSize: "150%" }} value="actual value 2">
                    Display Text 2
                  </option>
                  <option style={{ fontSize: "150%" }} value="actual value 3">
                    Display Text 3
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
