//Challenge 3: Net Salary Calculator (Toy Problem)

//Access html button elements as per the html
const payeeCalc = document.querySelector("#payeeButton");
const nhifCalc = document.querySelector("#nhifButton");
const nssfCalc = document.querySelector("#nssfButton");
const netSalaryCalc = document.querySelector("#netSalaryButton");
//Access value input for the employee's basic salary.
const bscSalaryInput = document.querySelector("#basicSalaryButton");
const benefitsInput = document.querySelector("#benefitsButton");

//PAYE tax calculation function
function paye() {
  //Parse input to an integer using parseInt
    let basicSalary = parseInt(bscSalaryInput.value);
    let benefits = parseInt(benefitsInput.value);
    const personalRelief = 2800;
    const taxablePay = (basicSalary + benefits) - personalRelief;
    let payeeTax = 0;
    if (taxablePay > 0 && taxablePay <= 24000) {
        payeeTax = taxablePay * 0.1;
    } else if (taxablePay > 24001 && taxablePay <= 32333) {
        payeeTax = taxablePay * 0.25;
    } else if (taxablePay > 32333) {
        payeeTax = taxablePay * 0.3;
    } else {
        payeeTax = "NIL";
    }
    alert("Payee Tax: Ksh " + payeeTax);
    return payeeTax;
};

//NHIF deductions calculation function
function nhif() {
  //Parse input to an integer for easier computations
    let basicSalary = parseInt(bscSalaryInput.value);
    let benefits = parseInt(benefitsInput.value);
    const personalRelief = 2800;
    const taxablePay = (basicSalary+benefits) - personalRelief;
    let nhifDeduction = 0;
    if (basicSalary <= 5999) {
        nhifDeduction = 150;
    } else if (basicSalary > 5999 && basicSalary <= 7999) {
    nhifDeduction = 300;
    } else if (basicSalary > 7999 && basicSalary <= 11999) {
        nhifDeduction = 400;
    } else if (basicSalary > 11999 && basicSalary <= 14999) {
        nhifDeduction = 500;
    } else if (basicSalary > 14999 && basicSalary <= 19999) {
        nhifDeduction = 600;
    } else if (basicSalary > 19999 && basicSalary <= 24999) {
        nhifDeduction = 750;
    } else if (basicSalary > 24999 && basicSalary <= 29999) {
        nhifDeduction = 300;
    } else if (basicSalary > 29999 && basicSalary <= 34999) {
        nhifDeduction = 300;
    } else if (basicSalary > 34999 && basicSalary <= 39999) {
        nhifDeduction = 300;
    } else if (basicSalary > 39999 && basicSalary <= 44999) {
        nhifDeduction = 300;
    } else if (basicSalary > 44999 && basicSalary <= 49999) {
        nhifDeduction = 300;
    } else if (basicSalary > 49999 && basicSalary <= 59999) {
        nhifDeduction = 300;
    } else if (basicSalary > 59999 && basicSalary <= 69999) {
        nhifDeduction = 300;
    } else if (basicSalary > 69999 && basicSalary <= 79999) {
        nhifDeduction = 300;
    } else if (basicSalary > 79999 && basicSalary <= 89999) {
        nhifDeduction = 300;
    } else if (basicSalary > 89999 && basicSalary <= 99999) {
        nhifDeduction = 300;
    } else if (basicSalary > 99999) {
        nhifDeduction = 300;
    } else {
        nhifDeduction = 0;
    }
    alert(`The NHIF Deduction is KSH: ${nhifDeduction} `);
    return nhifDeduction;
};

//NSSF deductions calculation
function nssf() {
  //Parse input to an integer for easier understanding and use
    let pensionablePay = parseInt(bscSalaryInput.value);
    let nssfDeduction = pensionablePay * 0.06;
    alert(`The NSSF deduction is KSH: ${nssfDeduction}`);
    return nssfDeduction;
};
function netSalary(paye, nhif, nssf) {
    let basicSalary = parseInt(bscSalaryInput.value);
    let benefits = parseInt(benefitsInput.value);
    let grossSalary = basicSalary + benefits
    let netSalary = 0;
    netSalary = grossSalary - (payeeTax+nhifDeduction+nssfDeduction);
    alert(`The net salary is KSH: ${netSalary}`);
};
payeeCalc.addEventListener("click", paye);
nhifCalc.addEventListener("click", nhif);
nssfCalc.addEventListener("click", nssf);
netSalaryCalc.addEventListener("click", netSalary);

console.log(basicSalary(15000))