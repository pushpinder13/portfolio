// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   //const [index, setIndex] = useState(1);
//   const toRotate = [ "Computer Science" ];
//   const period = 2000;

//   useEffect(() => {
    
//       let ticker = setInterval(() => {
//       tick();
//       }, delta);
 

//     return () => { 
//       clearInterval(ticker) 
//     };

//     //eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       //setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       //setIndex(1);
//       setDelta(500);
//     } else {
//       //setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hi! I'm Pushpinder Singh`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Computer Science" ]'><span className="wrap">{text}</span></span>{` student`}</h1>
//                   <p>A passionate individual looking for a Co-op / internship opportunity in a software development and web development area, flexible to working hours and environments and open to all opportunity.</p>
//                   <button onClick={() => {
//                     const element = document.getElementById("connect")
//                     if (element){
//                       element.scrollIntoView({behavior:'smooth'})
//                     }
//                   }}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
            
//               <img src={headerImg} alt="Header Img"/>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Computer Science"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { 
      clearInterval(ticker);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Pushpinder Singh`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Computer Science" ]'><span className="wrap">{text}</span></span>{` student`}</h1>
                  <p>A passionate individual looking for a Co-op / internship opportunity in a software development and web development area, flexible to working hours and environments and open to all opportunities.</p>
                  <button onClick={() => {
                    const element = document.getElementById("connect");
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <div style={{ marginTop: '20px' }}>
                    <a href="/Resume.pdf" download>
                      <button>Resume</button>
                    </a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
