import {
    LogoutOutlined
  } from "@ant-design/icons";
  import {
    Button,
    Card,
    Layout,
    Spin,
    Table,
    Tabs,
    Typography,
    message,
  } from "antd";
  import { Header } from "antd/es/layout/layout";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import {
    SelfInformationControllerService,
    SelfInformationDto,
  } from "../services/openapi";
  import AppFooter from "./AppFooter";
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const { Text } = Typography;
  
  const SelfInformation : React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [patientData, setPatientData] = useState<SelfInformationDto | null>(
      null
  
    );
    const logout=()=>{
      localStorage.removeItem("NID")
      navigate('/');
    };
   
  
    // Simulated logged-in agency
  
    const onSearch = async ( ) => {
      setLoading(true);
      setPatientData(null);
     
      try {
        const patient = await SelfInformationControllerService.get3(
          localStorage.getItem("NID")!
        );
  
        setPatientData(patient );
  
      } catch {
        message.error("could not fine patient information");
      } finally {
        console.log(setLoading(false));
      }
    };
    useEffect(() => {
      onSearch()
    }, []);
    
  
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
    
    const columnsActivityLog = [
      { title: "Date Time", dataIndex: "dateTime", key: "dateTime" },
      { title: "Agency Name", dataIndex: "agencyName", key: "agencyName" },
      { title: "Activity Type", dataIndex: "type", key: "type" }
    ];
    return (
      <>
      <Layout style={{ height: "100vh", background: "#f0f2f5" }}>
          <Header
            style={{
              background: "#001529",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <text style={{ color: "#fff", fontSize: "20px" }}>
              dotConnect Medical History Repository
            </text>
            <div>
              <Button
                onClick={logout}
                type="link"
                icon={<LogoutOutlined />}
                style={{ color: "#fff" }}
              >
                Logout
              </Button>
              <span style={{ paddingTop: "4px" }}>({patientData?.firstName} {patientData?.lastName})</span>
            </div>
          </Header>
          <div>
  
  
  
  
      <Layout style={{ background: "#f0f2f5" }}>
        
  
  
        <Content style={{ padding: "20px", height:"100vh" }}>
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
                
              </div>
  
              <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
                <TabPane tab="Medications" key="1">
                  <Table
                    dataSource={patientData.medications!.map((med, index) => ({
                      key: index,
                      ...med
                      
                    }))}
                    columns={columnsMedication}
                    pagination={{}}
                    />
                </TabPane>
                <TabPane tab="Diagnosis" key="2">
                  <Table
                    dataSource={patientData.diagnoses!.map((diag, index) => ({
                      key: index,
                      ...diag
                    }))}
                    columns={columnsDiagnosis}
                    pagination={{}}
                    />
                </TabPane>
                <TabPane tab="Checkups" key="3">
                  <Table
                    dataSource={patientData.checkups!.map((check, index) => ({
                      key: index,
                      ...check
                    }))}
                    columns={columnsCheckups}
                    pagination={{}}
               
                    />
                </TabPane>
                <TabPane tab="Activity Logs" key="4">
                  <Table
                    dataSource={patientData.activityLogs!.map((log, index) => ({
                      key: index,
                      ...log
                    }))}
                    columns={columnsActivityLog}
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
             
            </Card>
          )}
        {/* <AboutUs/> */}
        </Content>
      </Layout>
    </div>
          <AppFooter></AppFooter>
        </Layout>
  
          </>
    );
  };
  
  export default SelfInformation;