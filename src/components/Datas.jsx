



function createData(name,status,date,age){
  const formatedDate = new Date(date).toLocaleDateString();
  return {name,status,date:formatedDate,age};}
  
  const Datas = [
  createData("Aarav", "Active", "2025-01-01", 22),
  createData("Vivaan", "Inactive", "2025-01-02", 25),
  createData("Aditya", "Pending", "2025-01-03", 28),
  createData("Arjun", "Active", "2025-01-04", 21),
  createData("Sai", "Inactive", "2025-01-05", 30),
  createData("Krishna", "Active", "2025-01-06", 26),
  createData("Rohan", "Pending", "2025-01-07", 24),
  createData("Karthik", "Active", "2025-01-08", 27),
  createData("Rahul", "Inactive", "2025-01-09", 29),
  createData("Vikram", "Active", "2025-01-10", 23),
  
  createData("Ananya", "Active", "2025-01-11", 22),
  createData("Diya", "Inactive", "2025-01-12", 25),
  createData("Isha", "Pending", "2025-01-13", 28),
  createData("Pooja", "Active", "2025-01-14", 21),
  createData("Sneha", "Inactive", "2025-01-15", 30),
  createData("Kavya", "Active", "2025-01-16", 26),
  createData("Meera", "Pending", "2025-01-17", 24),
  createData("Riya", "Active", "2025-01-18", 27),
  createData("Neha", "Inactive", "2025-01-19", 29),
  createData("Aditi", "Active", "2025-01-20", 23),
  
  createData("Suresh", "Active", "2025-01-21", 34),
  createData("Ramesh", "Inactive", "2025-01-22", 36),
  createData("Mahesh", "Pending", "2025-01-23", 32),
  createData("Naresh", "Active", "2025-01-24", 31),
  createData("Dinesh", "Inactive", "2025-01-25", 38),
  createData("Ganesh", "Active", "2025-01-26", 35),
  createData("Lokesh", "Pending", "2025-01-27", 33),
  createData("Yogesh", "Active", "2025-01-28", 37),
  createData("Mohan", "Inactive", "2025-01-29", 39),
  createData("Sanjay", "Active", "2025-01-30", 34),
  
  createData("Akhil", "Active", "2025-02-01", 22),
  createData("Nikhil", "Inactive", "2025-02-02", 25),
  createData("Manoj", "Pending", "2025-02-03", 28),
  createData("Deepak", "Active", "2025-02-04", 21),
  createData("Varun", "Inactive", "2025-02-05", 30),
  createData("Harsha", "Active", "2025-02-06", 26),
  createData("Abhishek", "Pending", "2025-02-07", 24),
  createData("Siddharth", "Active", "2025-02-08", 27),
  createData("Pranav", "Inactive", "2025-02-09", 29),
  createData("Tejas", "Active", "2025-02-10", 23),
  
  createData("User51", "Active", "2025-02-11", 22),
  createData("User52", "Inactive", "2025-02-12", 24),
  createData("User53", "Pending", "2025-02-13", 26),
  createData("User54", "Active", "2025-02-14", 28),
  createData("User55", "Inactive", "2025-02-15", 30),
  createData("User56", "Active", "2025-02-16", 32),
  createData("User57", "Pending", "2025-02-17", 34),
  createData("User58", "Active", "2025-02-18", 36),
  createData("User59", "Inactive", "2025-02-19", 38),
  createData("User60", "Active", "2025-02-20", 40),
  
  createData("User61", "Pending", "2025-02-21", 21),
  createData("User62", "Active", "2025-02-22", 22),
  createData("User63", "Inactive", "2025-02-23", 23),
  createData("User64", "Active", "2025-02-24", 24),
  createData("User65", "Pending", "2025-02-25", 25)
];
   
export default Datas;