import React from "react";
import PropTypes from "prop-types";

class Test8 extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };


  constructor(props){
    super(props);
    this.state={
      fullName: "",
      burger: "",
      drink:"",
      readOnly:true,
    };
	this._click = this._click.bind(this);
	this._click2 = this._click2.bind(this);
  }
  _click(){
     this.setState(prevState => ({readOnly: !prevState.readOnly}));
  }
   _click2(){
     this.setState(prevState => ({readOnly: !prevState.readOnly}));
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    fetch("/", {
      method: "POST",
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
              <input name={"fullName"} type="text" value={this.state.fullName} onChange = {this.handleChange} readOnly={this.state.readOnly} />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Address</label>
				<input name={"address"} type="text" value={this.state.address} onChange = {this.handleChange} readOnly={this.state.readOnly} />
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Contact</label>
				<input name={"phoneNumber"} type="text" value={this.state.phoneNumber} onChange = {this.handleChange} readOnly={this.state.readOnly} />
            </div>
            <button style={{width: "100%"}}>
              Otsi
            </button>
          </form>
          <button onClick={this._click}>disable</button>
          <button onClick={this._click2}>enable</button>

		</div>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);
