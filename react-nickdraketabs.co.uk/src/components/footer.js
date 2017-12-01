import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <Container fluid="true" className="footer text-center">
          <Row>
            <Col md="12">
              <p>Shameless plug: my band <a href="http://www.arco.org.uk/" target="_blank" rel="noopener">Arco's</a> website</p>
              <small><p>Music by <a href="http://www.brytermusic.com/" target="_blank" rel="noopener">Nick Drake</a> | Tabs by Chris Healey <span class="bar">|</span> Website by <a href="https://leoreeves.github.io/" target="_blank" rel="noopener">Leo Reeves</a></p></small>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}