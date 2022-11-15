// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <section></section>
        <section>
            <h1>Markas Martinas Šuika</h1>
            <p>Front-end</p>
        </section>
      </header>

      <main>
        <div className='flex-container'>
        <section class="about-me">
            <h2>About me</h2>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam.</p>
        </section>

        <section className="links">
            <h2>Links</h2>
            <hr></hr>
            <div>
                <i class="fa-brands fa-linkedin-in"></i>
                <a href="https://www.linkedin.com/in/markas-martinas-%C5%A1uika-852632171/" target="_blank" rel="noopener noreferrer">/in/markas-martinas-suika/</a>
            </div>
            <div>
                <i class="fa-brands fa-facebook"></i>
                <a href="https://www.facebook.com/markas.suika" target="_blank" rel="noopener noreferrer">/markas.suika</a>
            </div>
            <div>
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/MSuika" target="_blank" rel="noopener noreferrer">/MSuika</a>
            </div>
            <div>
                <i class="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/markas_martinas_suika/" target="_blank" rel="noopener noreferrer">/markas_martinas_suika/</a>
            </div>
        </section>
        </div> 
        {/* flex end */}

        <div className="flex-container">
        <section className="Education">
            <h2>Education</h2>
            <hr></hr>
            <div>
                <p>Vilnius univeristy of applied science</p>
                <p>2018 - 2022</p>
                <p>International business</p>
            </div>
            <hr></hr>
            <div>
                <p>Code Academy</p>
                <p>2022 - 2022</p>
                <p>Front-end Level 1</p>
            </div>
        </section>
        <section className="Personal-skills">
            <h2>Personal skills</h2>
            <hr></hr>
            <p>TEAMWORK</p>
            <p>COMMUNICATION</p>
            <p>ORGANIZATION</p>
        </section>
        <section className="Technical-skills">
            <h2>Technical skills</h2>
            <hr></hr>
            <p>HTML</p>
            <p>CSS/SCSS</p>
            <p>JAVASCRIPT</p>
            <p>REACT.JS</p>
        </section>
        </div>

        <section className="Work-experience">
            <h2>Work experience</h2>
            <hr></hr>
            <div className="container">
            <div>
                <h3>job position</h3>
                <p>company</p>
                <p>date</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus quaerat maxime aut libero vitae quam officiis corporis ratione necessitatibus doloribus adipisci, mollitia ab at rem voluptatum consequuntur unde nobis!</p>
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </div>
            <div>
                <h3>job position</h3>
                <p>company</p>
                <p>date</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus quaerat maxime aut libero vitae quam officiis corporis ratione necessitatibus doloribus adipisci, mollitia ab at rem voluptatum consequuntur unde nobis!</p>
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </div>
            <div>
                <h3>job position</h3>
                <p>company</p>
                <p>date</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus quaerat maxime aut libero vitae quam officiis corporis ratione necessitatibus doloribus adipisci, mollitia ab at rem voluptatum consequuntur unde nobis!</p>
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </div>
        </div>
        </section>
        <section id="hr"><hr></hr></section>
        <footer>
        <div>
            <h3>Location</h3>
            <p>Vilnius, Lithuania</p>
        </div>
        <div>
            <h3>Contact</h3>
            <a href="tel:+3706 5055605">+3706 5055605</a>
            <a href="mailto:markassuika@gmail.com<">markassuika@gmail.com</a>
        </div>
        <div>
            <h3>Social</h3>
            <a href="https://github.com/MSuika" target="_blank" rel="noopener noreferrer">https://github.com/MSuika</a>
            <a href="https://www.instagram.com/markas_martinas_suika/" target="_blank" rel="noopener noreferrer">instagram.com/markas_martinas_suika/</a>
        </div>
    </footer>
        </main>
        {/* App end */}
    </div>
  );
}

export default App;
