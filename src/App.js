import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState(0);


   const litres = Number(bottles) * 0.33;
   const grams = Number(litres) * 8 * 4.5;
   const burning = Number(weight) / 10;
   const grams2 = (grams - (burning * time));
  

  function laske(e) {
    e.preventDefault();
    let permilles;
    if (gender === 'Male') {
      permilles = grams2 / (weight * 0.7);
    } else {
      permilles = grams2 / (weight * 0.6);
    }
    setResult(permilles);
  }

  return (
  <form onSubmit={laske}>
    <h3>Calculating alcohol blood level</h3>
    <div>
    <label>Weight </label>
    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
    </div>
    <div>
      <label>Bottles </label>
      <select onChange={(e) => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
      </select>
      <div></div>
      <label>Time </label>
      <select onChange= {(e) => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
      </select>
      </div>
      <div>
        <label>Gender </label>
        <label><input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>Male</label>
        <label><input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />Female</label>
        </div>
        <br></br>
        <label>Permilles </label>
        <output>{(result.toFixed(2))}</output>
        <br></br>
        <div></div>
        <button>Calculate</button>
  </form>
    );
}

export default App;
