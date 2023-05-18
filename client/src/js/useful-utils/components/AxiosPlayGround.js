import React, { Component } from "react";
import axios from 'axios'

class AxiosPlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pingText: "initial ping",
      serialNum: 0,
      status: "INITIALIZED",
      pongs: [],
    }
  }

  async ping() {
    const serialNum = this.state.serialNum + 1;
    try {
      const response = await axios.get(`/dummy-get/${this.state.pingText}`);
      this.setState({
        pongs: [
          ...this.state.pongs, 
          {
            serialNum, 
            pong: response.data.pong
          }
        ],      
        status: "GOT_PONG",
        serialNum,
      });
    } catch (error) {
      console.error(error)
      this.setState({status: "ERROR"});
    }
  }

  componentDidMount() {
    this.ping()
  }

  render() {
    return (
      <div>
        <input  type="text" value={this.state.pingText} onChange={(e) => {this.setState({pingText: e.target.value})}}/>
        <button onClick={() => this.ping()}>
          Ping!
        </button>
        <div>Pinged {this.state.serialNum} once. </div>
        <div>Status: {this.state.status}</div>
        <div>Pongs:
          <pre>
          {this.state.pongs.map(pong=>(
            <div key={pong.serialNum}>{pong.serialNum}: {pong.pong}</div>
          ))}
          </pre>
        </div>
      </div>
    );
  }
}

export default AxiosPlayGround;
