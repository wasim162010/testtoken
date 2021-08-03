import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import BouncebackTestToken from "./abis/BouncebackTestToken.json";
import LoadingPage from "./loader";

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
    this.setState({ loading: false });
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


    //Network ID & Contract address
    const networkId = await web3.eth.net.getId();
    const networkData = BouncebackTestToken.networks[networkId];
    const contractAddress = networkData.address;
    this.setState({ contractAddress });
    console.log(`BBTT contract address is ${contractAddress} 📝`);

    const bouncebackTestToken = new web3.eth.Contract(
      BouncebackTestToken.abi,
      networkData.address
    );
    this.setState({ bouncebackTestToken });

    if (networkData) {
      const bouncebackTestToken = new web3.eth.Contract(
        BouncebackTestToken.abi,
        networkData.address
      );
      this.setState({ bouncebackTestToken });
      console.log(bouncebackTestToken);

      const transfer = await bouncebackTestToken.methods
        .transfer("0x33B245F34a4708F69e4690cf31D42aBA76278296", 707)
        .call();
      this.setState({ transfer });
    } else {
      window.alert(
        "BouncebackToken contract not deployed to detected network !"
      );
    }

    const amount = web3.utils.toWei("1000")
    console.log(amount);
    this.setState({ amount });

    //Reward user
    // const airdrop = async (e) => {
    //   e.preventDefault();
    //   let amount;
    //   const owner = "0x33B245F34a4708F69e4690cf31D42aBA76278296";
    // };

    // airdrop(this.state.account) {
    //   this.setState({ loading: true})
    // this.state.bounebackTestToken.methods
    //   .getAirdrop(this.state.account)
    //   .send({ from: contractAddress, value: 1700000 }).once('receipt', (receipt) => {
    //     this.setState({ loading: false })
    // })

    //  Get balance of current account
    const balance = await web3.eth.getBalance(this.state.account);
    console.log(`Your current balance is ${balance} BBTT 💎`);
    this.setState({ balance });

    const bBTTBalance = await bouncebackTestToken.methods.balanceOf(
      0x33b245f34a4708f69e4690cf31d42aba76278296
    );
    console.log(bBTTBalance);
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: "",
      amount: "",
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

  airdrop = () => {
    this.setState({ loading: true });
    
    this.state.bouncebackTestToken.methods
      .transferFrom(this.state.contractAddress, this.state.account, this.state.amount)
      .send({
        from: this.state.contractAddress,
        to: this.state.account,
        value: this.state.amount,
      })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log("button clicked");
    const data = this.state;
    // console.log(this.inputFullNameRef.current.value)
    console.log("Final data is", data);

    this.airdrop();
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
        {!this.state.loading && (
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
                // required
                onChange={this.handleInputChange}
              />
              <p>Enter Age :</p>
              <input
                type="number"
                name="age"
                // required
                onChange={this.handleInputChange}
              />
              <p>Enter DOB :</p>
              <input
                type="date"
                name="DOB"
                // required
                onChange={this.handleInputChange}
              />
              <p>Enter Phone number :</p>
              <input
                type="tel"
                name="phone"
                // required
                onChange={this.handleInputChange}
              />
              <p>Enter Address :</p>
              <input
                type="text"
                name="address"
                // required
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
        )}
        {this.state.loading && <LoadingPage />}
      </div>
    );
  }
}

export default App;
