
const express=require('express');
const app=express();
 const middle1=function(req,res,next){
    console.log("i am middle  1");
    next();
 }
 const middle2=function(req,res,next){
    console.log("i am middle   2");
    next();
 }
 app.use(middle1);
 app.get('/home/',middle2,function(req,res){
    res.send("i am home")
 })
 app.get('/about',function(req,res){
    res.send("i am about")
 })
 app.get('/contact',function(req,res){
    res.send("i am contact")
 })
 app.get('/course',middle2,function(req,res){
    res.send("i am course")
 })
 app.listen(2002)
