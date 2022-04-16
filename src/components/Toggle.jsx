import React from 'react'

import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'


import styled from "styled-components"
const Sun = styled.div`
position: absolute;
top: 2.7rem;
right: 0.5rem;
transition: all 1s linear;
z-index: 100;
cursor: pointer;
  `

  const Moon = styled.div`
position: absolute;
top: 2.4rem;
right: 1.3rem;
transition: all 1s linear;
z-index: 100;
cursor: pointer;
  `
const Toggle = ({theme,  toggleTheme }) => {
    return (

        <div onClick={toggleTheme} >
            {theme === 'dark' ? (
                <Sun><BsSun color="yellow" size={30}/></Sun>
            ):(
            <Moon><BsMoon size={30}/></Moon>
            )
            }
          
        </div>
    );
};

export default Toggle;
