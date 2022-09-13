import "./featured.scss"
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth="5"/>
         </div>
         <p className="title">Total Sales made today</p>
         <p className="amount">ZMK 450</p>
         <p className="desc">Previous transcations processing. Last Payments may not be included.</p>
         <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">ZMK12.7</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">ZMK10.7k</div>
            </div>
          </div>  
             <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">ZMK52.2k</div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Featured
