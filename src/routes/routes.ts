import express, { Application } from "express"

namespace genRouter{
    module.exports = async(app:Application)=>{
        require('./todoRouter')(app)
        require('./formRouter')(app)

    }
}



