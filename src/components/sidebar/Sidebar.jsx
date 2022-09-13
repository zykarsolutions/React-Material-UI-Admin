import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';


const Sidebar = () => {
  return (
    <div className="sidebar"> 
    <div className="top">
     <span className="logo">Zykar Admin</span>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
            </li>
            <li>
              <StoreIcon className="icon" />
            <span>Products</span>
            </li>
            <li>
              <CreditCardIcon className="icon" />
            <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
            <span>Delivery</span>
            </li>
            <p className="title">USEFUL LINKS</p>
            <li>
              <AnalyticsIcon className="icon" />
            <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
            </li>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
            <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <SettingsOutlinedIcon className="icon" />
            <span>Profile</span>
            </li>
            <li>
              <InputOutlinedIcon className="icon" />
            <span>Logout</span>
            </li>
        </ul>

    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>

    </div>
    </div>
  )
}

export default Sidebar
