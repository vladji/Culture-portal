import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button, Form } from 'react-bootstrap'
import './styleguide.css'

const Styleguide = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="wrapper">
        <section className="styleguide-section colors">
          <h4>
            Colors
        </h4>
          <div className="colors-inner">
            <div style={{ backgroundColor: '#010000' }} className="color-card">
              <span className="color-value">#010000</span>
            </div>
            <div style={{ backgroundColor: '#1a1a1a' }} className="color-card">
              <span className="color-value">#1a1a1a</span>
            </div>
            <div style={{ backgroundColor: '#d9534f' }} className="color-card">
              <span className="color-value">#d9534f</span>
            </div>
            <div style={{ backgroundColor: '#4bbf73' }} className="color-card">
              <span className="color-value">#4bbf73</span>
            </div>
            <div style={{ backgroundColor: '#f7f7f9' }} className="color-card">
              <span className="color-value">#f7f7f9</span>
            </div>
          </div>
        </section>
        <section className="styleguide-section buttons">
          <h4>
            Buttons
        </h4>
          <div className="buttons-block">
            <p>
              Default
          </p>
            <div class="buttons-inner">
              <Button variant="primary" className="btn btn-primary">Primary</Button>
              <Button variant="secondary" className="btn btn-secondary">Secondary</Button>
              <Button variant="success" className="btn btn-success">Success</Button>
            </div>
          </div>
          <div className="buttons-block">
            <p>
              With outline
          </p>
            <div class="buttons-inner">
              <Button variant="outline-primary" className="btn btn-outline-primary">Primary</Button>
              <Button variant="outline-secondary" className="btn btn-outline-secondary">Secondary</Button>
              <Button variant="outline-success" className="btn btn-outline-success">Success</Button>
            </div>
          </div>
          <div className="buttons-block">
            <p>
              Disabled
          </p>
            <div class="buttons-inner">
              <Button variant="primary" disabled className="btn btn-outline-primarydisabled">Primary</Button>
              <Button variant="secondary" disabled className="btn btn-outline-secondarydisabled">Secondary</Button>
              <Button variant="success" disabled className="btn btn-outline-successdisabled">Success</Button></div>
          </div>
          <div className="buttons-block">
            <p>
              Sizes
          </p>
            <div className="buttons-inner">
              <Button variant="primary" size="lg" class="btn btn-primary btn-lg">
                Large button
            </Button>
              <Button variant="primary" className="btn btn-primary">
                Default button
            </Button>
              <Button variant="primary" size="sm" class="btn btn-primary btn-sm">
                Small button
            </Button>
            </div>
          </div>
        </section>
        <section className="styleguide-section inputs">
          <h4>
            Inputs
        </h4>
          <Form.Group className="form-group">
            <Form.Label className="col-form-label">Default input</Form.Label>
            <Form.Control className="form-control" placeholder="Default input" />
          </Form.Group>
        </section>
      </div>
    </Layout>
  )
}

export default Styleguide