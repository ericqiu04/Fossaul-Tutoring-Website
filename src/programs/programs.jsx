import { useState } from 'react'
import classPictures from './pictures.JS'
import CreateClassPanel from './createClassPanel'


function Programs() {
  //Add Navigation ting
  return( 
    
    <>
    {classPictures.map(CreateClassPanel)}
    </>
    );
}

export default Programs
