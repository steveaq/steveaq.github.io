---
layout: page
menu: True
date: '2022-02-27 01:53:59'
title: Navigation
description: Some description.
permalink: /navigation/
---

## Key Projects


This is some of the software that I wrote over the years.  It is a mix of a Python and C++.  The level of documentation will vary from project to project.  Recently I have been more rigorous in my documentation for commonly used python functions.


<h2>Tutorials</h2>

This software is primarily written in C++ with a Python interface.  This is a relatively fast brute force Bloch simulation.  This software allows the users to use custom RF pulses (SLR, VERSE, etc.) to accurately model rotations.  Thus, this simulation accounts for RF non-idealities such as slice profile.


![placeholder](https://pbs.twimg.com/media/Fupd4xVWYAEtxLn?format=jpg&name=large "Large example image")


<div style="text-align:center;">
  <a href="https://example.com">
    <button class="myButton red">Button 1</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 2</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 3</button>
  </a>
</div>

<h2>Data Science</h2>

While Scipy has many FIR tools that are common in Matlab, it lacks a Type II FIR least squares filter design.  This toolbox includes this design.  This toolbox also include a Parks-McCellan FIR filter tool as well as method to transform a linear phase filter to a minimum phase filter.  This also requires Boost 1.63 to compile.  Source and examples are given below.

![placeholder](https://pbs.twimg.com/media/FUEsmqeXsAEyxtS?format=jpg&name=900x900 "Large example image")


<div style="text-align:center;">
  <a href="https://example.com">
    <button class="myButton red">Button 1</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 2</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 3</button>
  </a>
</div>

<h2>Data Visuals</h2>

Shinnar-Le Roux (SLR) radiofrequency (RF) pulses are common on MRI.  While [many tools](http://rsl.stanford.edu/research/software.html) exist to design such pulses, these are often in Matlab.  This is a version similar to the Pauly implementation, though the interface is written in Python and incorporates object-oriented design.  Source and examples are here. The backend of this code is written in C/C++ and requires Boost 1.63 to compile (with the proper paths needing to be set in the Makefile).  C++ code using the Boost Python/Numpy interfaces.  This also requires an FIR pulse design toolbox I have designed.

![placeholder](https://pbs.twimg.com/media/FnkZDcBWQAE1fqS?format=jpg&name=900x900 "Large example image")


<div style="text-align:center;">
  <a href="https://example.com">
    <button class="myButton red">Button 1</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 2</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 3</button>
  </a>
</div>

<style>
  .myButton {
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
</style>



