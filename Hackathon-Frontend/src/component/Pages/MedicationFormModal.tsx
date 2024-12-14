import { Button, Form, Input, message } from "antd";
import Title from 'antd/es/typography/Title';
import { Dispatch, SetStateAction } from 'react';

import Modal from 'react-bootstrap/Modal';
import { MedicationControllerService, MedicationDto } from "../../services/openapi";

interface IMedicationFormModalProps{
  isOpen: boolean
  onClose:Dispatch<SetStateAction<boolean>>
  patientId: string | null
}

function MedicationFormModal({isOpen, onClose, patientId}: IMedicationFormModalProps) {


  const handleClose = () => onClose(false);

  const [form] = Form.useForm();

  const handleSubmit = async (values: MedicationDto) => {
    console.log("Diagnosis Data:", values);
      try{
        values.patientId=patientId!;
        await MedicationControllerService.save1(values);
        message.success("Medication data saved successfully!");
        form.resetFields();

      }
      catch{
        message.error("error while saving medicataion information")
      }
  };

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> <div style={styles.container}>
      <Title level={3} style={styles.title}>
       Medication Form
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={styles.form}
        >
        {/* Date Field */}
        <Form.Item
          label="date"
          name="date"
          rules={[{ required: true, message: "Please select the date!" }]}
          >
            <Input type="date" />
        </Form.Item>

        {/* Diagnosis Name Field */}
        <Form.Item
          label="Medication Name"
          name="medicineName"
          rules={[{ required: true, message: "Please enter the Medicine name!" }]}
        >
          <Input placeholder="Enter Medication Name" style={styles.input} />
        </Form.Item>

        {/* Result Field */}
        <Form.Item
          label="frequency"
          name="frequency"
          rules={[{ required: true, message: "Please enter the result!" }]}
          >
        <Input placeholder="Enter Medication Result" style={styles.input} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.submitButton}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div></Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const styles = {
  container: {
    height:"100%",
    width: "80%",
    borderRadius: "12px",
    margin: "auto",
    
    backgroundColor: "#ffffff",
  },
  title: {
    textAlign: "center" as const,
    color: "#9c3af9",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
  },
};


export default MedicationFormModal;

