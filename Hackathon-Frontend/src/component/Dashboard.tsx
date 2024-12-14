import {
    PlusOutlined,
    SearchOutlined,
    UserAddOutlined,
  } from "@ant-design/icons";
  import {
    Button,
    Card,
    Dropdown,
    Form,
    Input,
    Layout,
    Menu,
    Spin,
    Table,
    Tabs,
    Typography,
    message,
  } from "antd";
  import { jwtDecode } from "jwt-decode";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import {
    CheckUpInformationControllerService,
    CheckUpInformationDto,
    DiagnosisInformationControllerService,
    DiagnosisInformationDto,
    MedicationControllerService,
    MedicationDto,
    PatientInformationControllerService,
    PatientInformationDto,
  } from "../services/openapi";
import Navbar from "./Pages/Navbar";
  
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const { Text, Link } = Typography;
  
  const Dashboard: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [medication, setMedication] = useState<MedicationDto[]>([]);
    const [checkups, setCheckups] = useState<CheckUpInformationDto[]>([]);
    const [diagnosis, setDiagnosis] = useState<DiagnosisInformationDto[]>([]);
  const[hasWriteAccess,setHasWriteAccess]=useState(false);
    const[,setAuthority]=useState();
    const [patientData, setPatientData] = useState<PatientInformationDto | null>(
      null
    );
    // const Dashboard: React.FC = () => {
      const Navigate = useNavigate();
    
      const handleButtonClick = () => {
        Navigate('/addpatient');
      };
  
    // Simulated logged-in agency
  
    const onSearch = async (_values: {
      lastName: string;
      birthYear: number;
      nationalId: string;
    }) => {
      setLoading(true);
      setPatientData(null);
      setCheckups([]);
      setDiagnosis([]);
      setMedication([]);
      try {
        const patient = await PatientInformationControllerService.get(
          _values.lastName,
          _values.birthYear,
          _values.nationalId
        );
        const dto = patient as PatientInformationDto;
        setPatientData(patient as PatientInformationDto);
  
        const medication = await MedicationControllerService.get1(dto.patientId);
        setMedication(medication);
  
        const checkups = await CheckUpInformationControllerService.getall(
          dto.patientId
        );
        setCheckups(checkups);
  
        const diagnosis = await DiagnosisInformationControllerService.get2(
          dto.patientId
        );
        setDiagnosis(diagnosis);
      } catch {
        message.error("could not fine patient information");
      } finally {
        console.log(setLoading(false));
      }
    };
    const navigate = useNavigate();
  
    const handleClick = (path:string) => {
      navigate(path+"/"+patientData?.patientId); // Navigate to the desired route
    };
    useEffect(() => {
      const token = localStorage.getItem('authtoken'); // Replace with your token storage method
  
      if (token) {
        const decodedToken = jwtDecode(token) as any ;
        setAuthority(decodedToken.scope);
        setHasWriteAccess(decodedToken.scope.indexOf("Write") >-1 );
      }
    }, []);
    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1" onClick={() => handleClick('/mdetails')} >Add Medication</Menu.Item>
        <Menu.Item key="2" onClick={() => handleClick('/diagnosis')}>Add Diagnosis</Menu.Item>
        <Menu.Item key="3" onClick={() => handleClick('/cdetails')}>Add Checkup</Menu.Item>
      </Menu>
    );
  
    const columnsMedication = [
      { 
        title: "Date", dataIndex: "date", key: "date" },
        { title: "Hospital Name", dataIndex: "hospitalName", key: "hospitalName" },
      {
        title: "Medicine Name",
        dataIndex: "medicineName",
        key: "medicineName",
      },
      { title: "Frequency", dataIndex: "frequency", key: "frequency" },
    ];
  
    const columnsCheckups = [
      { title: "Date Of Visit", dataIndex: "dateVisited", key: "dateVisited" },
      { title: "Hospital Name", dataIndex: "hospitalName", key: "hospitalName" },
      { title: "Reason of visit", dataIndex:"reason", key: "reason" },
      { title: "Followup date", dataIndex:"followUpDate", key: "followUpDate" },
    ];
  
    const columnsDiagnosis = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Hospital Name", dataIndex: "hospitalName", key: "hospitalName" },
      {
        title: "Diagnosis Name",
        dataIndex: "diagnosisName",
        key: "diagnosisName",
      },
      { title: "Result", dataIndex: "result", key: "result" },
    ];
  
   
  
  
    return (
      <>
  
      <Navbar>  
      <Layout style={{ background: "#f0f2f5" }}>
        
  
  
        <Content style={{ padding: "20px" }}>
          <Card className=" d-flex justify-content-center">
            <Form layout="inline" onFinish={onSearch}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Enter last name" }]}
                >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                label="Birth Year"
                name="birthYear"
                rules={[{ required: true, message: "Enter date of birth year" },{ pattern: /^\d{4}$/, message: "Please enter a valid 4-digit year" }]}
                >
                <Input placeholder="YYYY" />
              </Form.Item>
              <Form.Item
                label="National ID"
                name="nationalId"
                rules={[{ required: true, message: "Enter National ID" }]}
                >
                <Input placeholder="National ID" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
                loading={loading}
                >
                Search
              </Button>
            </Form>
          </Card>
  
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Spin size="large" />
            </div>
          ) : patientData ? (
            <Card style={{ marginTop: "20px" }} title="Patient Information">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
                >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                    gap: "10px 20px", // Row and column gaps
                    flexGrow: 1,
                  }}
                >
                  <div>
                    <b>First Name:</b> {patientData.firstName}
                  </div>
                  <div>
                    <b>Last Name:</b> {patientData.lastName}
                  </div>
                  <div>
                    <b>Gender:</b> {patientData.gender}
                  </div>
                  <div>
                    <b>DOB:</b> {patientData.dateOfBirth}
                  </div>
                  <div>
                    <b>Blood Group:</b> {patientData.bloodGroup}
                  </div>
                  <div>
                    <b>National ID:</b> {patientData.citizenshipNumber}
                  </div>
                </div>
                {hasWriteAccess && (
  
             
                <Dropdown
                  overlay={dropdownMenu}
                  trigger={["click"]}
                  // style={{ alignSelf: "flex-start" }}
                  >
                  <Button type="primary" icon={<PlusOutlined />}>
                    Add
                  </Button>
                </Dropdown>
                   )}
              </div>
  
              <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
                <TabPane tab="Medications" key="1">
                  <Table
                    dataSource={medication.map((med, index) => ({
                      key: index,
                      ...med
                      
                    }))}
                    columns={columnsMedication}
                    pagination={{}}
                    />
                </TabPane>
                <TabPane tab="Diagnosis" key="2">
                  <Table
                    dataSource={diagnosis.map((diag, index) => ({
                      key: index,
                      ...diag
                    }))}
                    columns={columnsDiagnosis}
                    pagination={{}}
                    />
                </TabPane>
                <TabPane tab="Checkups" key="3">
                  <Table
                    dataSource={checkups.map((check, index) => ({
                      key: index,
                      ...check
                    }))}
                    columns={columnsCheckups}
                    pagination={{}}
                    />
                </TabPane>
              </Tabs>
            </Card>
          ) : (
            <Card style={{ marginTop: "20px", textAlign: "center" }}>
              <Text type="warning" style={{ fontSize: "16px" }}>
                No patient found!
              </Text>
              {hasWriteAccess && (
  
  
              
              <div style={{ marginTop: "10px" }}>
                <Link href="#">
                  <Button type="primary" onClick={handleButtonClick} icon={<UserAddOutlined />}>
                    Add New Patient
                  </Button>
                </Link>
              </div>)}
            </Card>
          )}
        </Content>
      </Layout>
      </Navbar>
  
          </>
    );
  };
  
  export default Dashboard;