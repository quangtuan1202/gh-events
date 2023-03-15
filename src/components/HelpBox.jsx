import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  //test skip 
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
