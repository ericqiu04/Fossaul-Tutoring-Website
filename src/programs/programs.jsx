
import classPictures from './pictures.js'
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
