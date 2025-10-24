// src/context/UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { FiCloudLightning } from 'react-icons/fi';


// Create the context
export const StoreContext = createContext();

// Create provider component
const StoreContextProvider = (props) => {

  const [token,setToken]=useState(localStorage.getItem('token')? localStorage.getItem('token') : null);

  const [customerData, setCustomerData] = useState([]);
  const [bill, setBill] = useState([]);
  const [dashData,setDashData]=useState({
    totalSales:0,
    monthlyRevenue:0,
    totalProducts:0,
    totalCustomers:0,
    lowStockCount:0,
    expiredCount:0
  });

 


  // const backend_url="https://smart-inventory-management-system-backend.vercel.app"

  const backend_url="http://localhost:3000"




  // const backend_url="/myapi"

  // Fetch customers
  // Fetch customers
  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(backend_url+'/api/customer/all', {
        headers: { Authorization: token }
      });
      setCustomerData(response.data);
    } catch (err) {
      console.error('Error fetching customers:', err);
    }
  };

  const fetchBill = async () => {
    
    const url = backend_url+'/api/bill/getbill'; // Correct URL
    const headers = {
      headers: {
        Authorization:token,
      },
    };

    try {
      const response = await axios.get(url, headers);
      setBill(response.data);
    } catch (error) {
      console.log('Failed to fetch data:', error);
    }
  };


  const updateBill = async (updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const billId = updatedData.billId; 
      const updateData= {
        history: updatedData.deposit,
      };

      const response = await axios.put(backend_url+`/api/bill/update/${billId}`, updateData, {
        headers: { Authorization: token }
      });
      setBill(response.data);
    } catch (err) {
      console.error('Error updating bill:', err);
    }

  }

  const dashboardData=async()=>{
    try {
      const response=await axios.get(backend_url+"/api/bill/dashData",{headers:{Authorization: token }});
      setDashData(response.data)
    } catch (err) {
       console.error('Error in totalsales:', err); 
    }
  }

  useEffect(() => {
    fetchCustomers();
    fetchBill();
  }, [])


  const value = {
    fetchCustomers,
    customerData,
    setCustomerData,
    fetchBill,
    bill,
    updateBill,
    backend_url,
    token,
    setToken,
    dashboardData,
    dashData
  }


  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};


export default StoreContextProvider;