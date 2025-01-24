//@desc Get All conatcts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
};

//@desc Create new Conatct
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get Conatct
//@route POST /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.json({ message: `Get Conatact for ${req.params.id}` });
};

//@desc Update Contact
//@route PUT /api/contacts:/id
//@access public
const updateContact = (req, res) => {
  res.json({ message: `Update Conatact for ${req.params.id}` });
};

//@desc Delete Contact
//@route DELETE /api/contacts:/id
//@access public
const DeleteContact = (req, res) => {
  res.json({ message: `Delete Conatact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  DeleteContact,
};
