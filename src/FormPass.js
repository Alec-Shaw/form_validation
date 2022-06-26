import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useState } from "react";
import SearchParams from "./SearchParams";

const FormPass = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const [emailDirty, setEmailDirty] = useState();
  const [emailError, setEmailError] = useState("Поле не может быть пустым");
  const [passwordDirty, setPasswordDirty] = useState();
  const [passwordError, setPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState();
  const [repPasswordError, setRepPasswordError] = useState("Поле не может быть пустым");
  const [repDirPass, setRepDirPass] = useState();
  const [display, setDisplay] = useState("none")

  let dat = new Date().toLocaleTimeString();
  let dat1 = new Date();
  dat1 = dat1.toLocaleDateString('ru', {year: 'numeric', month: 'long', day: 'numeric'});

    const rephendpass = (e) => {
      setRepeatPassword(e.target.value);

        if(e.target.value === password) {
          setRepPasswordError("")
        } else {
          setRepPasswordError('Не совпадает');
        }
        
      }

  useEffect(() => {
    if (repPasswordError & emailError) {
      setFormValid(false);  
    } else {
      setFormValid(true);
    }
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, repPasswordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);

    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };
  const passwordHendler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length < 8) {
      setPasswordError("Используйте не менее 8 символов");
    } else {
      setPasswordError("");
    }
    if(e.target.value !== repeatPassword) {
      setRepPasswordError('Не совпадает');
    }else {
      setRepPasswordError('');
    }
  }

  const blurHandel = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "repeat_password":
          setRepDirPass(true);
          break;
      default:
    }
  };
  const form = document.forms["test"];
  const fd = new FormData(form);
  let data = {};
      for (let [key, prop] of fd) {
        data[key] = prop;
  }
  data = JSON.stringify(data, null, 2);
  
  const sendForm = (e) => {
    e.preventDefault();
    if(e){
      setDisplay("")
    }
  console.log(data);
}



  return (
    <Form className="formwidt" name="test" >
      <Row>
    <Col className="city" sm="4" xs="6">
      <Label for="examplePassword">Выберите город</Label>
    </Col>
    <Col sm="4" xs="6">
      <SearchParams/>
    </Col>
    <Col sm="4"> 
    </Col>
  </Row>
  <Row>
  <Col className="city" sm="4" xs="6">
      <Label for="examplePassword">Password</Label>
    </Col>
    <Col sm="4" xs="6">
       <FormGroup> <Input   
          onChange={(e) => passwordHendler(e)}
          value={password}
          name="password"
          placeholder="password placeholder"
          type="password"
          onBlur={(e) => blurHandel(e)}
        />{passwordDirty && passwordError && <div className="form1">{passwordError}</div>}
        </FormGroup>
    </Col>
    <Col sm="4">
      <p className="col5">Ваш новый пароль должен содержать не менее 8 символов</p>
    </Col>
  </Row>
  <Row>
  <Col className="city" sm="4" xs="6">
      <Label for="examplePassword">repeat Password</Label>
    </Col>
    <Col sm="4" xs="6">
       <FormGroup> 
        <Input
          onChange={(e) => rephendpass(e)}
          placeholder="password placeholder"
          type="password"
          name="repeat_password"
          value={repeatPassword}
          onBlur={(e) => blurHandel(e)}
        />  {repDirPass && repPasswordError && <div className="form1">{repPasswordError}</div>}
        </FormGroup>
    </Col>
    <Col sm="4">
       <p className="col5">Повторите пароль</p>
    </Col>
  </Row>
  <Row>
  <Col className="city" sm="4" xs="6">
      <Label for="exampleEmail">Email</Label>
    </Col>
    <Col sm="4" xs="6">
      <FormGroup>
       <Input
          onChange={(e) => emailHandler(e)}
          value={email}
          name="email"
          placeholder="with a placeholder"
          type="email"
          onBlur={(e) => blurHandel(e)}
        />{emailDirty && emailError && <div className="form1">{emailError}</div>}
      </FormGroup> 
    </Col>
    <Col sm="4">
       <p className="col5">Введите элктронную почту</p>
    </Col>
  </Row>  
  <Row><Col xs="3">
    </Col>
    <Col xs="3">
       <div><button 
               disabled={!formValid} 
               type="submit" 
               onClick={(e) => sendForm(e)}
               >
    Изменить
  </button></div>
    </Col>
    <Col xs="5">
     <div className={display}>Последнее изменение: {dat}, {dat1}</div>
    </Col>
  </Row>   
    </Form>
  );
};

export default FormPass;
