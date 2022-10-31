
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect} from "react";

 const  Counter = (props)  =>{
  const [{startValue, flag},setStartValue] = useState({startValue:0,flag:"true"});
 
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,

  });

  useCountUp({
    ref: "counter_" + props.index,
    start: startValue,
    end: props.ed,
    enableScrollSpy: true,
    scrollSpyDelay: 1
  });

  useEffect(() => {
    if (inView && flag === "true") {
        setStartValue({startValue:0,flag:"false"});
   
        // start the count up
      } else {
        setStartValue(props.ed);
      }
  }, [inView]);

  return (
    <div className="App" ref={ref}>
      <div className="content" />
      {/* <CountUp start={startValue} end={100} enableScrollSpy /> */}

      <span id={`counter_${props.index}`} />
    </div>
  );
}
export default Counter;
