@extends('layout')

@section('title')
 <h1>Title</h1>
@endsection

@section('content')
  <h1>First Name: </h1> 
  <h2>{{$firstName}}</h2>
  
  <h1>Last Name:  </h1>
  <h2>{{$lastName}}</h2>
  
  <h1>Email Address: </h1>
  <h2>{{$email}}</h2>

@endsection 