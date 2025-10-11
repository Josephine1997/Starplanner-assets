// stardust-loader.js
document.addEventListener("DOMContentLoaded", () => {
  const loaderHTML = `
    <style>
      #loading-overlay {
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:rgba(255,255,255,0.85);backdrop-filter:blur(3px);
        display:none;flex-direction:column;justify-content:center;align-items:center;
        z-index:9999;
      }
      .loading-text {
        font-family:'Poppins',sans-serif;font-style:italic;font-weight:500;font-size:26px;
        background:linear-gradient(90deg,#fff7cc,#ffe4b2,#ffd7a3,#ffc38b,#ffb07a);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        text-shadow:0 0 10px rgba(255,180,90,0.5);
        margin-bottom:25px;
      }
      .loading-bar {
        width:60%;height:10px;border-radius:8px;
        background:linear-gradient(135deg,#ffffff 0%,#FFF8D6 20%,#FFE6B3 40%,#FFD18B 60%,#FFB35C 80%,#FFA073 100%);
        background-size:300% 300%;
        animation:gradientFlow 2.5s ease-in-out infinite;
        box-shadow:0 0 12px rgba(255,180,90,0.25);
      }
      @keyframes gradientFlow {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
      .stardust{
        position:absolute;top:0;left:0;width:100%;height:100%;
        pointer-events:none;overflow:hidden;
      }
      .stardust span{
        position:absolute;width:3px;height:3px;
        background:radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255,240,200,0.8)40%,transparent 100%);
        border-radius:50%;box-shadow:0 0 8px rgba(255,240,200,0.9);
        opacity:0;animation:twinkle 4s ease-in-out infinite;
      }
      @keyframes twinkle{
        0%,100%{opacity:0;transform:scale(0.4);}
        50%{opacity:1;transform:scale(1.3);}
      }
    </style>
    <div id="loading-overlay">
      <div class="stardust" id="stardust"></div>
      <div class="loading-text">Sprinkling a little stardust…</div>
      <div class="loading-bar"></div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", loaderHTML);

  const overlay = document.getElementById("loading-overlay");
  const stardust = document.getElementById("stardust");
  let timeout;

  timeout = setTimeout(() => {
    if (document.readyState !== "complete") {
      overlay.style.display = "flex";
      for (let i = 0; i < 30; i++) {
        const star = document.createElement("span");
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        const size = Math.random() * 2 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        stardust.appendChild(star);
      }
    }
  }, 2000);

  window.addEventListener("load", () => {
    clearTimeout(timeout);
    overlay.style.display = "none";
  });
});
