import { Select } from "antd";
import "antd/dist/antd.css";
import "./CountrySelector.scss";
const { Option } = Select;

const CountrySelector = ({ countries, value, onChange }) => {
  return (
    <div className="container">
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select a country"
        optionFilterProp="children"
        value={value}
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        loading={false}
      >
        {countries.map(({ Country, ISO2 }) => (
          <Option value={ISO2.toLowerCase()}>{Country}</Option>
        ))}
      </Select>
    </div>
  );
};
export default CountrySelector;
