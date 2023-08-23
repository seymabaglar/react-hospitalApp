import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import logo from "../helper/logo.png";
import { appointmentData } from "../helper/data";
import { useState } from "react";


const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  console.log(appointments);
  return (
    <main className="text-center mt-2">
      <img src={logo} alt="" className="logo" />
      <h1 className="display-5 title">CLARUS HOSPITAL</h1>

      <Doctors />
      <AppointmentList apps={appointments}/>
    </main>
  );
};

export default Home;
