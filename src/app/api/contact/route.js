export async function POST(request) {
    try {
      const body = await request.json();
  
      const { name, email, phone } = body;

if (!name?.trim() || !email?.trim() || !phone?.trim()) {
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
                Name: name.trim(),
                Email: email.trim(),
                Phone: phone.trim(),
                "Created At": new Date().toISOString(),
              },
          }),
        }
      );
  
      if (!response.ok) {
        const error = await response.json();
  
        console.error("Airtable error:", error);
  
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