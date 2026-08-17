export async function POST(request) {
   
    try {
        
      const body = await request.json();
  
      const name = body.name?.trim();
      const email = body.email?.trim();
      const phone = body.phone?.trim();
      const message = body.message;
  
      if (!name || !email || !phone) {
        return Response.json(
          {
            success: false,
            message: "All fields are required.",
          },
          { status: 400 }
        );
      }
  
      if (/[א-ת]/.test(email)) {
        return Response.json(
          {
            success: false,
            message: "Email address cannot contain Hebrew characters.",
          },
          { status: 400 }
        );
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json(
          {
            success: false,
            message: "Please enter a valid email address.",
          },
          { status: 400 }
        );
      }
  
      if (!/^\d{9,10}$/.test(phone)) {
        return Response.json(
          {
            success: false,
            message: "Phone number must contain 9 to 10 digits.",
          },
          { status: 400 }
        );
      }
  
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: name,
              Email: email,
              Phone: phone,
              Message: message,
              Created_At: new Date().toISOString(),
            },
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Airtable error:", data);
  
        return Response.json(
          {
            success: false,
            message: "Failed to save the contact.",
          },
          { status: 500 }
        );
      }
  
      return Response.json({
        success: true,
        message: "Contact saved successfully.",
      });
    } catch (error) {
      console.error("Contact API error:", error);
  
      return Response.json(
        {
          success: false,
          message: "Something went wrong.",
        },
        { status: 500 }
      );
    }
  }