<?php $__env->startSection('title'); ?>
Users
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<form>
  <label for="name">First Name</label>
  <input type="text" placeholder="First Name" id="fname">

  <label for="name">Last Name</label>
  <input type="text" placeholder="Last Name" id="lname">

  <button type="submit" id="submitButton"> Submit </button>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('../layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>