import { Button, DatePicker, Form, Input, Typography, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { MedicationControllerService, MedicationDto } from "../../services/openapi";
import Navbar from "./Navbar";

const { Title } = Typography;

const MedicineForm: React.FC = () => {
  const [form] = Form.useForm();
  let { patientId } = useParams();

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
    <Navbar>

    <div style={styles.container}>
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
          <DatePicker style={styles.input} />
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
    </div>
</Navbar>
  );
};

// Inline styles
const styles = {
  container: {
    // maxWidth: "500px",
    width: "50%",
    padding: "20px",
    borderRadius: "12px",
    margin: "50px auto",
    
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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

export default MedicineForm;