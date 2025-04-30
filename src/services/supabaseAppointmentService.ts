
import { supabase } from "@/integrations/supabase/client";
import { Appointment } from "@/types/appointment";
import { saveAppointment as saveAppointmentToLocalStorage } from "./appointmentService";

// Save appointment to Supabase
export const saveAppointmentToSupabase = async (appointmentData: Omit<Appointment, "id" | "createdAt" | "status">): Promise<boolean> => {
  try {
    console.log("Saving appointment data to Supabase:", appointmentData);
    
    // Create a database entry
    const { data, error } = await supabase
      .from('Book an Appointment')
      .insert({
        'Full Name': appointmentData.name,
        'Phone Number': appointmentData.phone,
        'Email Address': appointmentData.email,
        'Preferred Date': appointmentData.date,
        'Additional Information': appointmentData.message || ''
      })
      .select();

    if (error) {
      console.error("Error saving to Supabase:", error);
      return false;
    }
    
    console.log("Successfully saved to Supabase:", data);
    
    // Also save to localStorage as a backup
    saveAppointmentToLocalStorage(appointmentData);
    
    // Now notify via Telegram using direct edge function call
    try {
      const telegramNotifyUrl = 'https://jieiqtgswrpvrswqamfo.supabase.co/functions/v1/telegram-notify';
      console.log("Calling Telegram notification endpoint:", telegramNotifyUrl);
      
      // Get access token for authorization
      const { data: { session } } = await supabase.auth.getSession();
      const accessToken = session?.access_token;
      
      const notifyResponse = await fetch(telegramNotifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken ? `Bearer ${accessToken}` : '',
        },
        body: JSON.stringify(appointmentData),
      });

      // Process response
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
