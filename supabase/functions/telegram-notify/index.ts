
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Retrieve the bot token from environment variables
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
// Your provided chat ID
const TELEGRAM_CHAT_ID = "1648327979";

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const appointmentData = await req.json();
    
    // Format a message for Telegram
    const message = `
🆕 NEW APPOINTMENT REQUEST

👤 Name: ${appointmentData.name || "Not provided"}
📱 Phone: ${appointmentData.phone || "Not provided"}
📧 Email: ${appointmentData.email || "Not provided"}
📆 Date: ${appointmentData.date || "Not provided"}
📝 Message: ${appointmentData.message || "None"}
`;

    console.log("Sending to Telegram:", message);
    
    // Check if token exists
    if (!TELEGRAM_BOT_TOKEN) {
      console.error("Telegram bot token not found in environment variables");
      return new Response(
        JSON.stringify({ success: false, error: "Telegram bot token not configured" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    // Send the message to Telegram
    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      const telegramResult = await telegramResponse.json();
      console.log("Telegram API response:", telegramResult);

      if (!telegramResponse.ok) {
        throw new Error(`Telegram API error: ${JSON.stringify(telegramResult)}`);
      }

      return new Response(
        JSON.stringify({ success: true, message: "Notification sent to Telegram" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } catch (telegramError) {
      console.error("Error sending to Telegram API:", telegramError);
      return new Response(
        JSON.stringify({ success: false, error: telegramError.message }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("Error in telegram-notify function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
