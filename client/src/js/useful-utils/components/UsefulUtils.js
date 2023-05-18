import React, { Component } from 'react';
import AxiosPlayGround from './AxiosPlayGround';
import ReactJson from 'react-json-view'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class UsefulUtils extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const myJsonObject = {
      "string": "this is a test string",
      "integer": 42,
      "array": [
        1,
        2,
        3,
        "test",
        null
      ],
      "float": 3.14159,
      "object": {
        "first-child": true,
        "second-child": false,
        "last-child": null
      },
      "string_number": "1234",
      "date": "2023-05-18T04:05:00.340Z"
    }

    const codeString = `
      import SyntaxHighlighter from 'react-syntax-highlighter';
      import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

      const Component = () => {
        const codeString = '(num) => num + 1';
        return (
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        );
      };
    `

    return (
      <div>
        <h3>Axios</h3>
        <ul className="section-reference">
          <li><a href="https://github.com/axios/axios#example">Reference: Axios GitHub Page</a></li>
        </ul>
        <AxiosPlayGround />

        <h3>React Json View</h3>
        <ul className="section-reference">
          <li><a href="https://www.npmjs.com/package/react-json-view">Reference: React Json View DownLoad Page</a></li>
          <li><a href="https://mac-s-g.github.io/react-json-view/demo/dist/">Reference: React Json View Demo Page</a></li>
        </ul>
        <ReactJson src={myJsonObject} name={null} />

        <h3>React SyntaxHighlighter</h3>
        <ul className="section-reference">
          <li><a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">Reference: React SyntaxHighlighter GitHub Page</a></li>
        </ul>
        <SyntaxHighlighter language="javascript" showLineNumbers style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default UsefulUtils;
