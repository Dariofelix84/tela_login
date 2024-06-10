import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = ({ setCurrentStep }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);

  function clearFields() {
    setUsername("")
    setpassword("")
  }

  function toggleVisibility() {
    setShow((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados: " + username + " - " + password);
    // console.log( username, password);
    clearFields()
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" method="post">
        <h1>Acesse o sistema</h1>

        <div className="input-field">
          <input type="email" placeholder="E-mail" required value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input type={show ? "text" : "password"} placeholder="Senha" required value={password}
            onChange={(e) => setpassword(e.target.value)} />
          {show ? (
            <FaEyeSlash onClick={toggleVisibility} className="icon" />
          ) : (
            <FaEye onClick={toggleVisibility} className="icon" />
          )}
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" required style={{ marginRight: '6px' }} />
            Lembrar de mim
          </label>
          <a href="#">Esqueceu a senha?</a>

        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a onClick={() => setCurrentStep("register")}>Registrar</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login


