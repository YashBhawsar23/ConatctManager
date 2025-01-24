//@desc Get All conatcts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
};

//@desc Create new Conatct
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create new Conatct" });
};

module.exports = { getContact };
