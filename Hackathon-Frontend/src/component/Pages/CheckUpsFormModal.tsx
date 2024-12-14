import { Button, Form, Input, message } from "antd";
import { Dispatch, SetStateAction } from "react";
import {
  CheckUpInformationControllerService,
  CheckUpInformationDto,
} from "../../services/openapi";
import Title from "antd/es/typography/Title";
import Modal from "react-bootstrap/Modal";

interface ICheckUpFormModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  patientId: string | null;
}

function CheckUpFormModal({
  isOpen,
  onClose,
  patientId,
}: ICheckUpFormModalProps) {
  const handleClose = () => onClose(false);

  const [form] = Form.useForm();

  const handleSubmit = async (values: CheckUpInformationDto) => {
    try {
      values.patientId = patientId!;
      await CheckUpInformationControllerService.save3(values);
      message.success("CheckUp data saved successfully!");
      form.resetFields();
    } catch {
      message.error("Error while saving checkup information");
    }
  };

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div style={styles.container}>
            <Title level={3} style={styles.title}>
              Check-Up Details
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={styles.form}
            >
              {/* Date Visited Field */}
              <Form.Item
                label="Date Visited"
                name="dateVisited"
                rules={[
                  { required: true, message: "Please select the visit date!" },
                ]}
              >
                <Input type="date" style={styles.input} />
              </Form.Item>

              {/* Reason of Visit Field */}
              <Form.Item
                label="Reason of Visit"
                name="reason"
                rules={[
                  {
                    required: true,
                    message: "Please enter the reason for the visit!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter the reason for visit"
                  style={styles.input}
                />
              </Form.Item>

              {/* Next Follow-up Date Field */}
              <Form.Item
                label="Next Follow-up Date"
                name="followUpDate"
                rules={[
                  {
                    required: true,
                    message: "Please select the follow-up date!",
                  },
                ]}
              >
                <Input type="date" style={styles.input} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={styles.saveButton}
                >
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
}

// Inline styles
const styles = {
  container: {
    height: "100%",
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
  saveButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default CheckUpFormModal;
