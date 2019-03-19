@extends('../layout')

@section('title')
Users
@stop

@section('content')

<form>
  <label for="name">First Name</label>
  <input type="text" placeholder="First Name" id="fname">

  <label for="name">Last Name</label>
  <input type="text" placeholder="Last Name" id="lname">

  <button type="submit" id="submitButton"> Submit </button>

@stop
