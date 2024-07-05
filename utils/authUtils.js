const bcrypt = require("bcrypt");



//hash password
exports.hashPassword = async (password) =>
    {
        try
        {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(password,salt);
            return hash;
        }
        catch(err)
        {
            console.log(err);
        }
    }


//compare password

exports.comparePassword = async(password,hashedPassword)=>
{
    try
    {
        const result = await bcrypt.compare(password,hashedPassword);
        return result;
    }
    catch(err)
    {
        console.log(err);
    }
}