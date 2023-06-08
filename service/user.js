// const { id } = require("../Schema/register")
const { param } = require("../Routes");
const Users = require("../models/Users")
const { encryptPasswd } = require('../config/encrypt')

const findById = async (email) => {
    try {

        const user = await Users.findOne({ email });
        return {
            success: true,
            data: user
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}


const getUser = async (userId) => {
    try {
        const user = await Users.findById(userId);
        if (!user) {
            return {
                success: false,
                err: "Id is invalid"
            }
        }
        return {
            success: true,
            data: user
        }
    } catch (err) {
        return {
            success: false,
            err: err
        }
    }
}


// --------------------------------------------------------------------------------
// update user
const updateUser = async (userId, param) => {
    try {
        // Find user
        const user = await Users.findById(userId);
        if (!user) {
            return {
                status: false,
                error: 'User with this ID is not found!'
            };
        }

        // Extract updated user information
        const { email, username, firstname, lastname } = param;

        // Check if email exists
        if (email) {
            const userWithSameEmail = await Users.findOne({ email });
            if (userWithSameEmail && userWithSameEmail._id.toString() !== user._id) {
                return {
                    Email: false,
                    error: 'Email has already been taken!'
                };
            }
            user.email = email;
        }

        // Check if username exists
        if (username) {
            const userWithSameUsername = await Users.findOne({ username });
            if (userWithSameUsername && userWithSameUsername._id.toString() !== user._id) {
                return {
                    Username: false,
                    error: 'Username has already been taken!'
                };
            }
            user.username = param.username;
        }

        // Update firstname and lastname
        user.firstname = firstname;
        user.lastname = lastname;

        // Save the updated user
        const updatedUser = await user.save();

        return {
            Register: true,
            data: updatedUser
        };
    } catch (error) {
        return {
            end: false,
            error: error.message
        };
    }
};


// ----------------------------------------------------------------------------------
// update password
const updatePassword = async (userID, param) => {
    try {
        // Find user
        const user = await Users.findById(userID);
        if (!user) {
            return {
                status: false,
                error: 'User with this ID is not found!'
            };
        }


        const { password, confirmPassword } = param;
        if (password != confirmPassword) {
            return {
                status: false,
                error: "Passwords do not match!"
            }
        }

        var hash = encryptPasswd(password);
        user.password = hash;

        const updatedUser = await user.save();

        return {
            update_password: true,
            message: "The password has been changed already!"
        };

    } catch (error) {
        return {
            end: false,
            error: error.message
        };
    }
}



// delete user
// update password
const deleteUser = async (param) => {
        // Find user
        
        // const user = await Users.findById(userId);
        // if (!user) {
        //     return {
        //         status: false,
        //         error: 'User with this ID is not found!'
        //     };
        // }

        // await user.remove();

        // return {
        //     status: true,
        //     message: "The user has been deleted successfully!"
        // }

        try {
            const { userId } = param;
            const result = await Users.deleteOne({ _id: userId });
            if (result.deletedCount === 0) {
              return {
                status: false,
                error: 'User with this ID is not found!'
              };
            }
            
            return {
              status: true,
              message: 'User deleted successfully.'
            };
          } catch (error) {
            return {
              status: false,
              error: error.message
            };
          }


}




// ------------------------------------------------------------------------------
// export function to use in another file
module.exports = {
    findById,
    getUser,
    updateUser,
    updatePassword,
    deleteUser
}