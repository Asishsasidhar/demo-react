import { Menu, Checkbox } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export const FilterMenu = (props) => {
    let {filters, updateFilters} = props  
    let handleClick = e => {
      console.log('click ', e);
    };
  let filterChange = (e,value) => {
    if (e.target.checked) {
        updateFilters([...filters,value])
    }
    else {
      let temp_filters = [...filters]
      const index = temp_filters.indexOf(value);
      if (index > -1) {
        temp_filters.splice(index, 1);
      }
      updateFilters(temp_filters)
    }
  }
  
  
      return (
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Website">
            <Menu.ItemGroup key="g1" title="Business Language">
              <Menu.Item key="1"><Checkbox onChange={(e)=>{filterChange(e,"english")}}>English</Checkbox></Menu.Item>
              <Menu.Item key="2"><Checkbox onChange={(e)=>{filterChange(e,"spanish")}}>Spanish</Checkbox></Menu.Item>
              <Menu.Item key="3"><Checkbox onChange={(e)=>{filterChange(e, "russian")}}>Russian</Checkbox></Menu.Item>
              <Menu.Item key="4"><Checkbox onChange={(e)=>{filterChange(e,"portugese")}}>Portuguese</Checkbox></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="Stay Connected">
            <Menu.ItemGroup key="g2" title="Have a page">
              <Menu.Item key="5"><Checkbox onChange={(e)=>{filterChange(e,"facebook")}}>Facebook</Checkbox></Menu.Item>
              <Menu.Item key="6"><Checkbox onChange={(e)=>{filterChange(e,"instagram")}}>Instagram</Checkbox></Menu.Item>
              <Menu.Item key="7"><Checkbox onChange={(e)=>{filterChange(e,"twitter")}}>Twitter</Checkbox></Menu.Item>
              <Menu.Item key="8"><Checkbox onChange={(e)=>{filterChange(e,"yelp")}}>Yelp</Checkbox></Menu.Item>
              <Menu.Item key="9"><Checkbox onChange={(e)=>{filterChange(e,"google")}}>Google</Checkbox></Menu.Item>
              <Menu.Item key="10"><Checkbox onChange={(e)=>{filterChange(e,"pinterest")}}>Pinterest</Checkbox></Menu.Item>
              <Menu.Item key="12"><Checkbox onChange={(e)=>{filterChange(e,"apple-maps")}}>Apple Maps</Checkbox></Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g3" title="Play Ads">
              <Menu.Item key="13"><Checkbox onChange={(e)=>{filterChange(e,"ads-google")}}>Google</Checkbox></Menu.Item>
              <Menu.Item key="14"><Checkbox onChange={(e)=>{filterChange(e,"ads-facebook")}}>Facebook</Checkbox></Menu.Item>
              <Menu.Item key="15"><Checkbox onChange={(e)=>{filterChange(e,"ads-instagram")}}>Instagram</Checkbox></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      );
    
  }