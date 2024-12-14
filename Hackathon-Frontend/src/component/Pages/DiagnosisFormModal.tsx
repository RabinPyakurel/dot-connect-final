import { Button, Form, Input, message } from "antd";
import { Dispatch, SetStateAction } from "react";
import { DiagnosisInformationControllerService, DiagnosisInformationDto } from "../../services/openapi";
import Title from 'antd/es/typography/Title';

import Modal from 'react-bootstrap/Modal';

interface IDiagnosisFormModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  patientId: string | null;
}

function DiagnosisFormModal({isOpen, onClose, patientId}:IDiagnosisFormModalProps) {

  const handleClose = () => onClose(false);

  const [form] = Form.useForm();
  const handleSubmit = async (values: DiagnosisInformationDto) => {
    try {
      values.patientId = patientId!;
      await DiagnosisInformationControllerService.save2(values);
      message.success("Diagnosis data saved successfully!");
      form.resetFields();
    } catch {
      message.error("Error while saving diagnosis information");
    }
  };

  return (
    <>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div style={styles.container}>
            <Title level={3} style={styles.title}>
              Diagnosis Form
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={styles.form}
            >
              {/* Date Field */}
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please select the date!" }]}
              >
                <Input type="date" style={styles.input} />
              </Form.Item>

              {/* Diagnosis Name Field */}
              <Form.Item
                label="Diagnosis Name"
                name="diagnosisName"
                rules={[{ required: true, message: "Please enter the diagnosis name!" }]}
              >
                <Input placeholder="Enter Diagnosis Name" style={styles.input} />
              </Form.Item>

              {/* Result Field */}
              <Form.Item
                label="Result"
                name="result"
                rules={[{ required: true, message: "Please enter the result!" }]}
              >
                <Input placeholder="Enter Diagnosis Result" style={styles.input} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" style={styles.submitButton}>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Inline styles
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

export default DiagnosisFormModal;
