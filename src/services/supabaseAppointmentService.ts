
import { supabase } from "@/integrations/supabase/client";
import { Appointment } from "@/types/appointment";
import { saveAppointment as saveAppointmentToLocalStorage } from "./appointmentService";

// Save appointment to Supabase
export const saveAppointmentToSupabase = async (appointmentData: Omit<Appointment, "id" | "createdAt" | "status">): Promise<boolean> => {
  try {
    // Map our form data to match Supabase table column names
    const { error } = await supabase
      .from('Book an Appointment')
      .insert({
        'Full Name *': appointmentData.name,
        'Phone Number *': appointmentData.phone,
        'Email Address': appointmentData.email,
        'Preferred Date *': appointmentData.date,
        'Additional Information': appointmentData.message
      });

    if (error) {
      console.error("Error saving to Supabase:", error);
      return false;
    }
    
    // Also save to localStorage as a backup
    saveAppointmentToLocalStorage(appointmentData);
    
    return true;
  } catch (error) {
    console.error("Exception when saving to Supabase:", error);
    return false;
  }
};
