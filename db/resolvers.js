import User from "../models/Users.js";
import pkg from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
const { genSalt, hash, compare } = pkg;
const { sign, verify } = jsonwebtoken;
dotenv.config({path:'.env'})

const createToken = (user, secret, expiresIn) => {
    const {id, email, name, lastName} = user;
    return sign({ id, email, name, lastName }, secret, { expiresIn });
}
const resolvers = {
    Query: {
        getVinyls: (_, {input}, ctx) => {

        },
        getUser:async (_, {token}) => {
            const userId = await verify(token, process.env.SECRET)

            return userId
        }
    },
    Mutation: {
        newUser: async (_, {input}) => {

            const {email, password} = input;
            //Check if user exist
            const userExist = await User.findOne({email});
            if(userExist) {
                throw new Error('User already registered');
            }
            //Password hashing
            const salt = await genSalt(10);
            input.password = await hash(password, salt);

            try {
                //Save in DB
                const user = new User(input);
                user.save();
                return user;    
            } catch (error) {
                console.log(error)
            }
        },
        userAuth: async (_, {input}) => {
            //Check if user exists
            const { email, password} = input;
            const userExists = await User.findOne({email});
            if(!userExists) {
                throw new Error("User or password are incorrect");
            }
            //Check if password is correct
            const correctPassword = await compare(password, userExists.password);
            if(!correctPassword) {
                throw new Error("Password or user are incorrect");
            }
           //Create token
           return {
            token: createToken(userExists, process.env.SECRET, '24h')
           } 
        }

    }
}

export default resolvers