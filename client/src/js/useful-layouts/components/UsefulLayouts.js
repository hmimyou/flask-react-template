import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class UsefulLayouts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const splitPanelSCSS = `
      .split-panel {  /* Don't include other children elements */
        display: flex;
        background-color: #107baf;
        padding: 15px;
        min-height: 20vh; /* 20% Viewport height */

        .left-panel {
          width: 200px;  /* Set the fixed width here */
          background-color: #e28743;
          min-height: 50px;
        }

        .right-panel {
          flex-grow: 1;  /* Grow to take up remaining space */
          background-color: #eab676;
          min-height: 50px;
        }
      }
    `

    return (
      <div>
        <h3>Left & Right Split Panel</h3>
        <div>
          <SyntaxHighlighter language="scss" showLineNumbers style={docco}>
            {splitPanelSCSS}
          </SyntaxHighlighter>       
        </div>
        <div className="split-panel">
          <div className="left-panel">
            className="left-panel"
          </div>
          <div className="right-panel">
            className="right-panel"
          </div>
        </div>
      </div>
    );
  }
}

export default UsefulLayouts;
