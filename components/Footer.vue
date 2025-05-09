<template>
  <footer>
    <div>
      <div class="container">
        <hr />
        <div class="row">
          <div class="col">
            <div class="row is-center">
              <b>Brightcon 2025 is organized by:</b>
            </div>
            <div class="row is-center">
              <a href="https://www.d-d-s.ch/">
                <NuxtImg
                  format="webp"
                  class="logo-img"
                  src="/images/dds-logo.png"
                  alt="Départ de Sentier (DdS)"
                />
              </a>
            </div>
          </div>
          <div class="col">
            <div class="row is-center">
              <b>Brightcon 2025 is hosted by:</b>
            </div>
            <div class="row is-center">
              <br />
              <a href="https://www.cea.fr/Pages/le-cea/les-centres-cea/grenoble.aspx">
                <NuxtImg
                  class="logo-img"
                  src="/images/logo-cea-marianne-republique-francaise.png"
                  alt="CEA - Grenoble"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="text-center">
          <b>Organizing committee</b>
        </div>

        <div class="row">
          <div class="col is-center affrow">
            <ul>
              <li>
                Chris Mutel
                <br />
                <a
                  href="https://github.com/cmutel"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-mutel-61b263b2"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Karin Treyer
                <br />
                <a
                  href="https://github.com/KarinTreyer"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/karintreyer0777"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Tom&aacute;s Navarrete Guti&eacute;rrez
                <br />
                <a
                  href="https://github.com/tngTUDOR"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/tom4m3"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
            </ul>
          </div>
          <div class="col is-center">
            <ul>
              <li>
                Cindy LIOTARD 
                <br />
		Responsable programme transverse éco-innovation
                <br />
		Direction Recherche Technologique
		Site de Grenoble
		<br />
                <a
                  href="https://www.linkedin.com/in/cindy-liotard-30a98210/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container with-padding-top with-padding-bottom">
        <route-recap></route-recap>
      </div>
      <div class="with-padding-bottom">
        <div class="text-center">
          ©2025 <a href="https://www.d-d-s.ch/">Départ de Sentier</a>
          | Contact Us | <NuxtLink to="/legal"> Legal Info </NuxtLink> |
          <NuxtLink to="/code-of-conduct"> Code of Conduct </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style @scoped>
/* footer {
    position: fixed;
    width: 100%;
    bottom: 0;
} */
.with-padding-top {
  padding-top: 2em;
}
.with-padding-bottom {
  padding-bottom: 1em;
}
.logo-img {
  height: 84px;
}
.affrow {
  display: flex;
  align-items: flex-start;
}
</style>
