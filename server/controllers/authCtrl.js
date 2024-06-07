 const register = async (req, res) => {
    const { licenseefirstName, licenseeSurname, licenseenicNumber, licenseeEmail, licenseePassword } = req.body;


    




    res.status(200).json('Licensee registered1234');
    }


    module.exports = { register };