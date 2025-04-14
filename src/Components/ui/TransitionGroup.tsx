import { useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import flagNE from "../../Assets/flag-netherlands.svg";
import flagFR from "../../Assets/flag-france.svg";
import flagSP from "../../Assets/flag-spain.svg";
import flagGR from "../../Assets/flag-greece.svg";
import flagIT from "../../Assets/flag-italy.svg";
import flagCZ from "../../Assets/flag-czech.svg";
import flagUK from "../../Assets/flag-united-kingdom.svg";

const countries = [
  { name: "France", flag: flagFR },
  { name: "Spain", flag: flagSP },
  { name: "Netherlands", flag: flagNE },
  { name: "Greece", flag: flagGR },
  { name: "Italy", flag: flagIT },
  { name: "Czech Republic", flag: flagCZ },
  { name: "United Kingdom", flag: flagUK },
];

function TransitionGroup() {
  const [countriesCounter, setCountriesCounter] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountriesCounter((currentValue) => {
        if (currentValue + 1 === countries.length) {
          return 0;
        }
        return currentValue + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SwitchTransition>
        <CSSTransition
          key={countries[countriesCounter].name}
          nodeRef={nodeRef}
          classNames='fade'
          timeout={500}          
        >
          <div ref={nodeRef} className='flex items-center bg-gray-100 rounded-full py-2 px-4 border border-gray-300 mr-6'>
            <span>{countries[countriesCounter].name}</span>
            <img
              src={countries[countriesCounter].flag}
              alt={`${countries[countriesCounter].name} flag`}
              className='w-4 ml-2 mt-[0.5px]'
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default TransitionGroup;
