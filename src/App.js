import "./App.css";
import { useState } from "react";

function App() {
  const [isactive, setisactive] = useState("earth");
  const [navopen, setnavopen] = useState("data-close");
  const [input, setinput] = useState(0);
  function handleclick(e) {
    console.log("hello");
    setisactive(e.target.title);
  }
  function handlechange(e) {
    setinput(e.target.value);
  }
  function handlenav() {
    if (navopen === "data-close") {
      setnavopen("data-open");
    } else {
      setnavopen("data-close");
    }
  }

  return (
    <>
      <link rel="stylesheet" type="text/css" href="index.css" />

      <body class={`view-2D set-speed zoom-close ${navopen} controls-close`}>
        <div id="navbar">
          <a onClick={handlenav} id="toggle-data" href="#data">
            <i class=" icon-data"></i>Planets
          </a>

          {/* <input type="number" onChange={handlechange} style={{display:"block", margin:"auto",marginTop:"100px",background:"none", border:"2px solid white", borderRadius:"5px", width:"300px", padding:"10px", textAlign:"center", color:"white"}} placeholder="Enter your weight" ></input>  */}
          <div id="jugaad">
            {" "}
            <div class="form__group field">
              <input
                onChange={handlechange}
                type="number"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
              <label for="name" class="form__label">
                Enter your weight...
              </label>
            </div>
          </div>
        </div>

        <div id="data">
          <a onClick={handleclick} class={`sun`} title="sun" href="#sunspeed">
            Sun
          </a>
          <a
            onClick={handleclick}
            class={`mercury`}
            title="mercury"
            href="#mercuryspeed"
          >
            Mercury
          </a>
          <a
            onClick={handleclick}
            class={`venus`}
            title="venus"
            href="#venusspeed"
          >
            Venus
          </a>
          <a
            onClick={handleclick}
            class={`earth`}
            title="earth"
            href="#earthspeed"
          >
            Earth
          </a>
          <a
            onClick={handleclick}
            class={`mars`}
            title="mars"
            href="#marsspeed"
          >
            Mars
          </a>
          <a
            onClick={handleclick}
            class={`jupiter`}
            title="jupiter"
            href="#jupiterspeed"
          >
            Jupiter
          </a>
          <a
            onClick={handleclick}
            class={`saturn`}
            title="saturn"
            href="#saturnspeed"
          >
            Saturn
          </a>
          <a
            onClick={handleclick}
            class={`uranus `}
            title="uranus"
            href="#uranusspeed"
          >
            Uranus
          </a>
          <a
            onClick={handleclick}
            class={`neptune`}
            title="neptune"
            href="#neptunespeed"
          >
            Neptune
          </a>
        </div>

        <div id="universe" class="scale-stretched">
          <div id="galaxy">
            <div id="solar-system" class={isactive}>
              <div
                onClick={() => setisactive("mercury")}
                id="mercury"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Mercury
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 0.38).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("venus")}
                id="venus"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Venus
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 0.91).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("earth")}
                id="earth"
                class="orbit"
              >
                <div class="pos">
                  <div class="orbit">
                    <div class="pos">
                      <div class="moon"></div>
                    </div>
                  </div>
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Earth <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${input}Kg`}
                      </dt>

                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div onClick={() => setisactive("mars")} id="mars" class="orbit">
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Mars
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 0.38).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("jupiter")}
                id="jupiter"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Jupiter
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 2.34).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("saturn")}
                id="saturn"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <div class="ring"></div>
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Saturn
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 0.93).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("uranus")}
                id="uranus"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Uranus
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 0.88).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setisactive("neptune")}
                id="neptune"
                class="orbit"
              >
                <div class="pos">
                  <div class="planet">
                    <dl class="infos">
                      <dt style={{ width: "200px", fontSize:"17px" }}>
                        Neptune
                        <br />
                        <br />
                        {input === 0 ? "" : `Your Weight: ${(input * 1.12).toFixed(2)}Kg`}
                      </dt>
                      <dd>
                        <span></span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div onClick={() => setisactive("sun")} id="sun">
                <dl class="infos">
                  <dt style={{ width: "200px", fontSize:"17px" }}>
                    Sun
                    <br />
                    <br />
               {input === 0 ? "" : `Your Weight: ${(input * 27.93).toFixed(2)}Kg`}
                  </dt>
                  <dd>
                    <span></span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
