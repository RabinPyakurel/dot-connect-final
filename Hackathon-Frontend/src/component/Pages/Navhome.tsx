import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AppFooter from "../AppFooter";
const Navhome: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const[,setHospitalName]=useState()

    useEffect(() => {
      const token = localStorage.getItem('authtoken'); // Replace with your token storage method
  
      if (token) {
        const decodedToken = jwtDecode(token) as any ;
        setHospitalName(decodedToken.name);
      }
    }, []);
  return (
    <>
      <Layout style={{ height: "100vh", background: "#f0f2f5" }}>
        <Header
          style={{
            
            // border:"2px solid red",
            background: "#001529",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <text style={{ color: "#fff", fontSize: "30px",fontWeight:"900" }}>
            DOT.Connect Medical History Repository
          </text>
        </Header>
        <div>{children}</div>
        <AppFooter></AppFooter>
      </Layout>
    </>
  );
};

export default Navhome;