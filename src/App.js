import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import BouncebackTestToken from "./abis/BouncebackTestToken.json";

if (typeof window.ethereum !== "undefined") {
  console.log("Metamask is installed 🦊");
} else {
  console.log("Install Metamask");
}

class App extends React.Component {
  // Load component
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // Load Web3
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  //Load Blockchain data
  async loadBlockchainData() {
    const web3 = window.web3;
    //Load account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ account: accounts[0] });

    // Contract address
    const contractAddress = "0xf813b8B8C82626A2f61274e1c23c3DB746D70A11";

    //Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = BouncebackTestToken.networks[networkId];

    const bounebackTestToken = new web3.eth.Contract(
      BouncebackTestToken.abi,
      networkData.address
    );
    this.setState({ bounebackTestToken });

    if (networkData) {
      const bounebackTestToken = new web3.eth.Contract(
        BouncebackTestToken.abi,
        networkData.address
      );
      this.setState({ bounebackTestToken });
      console.log(bounebackTestToken);

      const transfer = await bounebackTestToken.methods
        .transfer("0xf813b8B8C82626A2f61274e1c23c3DB746D70A11", 707)
        .call();
      this.setState({ transfer });
    } else {
      window.alert(
        "BouncebackToken contract not deployed to detected network !"
      );
    }

    //Reward user
    // rewardUser() {
    //   this.setState({ loading: true });
    //   this.state.bounebackTestToken.methods
    //     .rewardUser()
    //     .send({ from: contractAddress, value: 707 })
    //     .once("receipt", (receipt) => {
    //       this.setState({ loading: false });
    //     });
    // }

    //  Get balance of current account
    const balance = await web3.eth.getBalance(this.state.account);
    console.log(balance);
    this.setState({ balance });
  }

  // reward()
  // transfer(sender, recipient, amount) {
  //   this.state.bounebackTestToken.methods
  //     .transfer(this.state.account, 707)
  //     .send({
  //       from: "0xf813b8B8C82626A2f61274e1c23c3DB746D70A11",
  //       to: this.state.account,
  //       value: 707,
  //     }).once;
  // }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: "",
      bounebackTestToken: null,
      loading: true,
      myFullName: "",
      age: "",
      DOB: "",
      phone: "",
      address: "",
      favourite_tv_show: "",
      favourite_celeb: "",
    };

    // this.reward = this.reward.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let amount = window.web3.utils.toWei("15", "Ether");

    console.log("button clicked");
    const data = this.state;
    // console.log(this.inputFullNameRef.current.value)
    console.log("Final data is", data);

    // Reward user
    // reward();
    // this.props.transfer(this.state.account, 15);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event)
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // componentDidMount(){
  //     this.inputFullNameRef.current.focus()
  // }
  render() {
    const { myFullName } = this.state;
    const { email } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bounce Back Digital Survey App
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">
                  Your wallet address: {this.state.account} // Your balance:
                  {this.state.balance} BBTT
                </small>
              </small>
            </li>
          </ul>
          {/* {this.state.loading ? (
          <div id="loader" className="text-center mt -5">
            <p> Loading...</p>
          </div>
        ) : (
          account={this.state.account}
        )} */}
        </nav>

        <h1>Survey</h1>
        <p>Enter name : {myFullName}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="myFullName"
            required
            onChange={this.handleInputChange}
          />
          <p>Enter Age :</p>
          <input
            type="number"
            name="age"
            required
            onChange={this.handleInputChange}
          />
          <p>Enter DOB :</p>
          <input
            type="date"
            name="DOB"
            required
            onChange={this.handleInputChange}
          />
          <p>Enter Phone number :</p>
          <input
            type="tel"
            name="phone"
            required
            onChange={this.handleInputChange}
          />
          <p>Enter Address :</p>
          <input
            type="text"
            name="address"
            required
            onChange={this.handleInputChange}
          />
          <p>Enter Favourite tv show :</p>
          <textarea
            type="text"
            name="favourite_tv_show"
            onChange={this.handleInputChange}
          />
          <p>Enter Favourite celebrity :</p>
          <textarea
            type="text"
            name="favourite_celeb"
            onChange={this.handleInputChange}
          />
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
