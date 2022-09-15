import React,{useState, useEffect} from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async ()=>{
      const res = await axios.get("/users?new=true", {
        headers: {
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWYyZTY1NDU2YjUwNGRiNWU4NzRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0ODQ1MywiZXhwIjoxNjYzMjM0ODUzfQ.Q4-qlW4s9HVmAx_3BGr5mDlgjh_bEwpA73PhuruHJZ4",
        }
      });
      setNewUsers(res.data);
    }
   getNewUsers()
  },[]);
  // console.log("NewUsers",newUsers);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers.map((user) =>(
        <li className="widgetSmListItem" key = {user._id}>
          <img
            src={user.profilePic || "https://th.bing.com/th/id/OIP.ILMxWcabmvZwHq8H8rtjigHaHa?pid=ImgDet&rs=1"}
            alt="ProfilePic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.email}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            {user.isAdmin}
          </button>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
}
