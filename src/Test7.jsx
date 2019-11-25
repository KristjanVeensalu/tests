import React from "react";
import PropTypes from "prop-types";

class Test7 extends React.PureComponent {
	
	static propTypes = {
		history: PropTypes.object.isRequired,
	};


  constructor(props){
    super(props);
    this.state={
      fullName: "",
      phoneNumber:"",
      address: "",
    };
  }

  handleSubmit=(event)=>{
    event.preventDefault();
	console.log(this.state);
    fetch("/api/v1/users", {
		method: "POST",
		headers: {
		"content-type":"application/json"
		},
      body: JSON.stringify(this.state),
    })
    .then(res =>res.json())
    .then(data =>{
      console.log("data", data);
      this.props.history.push("/");
    })
    .catch(err =>{
      console.log(err);
      
    });
  };
	
	
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
	
  render() {
    return (
      <div>
        <Task />
        implement
		<div className="ds">
          <form className="ds-item style-2" onSubmit={this.handleSubmit}>
            <div className={"row"}>
              <label htmlFor="fullName">Nimi</label>
              <input name={"fullName"} type="text" value={this.state.fullName} onChange = {this.handleChange} />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
				<input name={"address"} type="text" value={this.state.address} onChange = {this.handleChange} />
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Contact</label>
				<input name={"phoneNumber"} type="text" value={this.state.phoneNumber} onChange = {this.handleChange} />
            </div>
            <button style={{width: "100%"}}>
              Otsi
            </button>
          </form>

		</div>
        </div>
    );
  }
}

export default Test7;

const Task = () => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>
  </div>
);
