
// import ProgressBar from "react-animated-progress-bar";
// import React from "react";

// const Skill = (props) => {
//     return(
//         <div className="skill">
//             <span>{props.title}</span>
//             <ProgressBar
//                     width="100%"
//                     height="8px"
//                     rect
//                     fontColor="white"
//                     value={0}
//                     rectPadding="1px"
//                     rectBorderRadius="20px"
//                     trackPathColor="transparent"
//                     bgColor="grey"
//                     trackBorderColor="white"
//                     backgrondColor="red"
//                   />
//         </div>
//     );
// }
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skill = (props) => {
 
  const [countOfProgess, setCountOfProgess] = React.useState(0);
 
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess((oldProgress) => {
        if(oldProgress >= props.target - 1)
            clearInterval(timer);
        return oldProgress + 1;
      });
    }, 50);
 
    return () => {
      clearInterval(timer);
    };
  }, []);
 
  return (
    <div style={{ display: 'block',
                  width: '100%', padding: 0 }}>
     <span style={{color:'white'}}>{props.title}:</span>
     <span style={{float:'right',
    color:'white'}}> {parseInt(countOfProgess)} %</span>
      <ProgressBar now={countOfProgess} animated striped variant="success"/>
    </div>
  );
}
export default Skill;