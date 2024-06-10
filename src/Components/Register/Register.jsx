// import { FaUser, FaLock, FaEmail } from "react-icons/fa";
import { FaUser, FaLock } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";

import { useState } from "react";

import "./Register.css";

const Register = ({ setCurrentStep }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
    
  function clearFields() {
    setUsername("")
    setpassword("")
    setEmail("")
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados: " + username + " - " + email + " - " + password);
    
    clearFields()
    // console.log( username, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" method="post">
        <h1>Registrar</h1>
        <div className="input-field">
          <input


type="text" placeholder="Nome de usuário " required value={username} 
            onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="email" placeholder="E-mail " required value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <MdOutlineMail className="icon" />
        </div>
        <div className="input-field">
          <input
            type="text" placeholder="Senha" required value={password}
            onChange={(e) => setpassword(e.target.value)} />
          <FaLock className="icon" />
          
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" required style={{ marginRight: '6px' }} />
            Eu aceito os termos e condições
          </label>

        </div>
        <button>Registrar</button>

        <div className="signup-link">
          <p>
            Já tem uma conta? <a onClick={() => setCurrentStep("login")}>Login</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
