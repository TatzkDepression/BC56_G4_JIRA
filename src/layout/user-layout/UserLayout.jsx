import { Col, Row } from 'antd';
import React from 'react';

const UserLayout = ({ Component }) => {

  return (
    <Row className='user'>
      <Col lg={12} className='user__left'>
        <img src="./img/brand.png" alt="" />
      </Col>
      <Col md={24} lg={12} className='user__right'>
        <Component/>
      </Col>
    </Row>
  )
}

export default UserLayout;