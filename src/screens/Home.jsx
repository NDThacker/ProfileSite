import TimeLineItem from "../UIComponents/TimeLineItem";
import '../styles/home.scss';

export default function Home() {
  return (
    <>
    <div id="heroBanner">
      <h1>Naman Dinesh Thacker</h1>
      <p>Seasoned Developer with 5+ years of experience in Fullstack</p>
    </div>
    <p></p>
      
  
      <section id="mainLine"></section>
      <article className="content info">
        <TimeLineItem
          title="June 2015"
          description="Joined B.Tech Computer Engineering at Dharmsinh Desai Univeristy"
          imgUrl="ddu.jpg"
          justify="left"
        />
      </article>
      <article className="content2 info">
        <TimeLineItem
          title="May 2019"
          description="Completed Undergraduation with 8.43 CPA"
          imgUrl="ddu.jpg"
          justify="right"
        />
      </article>
      <article className="content3 info">
        <TimeLineItem
          title="July 2019"
          description="Joined Infosys Ltd. as Systems Engineer Specialist"
          imgUrl="Infosys-Limited-Logo.png"
          justify="left"
        />
      </article>
      <article className="content4 info">
        <TimeLineItem
          title="Oct 2019"
          description="Joined Infosys Pune"
          imgUrl="ddu.jpg"
          justify="right"
        />
      </article>
      <article className="content5 info">
        <TimeLineItem
          title="Aug 2022"
          description="Moved to Precisely Inc. as Fullstack Developer"
          imgUrl="precisely-logo.jpg"
          justify="left"
        />
      </article>
      <article className="content6 info">
        <TimeLineItem
          title="Dec 2024"
          description="Started as Associate Staff Engineer at Nagarro"
          imgUrl="nagarrologo2.jpeg"
          justify="right"
        />
      </article>

    </>
  );
}
