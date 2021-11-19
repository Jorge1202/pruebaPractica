import React, {useState} from 'react';
import  { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css'
import Fetch from '../assets/fetch'

let fetch = new Fetch();
const Login = () => {
    let navigate  = useNavigate();
    const [login, setlogin] = useState({Username: '', Password:''});
    const [estado,setEstado] = useState({ done:false, success:false, cargando:false, mensaje:''});


    const handleChange = e => {
        const {name, value} = e.target;
        setlogin({...login, [name]: value});
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
     
        setEstado({cargando: true, done:false});
        let objFetch = {
            url: 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication',
            obj: {Body: login}
        }
        fetch.POST(objFetch)
        .then(data => {
            if(data.IsOK){
                localStorage.setItem('token', data.Body.Token);
                sessionStorage.setItem('User', JSON.stringify(data.Body.UserLoginData));
                setEstado({cargando: false, done:false});
                navigate ('/home');
            } else {
                setEstado({mensaje: data.Messages, done:true});
            }
            console.log(data);
        })
        console.log(login)
    }
    
    return (
        <div className="Login">
            {
                estado.done ? 
                <div class="alert alert-warning" role="alert">{estado.mensaje} </div> : 
                <p></p>
            }
            
            <div className="Login-cont">
                <h1>Inicio de sesión</h1>
                <div className="Login-form mt-5">
                    <form onSubmit={handleSubmit} className="form-inline">
                        <div className="form-group row">
                            <label for="staticUser" className="col-sm-2 col-form-label">Usuario:</label>
                            <div className="col-sm-10">
                                <input value={login.Username} name="Username" onChange={handleChange} type="text" readonly className="form-control" id="staticUser" placeholder="usuario" />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <label for="staticPassword" className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                <input value={login.Password} name="Password" onChange={handleChange} type="text" readonly className="form-control" id="staticPassword" placeholder="****" />
                            </div>
                        </div>
                        <div className="form-cont-buton mt-5">
                            <p>
                                {
                                    estado.cargando 
                                    ?   <button className="btn btn_principal" type="button" disabled>
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Cargando...</span>
                                        </button>
                                    :  <button className="fs-5 btn btn-success" type="submit">Ingresar</button>
                            }
                            </p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;