import React,{useState, useEffect,useMemo} from 'react';
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(()=>
      ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"]
  ,[]);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await axios.get('/users/stats',{
          headers:{
						token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWYyZTY1NDU2YjUwNGRiNWU4NzRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0ODQ1MywiZXhwIjoxNjYzMjM0ODUzfQ.Q4-qlW4s9HVmAx_3BGr5mDlgjh_bEwpA73PhuruHJZ4",
					}
        });
        // console.log("Res", res.data);
        const sortList = res.data.sort(function (a, b) {
          return a._id - b._id;
        })
        sortList.map((item) =>
         setUserStats((prev) => [
          ...prev, { name:MONTHS[item._id - 1], "New User":item.total}
         ])
        )
      }catch(err){
        console.log(err);
      }
    }
   getStats();
  }, [MONTHS]);

  console.log("UserStats", userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
