import { useState } from "react";
import { Button, Row, Col } from "reactstrap";

const Header = () => {
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState("Поле для статуса");
  let clasName = "btnactive";
  if (active) {
    clasName = "btn";
  }
  return (

    <div className="status">
      <Row>
        <Col sm="7" xs="7"
        >
          <span className="gray">Здравствуйте,</span>
          <span className="black"> Клиент №3968746</span>
        </Col>

        <Col sm="3"> 
          <span className="pointer" onClick={() => setActive()}>
            Сменить статус
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
        </Col>
        <Col xs="6">
          <div className="bgstatus">
          <input disabled={active} value={status} onChange={() => setStatus()} />
          </div>
        </Col>

        <Col xs="1"> 
        <Button className={clasName} onClick={() => setActive(true)}>
            Ok
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Header;