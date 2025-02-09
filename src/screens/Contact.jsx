import '../styles/contact.scss';

export default function Contact() {
  return (
    <main id="contactContainer">
      <article id="details">
        <p>
          <span className="cursor typewriter-animation"> Write me @</span><br />
          <span className="cursor typewriter-animation"><a href="mailto:namanthacker1965@gmail.com">
            namanthacker1965@gmail.com
          </a></span>
        </p>
        <p>
          <span className="cursor typewriter-animation">Reach me @</span><br />
          <span className="cursor typewriter-animation">+91 7862069188</span>
        </p>
      </article>
      <article id="socials">
      <span className="cursor typewriter-animation">Find me at @</span><span className="cursor typewriter-animation" id="socialLinks"><br />
        <a href="https://github.com/NDThacker" target="_blank"><i className="fa-brands fa-github icon"></i></a>
        <a href="https://leetcode.com/u/namandt/" target="_blank"><img className="icon leetcode"src="./leetcode.svg" alt="leetcode" /></a>
        <a href="https://hackerrank.com/profile/namanthacker25" target="_blank"><i className="fa-brands fa-hackerrank icon"></i></a>
        <a href="https://linkedin.com/in/naman-thacker-7b915a141/" target="_blank"><i className="fa-brands fa-linkedin icon"></i></a>
        </span>
      </article>
      <article id="meeting">
        <span className="cursor typewriter-animation">Want to have a 1on1 meeting with me? Schedule @<br /><br />
        <a href="https://cal.com/naman-thacker" target="_blank"><i className="fa-solid fa-calendar-check icon"></i></a>
        </span></article>
    </main>
  );
}
