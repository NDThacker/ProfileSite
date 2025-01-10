import ProgressBar from "../UIComponents/ProgressBar";
import { useState } from "react";
import "../styles/skills.scss";
export default function Skills() {
  const [curTab, setTab] = useState(0);

  let categories = [
    "Languages",
    "Frontend",
    "Backend",
    "DevOps",
    "Cloud",
    "Tools",
  ];
  let leftCategories = categories.slice(0, curTab);
  let rightCategories = categories.slice(curTab + 1);
  let categoriesMapping = new Map([
    [
      "Languages",
      <div className="category" key="ProgrammingLanguages">
        <ProgressBar value={90} title="Nodejs" />
        <ProgressBar value={85} title="Python" />
        <ProgressBar value={85} title="Java" />
        <ProgressBar value={80} title="Bash" />
      </div>,
    ],
    [
      "Frontend",
      <div className="category" key="FrontendTechnologies">
        <ProgressBar value={90} title="Reactjs" />
        <ProgressBar value={80} title="Redux" />
        <ProgressBar value={75} title="Vuejs" />
        <ProgressBar value={90} title="HTML5" />
        <ProgressBar value={85} title="CSS3" />
      </div>,
    ],
    [
      "Backend",
      <div className="category" key="BackendTechnologies">
        <ProgressBar value={90} title="Expressjs" />
        <ProgressBar value={70} title="Django" />
        <ProgressBar value={70} title="Flask" />
      </div>,
    ],
    [
      "DevOps",
      <div className="category" key="DevOps">
        <ProgressBar value={70} title="Jenkins" />
        <ProgressBar value={70} title="Docker" />
      </div>,
    ],
    [
      "Cloud",
      <div className="category" key="CloudDevelopment">
        <ProgressBar value={80} title="AWS" />
        <ProgressBar value={70} title="GCP" />
        <ProgressBar value={75} title="Azure" />
      </div>,
    ],
    [
      "Tools",
      <div className="category" key="ComplementoryTools">
        <ProgressBar value={90} title="Git" />
        <ProgressBar value={80} title="Gulp" />
        <ProgressBar value={70} title="Unit Testing" />
      </div>,
    ],
  ]);
  return (
    <main id="categoriesContainer">
      <section id="categoriesLabel">
        {leftCategories.map((val) => {
          return (
            <label className="prevCat" key={val}>
              {val}
            </label>
          );
        })}
        <label className="catLabel">{categories[curTab]}</label>
        {rightCategories.map((val) => {
          return (
            <label className="nextCat" key={val}>
              {val}
            </label>
          );
        })}
        
      </section>
      <hr />
      <section id="data">{categoriesMapping.get(categories[curTab])}</section>
      <hr />
      <section id="navigation">
       
        <button
          className="backwardButton"
          onClick={() => setTab(curTab - 1)}
          disabled={curTab === 0}
        >
          <i className="fa-solid fa-backward"></i>
        </button>
        <button
          className="forwardButton"
          onClick={() => setTab(curTab + 1)}
          disabled={curTab === categories.length - 1}
        >
          <i className="fa-solid fa-forward"></i>
        </button>
      </section>
    </main>
  );
}
