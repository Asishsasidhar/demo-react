import React from 'react';
import { Modal} from 'antd';

export const FeatureModal = (props) => {
    const {isModalVisible, handleCancel, handleOk } = props
    
    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        
    )
}