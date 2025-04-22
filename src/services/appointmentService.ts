
import { Appointment } from "../types/appointment";

// Local storage key
const APPOINTMENTS_STORAGE_KEY = "ayush_appointments";

// Get all appointments from localStorage
export const getAppointments = (): Appointment[] => {
  const storedAppointments = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
  return storedAppointments ? JSON.parse(storedAppointments) : [];
};

// Save an appointment to localStorage
export const saveAppointment = (appointmentData: Omit<Appointment, "id" | "createdAt" | "status">): Appointment => {
  const appointments = getAppointments();
  
  const newAppointment: Appointment = {
    ...appointmentData,
    id: generateId(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  
  appointments.push(newAppointment);
  localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  
  return newAppointment;
};

// Generate a unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Get appointment by ID
export const getAppointmentById = (id: string): Appointment | undefined => {
  const appointments = getAppointments();
  return appointments.find(appointment => appointment.id === id);
};

// Update appointment status
export const updateAppointmentStatus = (id: string, status: Appointment["status"]): Appointment | undefined => {
  const appointments = getAppointments();
  const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);
  
  if (appointmentIndex === -1) return undefined;
  
  appointments[appointmentIndex].status = status;
  localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  
  return appointments[appointmentIndex];
};

// Delete appointment
export const deleteAppointment = (id: string): boolean => {
  const appointments = getAppointments();
  const filteredAppointments = appointments.filter(appointment => appointment.id !== id);
  
  if (filteredAppointments.length === appointments.length) {
    return false; // Nothing was deleted
  }
  
  localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(filteredAppointments));
  return true;
};
