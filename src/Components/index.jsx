import React, { useEffect, useState } from "react";
import Mapimage from "../Imges/building.jpg";
import Abuilding from "../Imges/Abuilding.jpg";
import Bbuilding from "../Imges/Bbuild.jpg";
import Cbuilding from "../Imges/cbuild.jpg";
import Dbuilding from "../Imges/Dbuild.png";
import Ebuilding from "../Imges/Eimage.jpg";
import Zoom from "../Container/Zoom";
import Multibutton from "../Container/Multibutton";
import Dropdown from "../Container/Dropdown";
/* eslint-disable */
export default function index() {
  const [dropdown, setDropdown] = useState({ Buildingvalue: "chooseBuilding" });

  const handleAddtodo = (e) => {
    setDropdown(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  const [dynamicImage, setDynamicImage] = useState(Mapimage);

  const getImage = (e) => {
    useEffect(() => {
      console.log(e, "Dropdown");

      /*   if (e == "buildA") {
        return setDynamicImage(Abuilding);
      } else if (e == "buildB") {
        return setDynamicImage(Bbuilding);
      } else if (e == "buildC") {
        return setDynamicImage(Cbuilding);
      } else if (e == "buildD") {
        return setDynamicImage(Dbuilding);
      } else if (e == "buildE") {
        return setDynamicImage(Ebuilding);
      } else if (e == "chooseBuilding") {
        return setDynamicImage(Mapimage);
      } */
      const objectOperation = {
        buildA: () => setDynamicImage(Abuilding),
        buildB: () => setDynamicImage(Bbuilding),
        buildC: () => setDynamicImage(Cbuilding),
        buildD: () => setDynamicImage(Dbuilding),
        buildE: () => setDynamicImage(Ebuilding),
        chooseBuilding: () => setDynamicImage(Mapimage),
      };

      // console.log(objectOperation[e], "op");
      return objectOperation[e]();
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        backgroundImage: `url(${dynamicImage})`,
        transform: "scale(1,1)",
      }}
    >
      {/* Bgimage */}
      <div>
        {/* Zoomin/zoomout */}

        <div className="Parent_Layout">
          <div>
            <Zoom></Zoom>
          </div>
          <div className="SecondLayout">
            <Multibutton></Multibutton>
            <div>
              <div className="Dropdown_bg">
                <Dropdown
                  dropdown={dropdown.Buildingvalue}
                  handlechange={handleAddtodo}
                  getImage={getImage}
                ></Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
