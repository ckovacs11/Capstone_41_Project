import * as am from "./AssessmentManager";
import * as rm from "./ResultsManager";

const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./User');
//import from Mongoose & MongoDB
import * as http from "http"

mongoose.connect('mongodb+srv://CapstoneTeam401:CTeam2020@cluster0.xangr.mongodb.net/HrSupportApp?retryWrites=true&w=majority');
/*
router.post("/addNewUser", (req: http.IncomingMessage, res: http.ServerResponse, next: http.) => {
    bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if(err){
            return res.status(500).json({
                error : err
            });
            }else{
                const user = new User({
                id : new mongoose.Types.ObjectId(),
                email : req.body.email,
                pwd : hash
            });
            user
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "User created."
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error : err
                });
            });
        }
    });
});

/*import {User} from "./User";
export class LoginManager{
    private am : AssessmentManager;
    private rm : ResultsManager;
    private users : User[];


    * Constructor
    * @param am - The Assessment Manager
    * @param rm - The Results Manager
    * @param users - An array of users

    constructor(am : AssessmentManager, rm : ResultsManager, users : User[]){
        this.am = am;
        this.rm = rm;
        this.users = [];
        for(let i = 0; i < this.users.length; i++){
            this.users.push(users[i]);
        }
    }


    public addNewUser(email : string, pwd : string){
        this.users.push(new User(email, pwd));

        //need to update to add to MongoDB
    }

    public getUser(uid : string){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].getId() == uid){
                return this.users[i];
            }
        }
    }

    public deleteUser(uid : string){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].getId() == uid){
                this.users[i] = null;
            }
        }
    }

    public getUsers(){
        return this.users;
    }

    public editUserEmail(uid : string, p_email : string){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].getId() == uid){
                this.users[i].setEmail(p_email);
            }
        }
    }

    public editUserPwd(uid : string, p_pwd : string){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].getId() == uid){
                this.users[i].setPwd(p_pwd);
            }
        }
    }
}*/

module.exports = router;
