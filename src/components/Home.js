import React,  { useCallback } from 'react'
import {connect} from "react-redux";
import { increment, setAuth  }  from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import Vertical from "../assets/home/-icon-more-vertical-f.svg";
import Group from "../assets/home/group.svg";
import Rectangle72 from "../assets/home/rectangle-72.svg";
import Rectangle73 from "../assets/home/rectangle-73.svg";
import Vector from "../assets/home/vector.svg";
import Group328 from "../assets/home/group-328.svg";
import NationalAssembly from "../assets/home/nounnationalassembly1416635-1.svg";
import Ellipse21 from "../assets/home/ellipse-21.svg";
import Group327 from "../assets/home/group-327.svg";
import NationalAssembly11 from "../assets/home/nounnationalassembly1416635-11.svg";
import IconEye from "../assets/home/-icon-eye.svg";
import IconClock from "../assets/home/-icon-clock.svg";
import IconStar from "../assets/home/-icon-star.svg";
import "../css/home.scss"

const Home = (props) => {
  const navigate = useNavigate()
  const onGroupContainer4Click = useCallback(() => {
    // Please sync "National Assembly" to the project
  }, []);

  const onGroupContainer6Click = useCallback(() => {
    // Please sync "National Council" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/thenamibianvoice")
  }, []);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/elibrary");
  }, []);

  const onGroupContainer15Click = useCallback(() => {
    // Please sync "News" to the project
  }, []);

  const onGroupContainer18Click = useCallback(() => {
    // Please sync "Parliamentary Events 1" to the project
  }, []);

  const onSeeAllClick = useCallback(() => {
    // Please sync "All Videos" to the project
  }, []);

  const onRectangle12Click = useCallback(() => {
    // Please sync "Favorites (logged in)" to the project
  }, []);

  const onRectangle13Click = useCallback(() => {
    // Please sync "Account (Not Signed In)" to the project
  }, []);
    return (
      <div className="home-version-2 fadein">
      <img className="home-version-2-child" alt="" src={require("../assets/home/group-315@2x.png")} />
      <img
        className="icon-more-vertical-f"
        alt=""
        src={Vertical}
      />
      <div className="home-version-2-inner">
        <div className="logo-parent">
          <img className="logo-icon" alt="" src={require("../assets/home/logo@2x.png")} />
          <div className="parliament-of-namibia">Parliament of Namibia</div>
        </div>
      </div>
      <div className="group-parent" onClick={onGroupContainer4Click}>
        <div className="rectangle-parent">
          <button className="group-child" />
          <div className="group-item" />
          <div className="national-assembly-wrapper">
            <div className="national-assembly">NATIONAL ASSEMBLY</div>
          </div>
        </div>
        <img className="group-icon" alt="" src={Group} />
      </div>
      <div className="vector-parent" onClick={onGroupContainer6Click}>
        <img className="group-inner" alt="" src={Rectangle72} />
        <img className="rectangle-icon" alt="" src={Rectangle73} />
        <div className="national-council-wrapper">
          <div className="national-council">NATIONAL COUNCIL</div>
        </div>
        <img className="vector-icon" alt="" src={Vector} />
      </div>
      <div className="noun-national-assembly-buildin" />

      <div className="group-container" onClick={onGroupContainer9Click}>
        <div className="rectangle-parent">
          <img className="group-inner" alt="" src={Rectangle72} />
          <div className="group-item" />
          <div className="the-namibian-voice-wrapper">
            <div className="national-assembly">THE NAMIBIAN VOICE</div>
          </div>
        </div>
        <img className="group-child2" alt="" src={Group328} />
      </div>

      <div
        className="noun-national-assembly-buildin-parent"
        onClick={onGroupContainer12Click}
      >
        <img
          className="noun-national-assembly-buildin-icon"
          alt=""
          src={require("../assets/home/nounnationalassemblybuilding4882664-1@2x.png")}
        />
        <div className="rectangle-group">
          <button className="rectangle-button" />
          <div className="group-child3" />
          <div className="e-library-parent">
            <div className="e-library">E-LIBRARY</div>
            <img
              className="noun-national-assembly-1416635-icon"
              alt=""
              src={NationalAssembly}
            />
          </div>
          <img className="ellipse-icon" alt="" src={Ellipse21} />
        </div>
      </div>
      <div className="group-div" onClick={onGroupContainer15Click}>
        <div className="rectangle-parent">
          <button className="group-child" />
          <div className="group-child5" />
          <div className="news-wrapper">
            <div className="national-council">NEWS</div>
          </div>
        </div>
        <img className="group-child6" alt="" src={Group327} />
      </div>
      <div className="home-version-2-inner1" onClick={onGroupContainer18Click}>
        <div className="rectangle-parent">
          <button className="group-child" />
          <div className="group-child8" />
          <div className="events-parent">
            <div className="e-library">EVENTS</div>
            <img
              className="noun-national-assembly-1416635-icon"
              alt=""
              src={NationalAssembly11}
            />
          </div>
        </div>
      </div>
      <div className="tune-in">Tune In</div>
      <div className="vector-container">
        <img className="group-child9" alt="" src={require("../assets/home/rectangle-42@2x.png")} />
        <div className="group-child10" />
        <div className="national-assembly-3-container">
          <p className="national-assembly1">{`National Assembly `}</p>
          <p className="national-assembly1">3 April 2023</p>
        </div>
        <div className="group-parent1">
          <div className="rectangle-wrapper">
            <div className="group-child11" />
          </div>
          <div className="rectangle-parent2">
            <div className="group-child12" />
            <div className="icon-eye-parent">
              <img className="icon-eye" alt="" src={IconEye} />
              <div className="div">500</div>
            </div>
            <div className="line-div" />
            <div className="group-child13" />
            <div className="min-parent">
              <div className="min">22 min</div>
              <img className="icon-clock" alt="" src={IconClock} />
            </div>
            <div className="live-now">Live Now</div>
          </div>
        </div>
        <div className="see-all" onClick={onSeeAllClick}>{`See All >`}</div>
        <a className="vide" href="https://fb.watch/v/EJ2gUnpo/" target="_blank">
          video
        </a>
        <button className="group-button">
          <button className="group-child14" />
          <div className="add-to-favourites">Add to Favourites</div>
          <img className="icon-star" alt="" src={IconStar} />
        </button>
      </div>

    </div>
    )
}

const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    auth: state.auth
  });
  
  const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return {
        increment: (num)=> dispatch(increment(num)),
        setAuth: (user)=> dispatch(setAuth(user))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
