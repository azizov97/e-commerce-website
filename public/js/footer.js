const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
      <img src="./img/light-logo.png" class="logo" alt="" />
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">men</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formals</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
          <li class="category-title">women</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formals</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias
      fugit placeat eveniet! Voluptatibus consectetur sequi, maiores fugiat
      dolores repellendus quos a magni. Quia suscipit necessitatibus eius at
      et nam error facere atque dolores, vero amet sed molestias tenetur
      repudiandae accusamus illum iure ad quas est rem? Reprehenderit veniam
      tempore itaque praesentium eos consequuntur voluptate. Nostrum quaerat
      quia, corporis ullam, voluptate pariatur ad perspiciatis accusamus
      placeat saepe molestiae id recusandae blanditiis molestias maxime
      accusantium dolor voluptas porro similique eveniet beatae soluta nam
      praesentium! Odit error dolores, assumenda repellat perspiciatis atque
      quasi obcaecati delectus quia placeat eos amet incidunt ipsum quaerat!
    </p>
    <p class="info">
      support emails - help@clothing.com, customersupport@clothing.com
    </p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p> `;
};

createFooter();
