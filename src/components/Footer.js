import React from "react";

function Footer() {
  return (
    <div class="">
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#232220" }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Shreyansh Dayal</h5>

                <p>
                  +91 9311099283 <br />
                  New Delhi,DEL <br/>
                  IND
                </p>
              </div>
              
            </div>
          </section>
          <hr class="mb-4" />

          <section class="mb-4 text-center">
            <h4>Connect with me</h4>
            <a
              class="btn btn-outline-light btn-floating m-1 mx-3"
              href="#!"
              role="button"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1 mx-3"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyansh.dayal0604@gmail.com&su=Hello&body=Message%20goes%20here" target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1 mx-3"
              href="#!"
              role="button"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1 mx-3"
              href="https://www.linkedin.com/in/shreyansh-dayal-07323031b/"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1 mx-3"
              href="https://github.com/dayalshreyansh"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          @2025 Shreyansh Dayal
        </div>
      </footer>
    </div>
  );
}

export default Footer;
