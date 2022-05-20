export const getPerson = (req, res) => {
  const { id: _id } = req.params;
  try {
    const msg = `Character ${_id} returned!`;
    res.status(200).json({ message: msg });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
