import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/1gocNMuZ3Cf6BEw_lEOJalmBBdoZ6k2P_6nNGJt05Qo2V-ON4SW6TnOZKleqw92JdRPxkfIFCA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="The Secret Mindset"
        verified
        subs="606K"
        noOfVideos={345}
        description="You lose because you don’t plan!  The trading process begins way before you press the buy/sell button.  Discover a step-by-step price action strategy to improve your trading execution."
      />
      <hr />
      <VideoRow
        views="1.2M"
        subs="606K"
        description="Price Action is laid out with the top signals utilized"
        timestamp="13 minutes ago"
        channel="The Secret Mindset"
        title="Price Action Trading Strategy"
        image="https://i.ytimg.com/an_webp/blZ-xvLkc-M/mqdefault_6s.webp?du=3000&sqp=CI79u5UG&rs=AOn4CLDUtSBkzKTRhMgvp1sxaNmIaTfWZA"
      />
      <VideoRow
        views="243K"
        subs="606K"
        description="Discover a simple and easy Forex Trading strategy for day trading and swing trading using price action"
        timestamp="11 months ago"
        channel="The Secret Mindset"
        title="An Incredibly Easy Forex Trading Strategy"
        image="https://i.ytimg.com/an_webp/s97pun_QB0g/mqdefault_6s.webp?du=3000&sqp=CKDwu5UG&rs=AOn4CLA_cuWGeiuDSMGAlATTK5prX-oyPA"
      />
      <VideoRow
        views="182K"
        subs="606K"
        description="Discover an effective price action trading to identify the best trades to leverage profits"
        timestamp="5 months ago"
        channel="The Secret Mindset"
        title="Scalping Trading was Impossible Until I found out this!"
        image="https://i.ytimg.com/an_webp/vBM0imYSzxI/mqdefault_6s.webp?du=3000&sqp=CLLSu5UG&rs=AOn4CLCFoyiskQ4I2ptp2DCt_2IZ4wn3rQ"
      />
      <VideoRow
        views="1.2M"
        subs="606K"
        description="Price Action is laid out with the top signals utilized"
        timestamp="13 minutes ago"
        channel="The Secret Mindset"
        title="Price Action Trading Strategy"
        image="https://i.ytimg.com/an_webp/blZ-xvLkc-M/mqdefault_6s.webp?du=3000&sqp=CI79u5UG&rs=AOn4CLDUtSBkzKTRhMgvp1sxaNmIaTfWZA"
      />
      <VideoRow
        views="243K"
        subs="606K"
        description="Discover a simple and easy Forex Trading strategy for day trading and swing trading using price action"
        timestamp="11 months ago"
        channel="The Secret Mindset"
        title="An Incredibly Easy Forex Trading Strategy"
        image="https://i.ytimg.com/an_webp/s97pun_QB0g/mqdefault_6s.webp?du=3000&sqp=CKDwu5UG&rs=AOn4CLA_cuWGeiuDSMGAlATTK5prX-oyPA"
      />
      <VideoRow
        views="182K"
        subs="606K"
        description="Discover an effective price action trading to identify the best trades to leverage profits"
        timestamp="5 months ago"
        channel="The Secret Mindset"
        title="Scalping Trading was Impossible Until I found out this!"
        image="https://i.ytimg.com/an_webp/vBM0imYSzxI/mqdefault_6s.webp?du=3000&sqp=CLLSu5UG&rs=AOn4CLCFoyiskQ4I2ptp2DCt_2IZ4wn3rQ"
      />
      <VideoRow
        views="1.2M"
        subs="606K"
        description="Price Action is laid out with the top signals utilized"
        timestamp="13 minutes ago"
        channel="The Secret Mindset"
        title="Price Action Trading Strategy"
        image="https://i.ytimg.com/an_webp/blZ-xvLkc-M/mqdefault_6s.webp?du=3000&sqp=CI79u5UG&rs=AOn4CLDUtSBkzKTRhMgvp1sxaNmIaTfWZA"
      />
      <VideoRow
        views="243K"
        subs="606K"
        description="Discover a simple and easy Forex Trading strategy for day trading and swing trading using price action"
        timestamp="11 months ago"
        channel="The Secret Mindset"
        title="An Incredibly Easy Forex Trading Strategy"
        image="https://i.ytimg.com/an_webp/s97pun_QB0g/mqdefault_6s.webp?du=3000&sqp=CKDwu5UG&rs=AOn4CLA_cuWGeiuDSMGAlATTK5prX-oyPA"
      />
      <VideoRow
        views="182K"
        subs="606K"
        description="Discover an effective price action trading to identify the best trades to leverage profits"
        timestamp="5 months ago"
        channel="The Secret Mindset"
        title="Scalping Trading was Impossible Until I found out this!"
        image="https://i.ytimg.com/an_webp/vBM0imYSzxI/mqdefault_6s.webp?du=3000&sqp=CLLSu5UG&rs=AOn4CLCFoyiskQ4I2ptp2DCt_2IZ4wn3rQ"
      />
    </div>
  );
}

export default SearchPage;
