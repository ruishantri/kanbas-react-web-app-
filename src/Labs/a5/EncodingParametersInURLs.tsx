import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

interface APIResponse {
  data: any;
}

function URLParameterEncoding() {
  const [operandA, setOperandA] = useState<number>(34);
  const [operandB, setOperandB] = useState<number>(23);
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [calculationResult, setCalculationResult] = useState<number>(0);

  const performAddition = async (a: number, b: number) => {
    const response: APIResponse = await axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setCalculationResult(response.data);
  };

  const performSubtraction = async (a: number, b: number) => {
    const response: APIResponse = await axios.get(`${API_BASE}/a5/subtract/${a}/${b}`);
    setCalculationResult(response.data);
  };

  const fetchWelcomeMessage = async () => {
    const response: APIResponse = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcomeMessage(response.data);
  };

  useEffect(() => {
    fetchWelcomeMessage();
  }, []);

  return (
    <div>
      <h3>URL Parameter Encoding Example</h3>
      <h4>Simple Calculator</h4>
      <input type="number" value={operandA} onChange={(e) => setOperandA(parseInt(e.target.value) || 0)} />
      <input type="number" value={operandB} onChange={(e) => setOperandB(parseInt(e.target.value) || 0)} />

      <div className="link-container">
        <a href={`${API_BASE}/a5/add/${operandA}/${operandB}`}>Compute {operandA} + {operandB}</a>
        <a href={`${API_BASE}/a5/subtract/${operandA}/${operandB}`}>Compute {operandA} - {operandB}</a>
      </div>

      <h4>Advanced Operations</h4>
      <div className="button-container">
        <button onClick={() => performAddition(operandA, operandB)}>Calculate Addition</button>
        <button onClick={() => performSubtraction(operandA, operandB)}>Calculate Subtraction</button>
      </div>

      <h4>Welcome Message</h4>
      <p>{welcomeMessage}</p>
      <h4>Calculation Result</h4>
      <input value={calculationResult} type="number" readOnly />
    </div>
  );
}

export default URLParameterEncoding;
