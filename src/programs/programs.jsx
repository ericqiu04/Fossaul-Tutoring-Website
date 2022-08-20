
import classPictures from './pictures.js'
import CreateClassPanel from './createClassPanel'
import './classPanel.css'

function Programs() {
  //Add Navigation ting
  return( 
    <>
    <h1>Hour of Learning</h1>
    {classPictures.map(CreateClassPanel)}
    </>
    );
}

export default Programs
