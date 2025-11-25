const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/img", express.static(__dirname + "/img"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Erika Joyce</title>

        <!-- Bootstrap CSS -->
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />

        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          /* NAVBAR */
          .navbar-custom {
            padding: 20px 60px;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          .brand-logo {
            font-size: 34px;
            font-weight: bold;
          }
          .nav-link {
            margin-right: 30px;
            font-weight: 600;
            color: #333 !important;
          }

          /* HERO SECTION */
          .hero-section {
            background: linear-gradient(90deg, #0a6bff, #c93bff);
            padding: 80px 0;
            color: white;
            flex-grow: 1;
          }

          /* ABOUT SECTION LAYOUT */
          .about-container {
            max-width: 1100px;
            margin: auto;
            display: flex;
            align-items: center;
            gap: 50px;
          }

          /* IMAGE CONTAINER WITH FIXED WIDTH AND VERTICAL LINE */
          .image-container {
            width: 380px; /* fixed width so carousel does not affect text */
            border-right: 2px solid rgba(255,255,255,0.5);
            padding-right: 30px;
            display: flex;
            justify-content: center;
            flex-shrink: 0; /* do not shrink */
          }

          /* CIRCLE IMAGE */
          .circle-img {
            width: 340px;
            height: 340px;
            border-radius: 50%;
            object-fit: cover;
            border: 6px solid white;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
          }

          /* TEXT */
          .about-text-container {
            flex: 1; /* occupy remaining space */
          }
          .about-title {
            font-size: 48px;
            font-weight: bold;
          }
          .about-text {
            font-size: 20px;
            opacity: 0.9;
            margin-top: 10px;
          }

          /* INDICATORS */
          .carousel-indicators button {
            background-color: white !important;
          }

          /* FOOTER */
          .footer {
            background: #f7f7f7;
            padding: 15px 0;
            text-align: center;
            font-weight: 600;
            color: #333;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              gap: 30px;
            }
            .image-container {
              width: auto;
              border-right: none;
              padding-right: 0;
            }
            .circle-img {
              width: 280px;
              height: 280px;
            }
            .about-title {
              font-size: 40px;
            }
            .about-text {
              font-size: 18px;
            }
          }
        </style>
      </head>

      <body>

        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg navbar-custom">
          <a class="navbar-brand brand-logo" href="#">Admin Eri</a>
          <div class="ms-auto d-flex">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">About</a>
            <a class="nav-link" href="#">Contact</a>
            <a class="nav-link" href="#">Login</a>
          </div>
        </nav>

        <!-- HERO + SLIDER -->
        <section class="hero-section">
          <div class="about-container">

            <!-- IMAGE SLIDER -->
            <div class="image-container">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/1.jpeg" class="circle-img" />
                  </div>
                  <div class="carousel-item">
                    <img src="/img/2.jpeg" class="circle-img" />
                  </div>
                  <div class="carousel-item">
                    <img src="/img/3.jpeg" class="circle-img" />
                  </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>

            <!-- ABOUT TEXT -->
            <div class="about-text-container">
              <h1 class="about-title">About Me</h1>
              <p class="about-text">
                Erika Joyce Baybay<br/>
                BSIT NT4101<br/><br/>
                <em>"If it doesn't challenge you, it won't change you."</em>
              </p>
            </div>

          </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
          © 2025 Admin Eri. All Rights Reserved.
        </footer>

        <!-- Bootstrap JS -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
