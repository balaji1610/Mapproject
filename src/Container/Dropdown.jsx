export default function Dropdown({ dropdown, handlechange, getImage }) {
  return (
    <div>
      <select
        style={{ width: "170px", height: "40px", cursor: "pointer" }}
        name="Buildingvalue"
        value={dropdown}
        onChange={handlechange}
        onClick={getImage(dropdown)}
      >
        <option style={{ fontSize: "150%" }} value="chooseBuilding">
          ChooseBuilding{" "}
        </option>
        <option style={{ fontSize: "150%" }} value="buildA">
          Building A{" "}
        </option>
        <option style={{ fontSize: "150%" }} value="buildB">
          Building B{" "}
        </option>
        <option style={{ fontSize: "150%" }} value="buildC">
          Building C
        </option>
        <option style={{ fontSize: "150%" }} value="buildD">
          Building D
        </option>
        <option style={{ fontSize: "150%" }} value="buildE">
          Building E
        </option>
      </select>
    </div>
  );
}
