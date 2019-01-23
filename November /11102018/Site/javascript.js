emplyeeName = $("#employee-name").val().trim();
role = $("#role").val().trim();
startRole = $("#start-date").val().trim();
monthlyRate = $("monthky-rate").val().trim();


$("#submit-form").on("click", function() {

employeeName = $("#employee-name").val().trim();
role = $("#role").val().trim();
startDate = $("#start-date").val().trim();
monthlyRate = $("monthly-rate").val().trim();

let newRow = $("<tr>");
let newEmployee = $("<td>" + employeeName + "</td>");
let newRole = $("<td>");
let newStartDate = $("<td>");
let newRate = $("<td>");


newEmployee.append(employeeName);
newRow.append(newEmployee);

newRole.append(role);
newRow.append(newRole);

newStartDate.append(startDate);
newRow.append(newStartDate);

newRate.append(monthlyRate);
newRow.append(newRate);

});
    
