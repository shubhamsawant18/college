const registerUser = async (req, res) => {
    const { fullName, email, phone, city, course, onlineCourse } = req.body;
    const time = new Date(); // Get the current date and time
    const newUser = new User({ fullName, email, phone, city, course, onlineCourse, time });
  
    try {
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user" });
    }
  };
  