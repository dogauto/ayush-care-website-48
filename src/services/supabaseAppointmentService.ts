
import { supabase } from "@/integrations/supabase/client";
import { Appointment } from "@/types/appointment";
import { saveAppointment as saveAppointmentToLocalStorage } from "./appointmentService";

// Save appointment to Supabase
export const saveAppointmentToSupabase = async (appointmentData: Omit<Appointment, "id" | "createdAt" | "status">): Promise<boolean> => {
  try {
    // Create a database entry first
    const { data, error } = await supabase
      .from('Book an Appointment')
      .insert({
        'Full Name': appointmentData.name,
        'Phone Number': appointmentData.phone,
        'Email Address': appointmentData.email,
        'Preferred Date': appointmentData.date,
        'Additional Information': appointmentData.message
      })
      .select();

    if (error) {
      console.error("Error saving to Supabase:", error);
      return false;
    }
    
    // Also save to localStorage as a backup
    saveAppointmentToLocalStorage(appointmentData);
    
    // Now notify via Telegram separately - use direct edge function call
    try {
      const notifyResponse = await fetch('https://jieiqtgswrpvrswqamfo.supabase.co/functions/v1/telegram-notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.auth.getSession().then(({ data }) => data?.session?.access_token)}`,
        },
        body: JSON.stringify(appointmentData),
      });

      // Process response - note that we're continuing even if notification fails
      try {
        const responseData = await notifyResponse.json();
        
        if (!notifyResponse.ok) {
          console.error("Error notifying Telegram:", responseData);
          // We don't return false here as the appointment was saved to Supabase successfully
        } else {
          console.log("Telegram notification sent successfully", responseData);
        }
      } catch (parseError) {
        console.error("Error parsing Telegram notification response:", parseError);
      }
    } catch (notifyError) {
      console.error("Failed to send Telegram notification:", notifyError);
      // We don't return false here as the appointment was saved to Supabase successfully
    }
    
    return true;
  } catch (error) {
    console.error("Exception when saving to Supabase:", error);
    return false;
  }
};
