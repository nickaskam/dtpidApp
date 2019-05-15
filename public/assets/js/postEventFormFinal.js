var estimationSelection = document.getElementById("00N0b000009gtNd");
var estimationChoice0 = document.getElementById("estimationChoice0");
var estimationChoice1 = document.getElementById("estimationChoice1");
var estimationChoice2 = document.getElementById("estimationChoice2");
var estimationChoice3 = document.getElementById("estimationChoice3");
var estimationResult = document.getElementById("estimationCalculation");
var estimationChoiceFactorDisplay = document.getElementById("estimationChoiceFactorDisplay");
var estimationChoiceFactor = 0;
var estimationNumberInputDisplay = document.getElementById("00N0b000009gtUX");
var estimationNumberInput = 0;
var estimationChoiceResultDisplay = document.getElementById("estimationChoiceResultDisplay");
var estimationChoiceResult = 0;
var hotelRoomNightsDisplay = document.getElementById("00N0b000009gtVs");
var hotelRoomNights = 0;
var hotelRoomRateDisplay = document.getElementById("00N0b000009gtXE");
var hotelRoomRate = 168;
var totalRevenueDisplay = document.getElementById("totalRevenueDisplay");
var totalRevenue = 0;
var finalDTPIDAmountDisplay = document.getElementById("finalDTPIDAmountDisplay");
var finalDTPIDAmount = 0;
var dtpidFundsAvailableDisplay = document.getElementById("dtpidFundsAvailableDisplay");
var dtpidFundsPreApprovedDisplay = document.getElementById("dtpidFundsPreApproved");
var dtpidFundsPreApproved = 0;
var lessAnyPaymentsDisplay = document.getElementById("00N0b00000899kp");
var lessAnyPayments = 0;
var finalPaymentDueDisplay = document.getElementById("00N0b00000ABjFv");
var finalPaymentDue = 0;
var totalDTPIDFundsDisplay = document.getElementById("totalDTPIDFundsDisplay");
var totalEventBudgetDisplay = document.getElementById("00N0b00000APyfT");
var totalEventBudget = 0;
var percentDTPIDTotalDisplay = document.getElementById("percentDTPIDTotalDisplay");
var percentDTPIDTotal = 0;
var eventMarketingTotalDisplay = document.getElementById("00N0b00000APpKT");
var eventMarketingTotal = 0;
var eventStaffingTotalDisplay = document.getElementById("00N0b00000APr5I");
var eventStaffingTotal = 0;
var eventProductionTotalDisplay = document.getElementById("00N0b00000APrKd");
var eventProductionTotal = 0;
var eventOtherTotalDisplay = document.getElementById("00N0b00000BgxJt");
var eventOtherTotal = 0;
var summedDTPIDFundsDisplay = document.getElementById("summedDTPIDFundsDisplay");
var summedDTPIDFunds = 0;
var matchDTPIDFunds1 = document.getElementById("matchPromptTotalDisplay1");
var matchDTPIDFunds2 = document.getElementById("matchPromptTotalDisplay2");
var mobileDisplay = document.getElementById("mobile");
var mobileValue = " ";
var phoneDisplay = document.getElementById("phone");
var phoneValue = " ";
// var eventStartDate1 = document.getElementById("00N0b000007v1mP");
// var eventStartDate2 = document.getElementById("eventStartDateCopy");
var eventOrganizationDisplay = document.getElementById("company");
var eventOrganization = "";
var eventNameDisplay = document.getElementById("00N0b000007uwKK");
var eventName = "";
var submitButton = document.getElementById("submit");
var requestedAmountDisplay = document.getElementById("00N0b00000BQW8e");
var requestedAmount = 0;

estimationSelection.addEventListener("change", function(){
	if (estimationSelection.selectedIndex == 1){
		clearEstimationChoice();
		estimationChoice1.classList.remove("hide");
		estimationChoiceFactor = 0.09;
		showEstimationChoice();
		showEstimationChoiceFactor();
	} else if (estimationSelection.selectedIndex == 2){
		clearEstimationChoice();
		estimationChoice2.classList.remove("hide");
		estimationChoiceFactor = 1.0;
		showEstimationChoice();
		hotelRoomRateDisplay.removeAttribute('readonly');
		showEstimationChoiceFactor();
	} else if (estimationSelection.selectedIndex == 3){
		clearEstimationChoice();
		estimationChoice3.classList.remove("hide");
		estimationChoiceFactor = 0.6;
		showEstimationChoice();
		showEstimationChoiceFactor();
	} else {
		clearEstimationChoice();
	}
});

estimationNumberInputDisplay.addEventListener("change", function(){
	estimationNumberInputDisplay.value = parseFloat(estimationNumberInputDisplay.value.replace(/,/g, ''));
	estimationNumberInput = Number(estimationNumberInputDisplay.value);
	doEstimationCalculations();
	matchTotals();
	showSubmit();
	doTotalBudgetCalculations();
	overPercentage();
	estimationNumberInputDisplay.value = numberWithCommas(estimationNumberInput);
});

hotelRoomRateDisplay.addEventListener("change", function(){
	hotelRoomRate = Number(this.value);
	doEstimationCalculations();
	doTotalBudgetCalculations();
	overPercentage();
});

dtpidFundsPreApprovedDisplay.addEventListener("change", function(){
	dtpidFundsPreApprovedDisplay.value = parseFloat(dtpidFundsPreApprovedDisplay.value.replace(/,/g, ''));
	dtpidFundsPreApproved = Number(dtpidFundsPreApprovedDisplay.value);
	checkPreApprovedOverRequested();
	dtpidFundsPreApprovedDisplay.value = numberWithCommas(dtpidFundsPreApproved);
});

lessAnyPaymentsDisplay.addEventListener("change", function(){
	doLessPaymentsCalculations();
});

totalEventBudgetDisplay.addEventListener("change", function(){
	doTotalBudgetCalculations();
	overPercentage();
	showSubmit();
});

eventMarketingTotalDisplay.addEventListener("change", function(){
	eventMarketingTotalDisplay.value = parseFloat(eventMarketingTotalDisplay.value.replace(/,/g, ''));
	eventMarketingTotal = Number(eventMarketingTotalDisplay.value);
	addDTPIDFundingCategories();
	eventMarketingTotalDisplay.value = numberWithCommas(eventMarketingTotal);
	matchTotals();
	showSubmit();
});

eventStaffingTotalDisplay.addEventListener("change", function(){
	eventStaffingTotalDisplay.value = parseFloat(eventStaffingTotalDisplay.value.replace(/,/g, ''));
	eventStaffingTotal = Number(eventStaffingTotalDisplay.value);
	addDTPIDFundingCategories();
	eventStaffingTotalDisplay.value = numberWithCommas(eventStaffingTotal);
	matchTotals();
	showSubmit();
});

eventProductionTotalDisplay.addEventListener("change", function(){
	eventProductionTotalDisplay.value = parseFloat(eventProductionTotalDisplay.value.replace(/,/g, ''));
	eventProductionTotal = Number(eventProductionTotalDisplay.value);
	addDTPIDFundingCategories();
	eventProductionTotalDisplay.value = numberWithCommas(eventProductionTotal);
	matchTotals();
	showSubmit();
});

eventOtherTotalDisplay.addEventListener("change", function(){
	eventOtherTotalDisplay.value = parseFloat(eventOtherTotalDisplay.value.replace(/,/g, ''));
	eventOtherTotal = Number(eventOtherTotalDisplay.value);
	addDTPIDFundingCategories();
	eventOtherTotalDisplay.value = numberWithCommas(eventOtherTotal);
	matchTotals();
	showSubmit();
});

// eventStartDate2.addEventListener("change", function(){
// 	var eventStartDate3 = new Date(eventStartDate2.value);
// 	eventStartDate3.setUTCHours(11);
// 	eventStartDate1.value = eventStartDate3.toLocaleDateString("en-US");
// })

eventOrganizationDisplay.addEventListener("change", function(){
	eventOrganization = eventOrganizationDisplay.value;
	console.log(eventOrganization);
})

eventNameDisplay.addEventListener("change", function(){
	eventName = eventNameDisplay.value;
	console.log(eventName);
})

requestedAmountDisplay.addEventListener("change", function(){
	requestedAmountDisplay.value = parseFloat(requestedAmountDisplay.value.replace(/,/g, ''));
	requestedAmount = Number(requestedAmountDisplay.value);
	checkRequestedOverMax();
	checkPreApprovedOverRequested();
	// requestedAmountDisplay.value = numberWithCommas(requestedAmount);
	doTotalBudgetCalculations();
	addDTPIDFundingCategories();
	matchTotals();
	overPercentage();
	showSubmit();
})

mobileDisplay.addEventListener("change", function(){
	mobileValue = mobile.value;
	mobileValue = formatPhoneNumber(mobileValue);
	mobileDisplay.value = mobileValue;
})

phoneDisplay.addEventListener("change", function(){
	phoneValue = phone.value;
	phoneValue = formatPhoneNumber(phoneValue);
	phoneDisplay.value = phoneValue;
})

function addDTPIDFundingCategories(){
	summedDTPIDFunds = eventMarketingTotal + eventStaffingTotal + eventProductionTotal + eventOtherTotal;
	summedDTPIDFundsDisplay.textContent = numberWithCommas(summedDTPIDFunds);
}

function doEstimationCalculations(){
	estimationChoiceResult = Math.round(estimationNumberInput * estimationChoiceFactor * 1)/1;
	estimationChoiceResultDisplay.textContent = numberWithCommas(estimationChoiceResult);
	hotelRoomNights = Number(estimationChoiceResult);
	hotelRoomNightsDisplay.value = numberWithCommas(estimationChoiceResult);
	totalRevenue = Math.round(estimationChoiceResult * hotelRoomRate * 1e12) / 1e12;
	totalRevenueDisplay.textContent = numberWithCommas(totalRevenue);
	finalDTPIDAmount = Math.floor(totalRevenue / 10);
	checkIfOverMax();
	setRequestedAmount();
	setPreApprovedAmount();
	finalDTPIDAmountDisplay.textContent = numberWithCommas(finalDTPIDAmount);
	totalDTPIDFundsDisplay.textContent = numberWithCommas(requestedAmount);
	dtpidFundsAvailableDisplay.textContent = numberWithCommas(requestedAmount);
	matchDTPIDFunds2.textContent = numberWithCommas(requestedAmount);
}

function doLessPaymentsCalculations(){
	lessAnyPaymentsDisplay.value = parseFloat(lessAnyPaymentsDisplay.value.replace(/,/g, ''));
	lessAnyPayments = Number(lessAnyPaymentsDisplay.value);
	finalPaymentDue = finalDTPIDAmount - lessAnyPayments;
	lessAnyPaymentsDisplay.value = numberWithCommas(lessAnyPayments);
	finalPaymentDueDisplay.value = numberWithCommas(finalPaymentDue);
}

function doTotalBudgetCalculations(){
	totalEventBudgetDisplay.value = parseFloat(totalEventBudgetDisplay.value.replace(/,/g, ''));
	var totalEventBudgetDisplay2 = totalEventBudgetDisplay.value;
	totalEventBudget = Number(totalEventBudgetDisplay.value) / 100;
	percentDTPIDTotal = Math.floor(requestedAmount / totalEventBudget);
	percentDTPIDTotalDisplay.textContent = percentDTPIDTotal;
	totalEventBudgetDisplay.value = numberWithCommas(totalEventBudgetDisplay2);
}

function setRequestedAmount(){
	requestedAmount = finalDTPIDAmount;
	requestedAmountDisplay.value = numberWithCommas(requestedAmount);
}

function setPreApprovedAmount(){
	dtpidFundsPreApproved = finalDTPIDAmount;
	dtpidFundsPreApprovedDisplay.value = numberWithCommas(dtpidFundsPreApproved);
}

function clearEstimationChoice(){
	estimationChoice0.classList.remove("hide");
	estimationChoice1.classList.add("hide");
	estimationChoice2.classList.add("hide");
	estimationChoice3.classList.add("hide");
	estimationResult.classList.add("hide");
	estimationChoiceFactor = 0;
	estimationNumberInput = 0;
	estimationNumberInputDisplay.value = 0;
	hotelRoomRate = 168;
	doEstimationCalculations();
	hotelRoomRateDisplay.value = hotelRoomRate;
	hotelRoomRateDisplay.readOnly = true;
	requestedAmount = 0;
}

function showEstimationChoiceFactor(){
	estimationChoiceFactorDisplay.textContent = estimationChoiceFactor;
	doEstimationCalculations();
}

function checkIfOverMax(){
	if (finalDTPIDAmount >= 35000){
		finalDTPIDAmount = 35000;
		finalDTPIDAmountDisplay.textContent = numberWithCommas(finalDTPIDAmount);
		totalDTPIDFundsDisplay.textContent = numberWithCommas(finalDTPIDAmount);
		matchDTPIDFunds2.textContent = numberWithCommas(finalDTPIDAmount);
		dtpidFundsAvailableDisplay.textContent = numberWithCommas(finalDTPIDAmount);
	}
}

function checkRequestedOverMax(){
	if (requestedAmount >= finalDTPIDAmount){
		requestedAmount = finalDTPIDAmount;
		requestedAmountDisplay.value = numberWithCommas(requestedAmount);
		dtpidFundsAvailableDisplay.textContent = numberWithCommas(requestedAmount);
		totalDTPIDFundsDisplay.textContent = numberWithCommas(requestedAmount);
		matchDTPIDFunds2.textContent = numberWithCommas(requestedAmount);
	} else {
		dtpidFundsAvailableDisplay.textContent = numberWithCommas(requestedAmount);
		totalDTPIDFundsDisplay.textContent = numberWithCommas(requestedAmount);
		matchDTPIDFunds2.textContent = numberWithCommas(requestedAmount);
	}
}

function checkPreApprovedOverRequested(){
	if (dtpidFundsPreApproved >= requestedAmount){
		dtpidFundsPreApproved = requestedAmount;
		requestedAmountDisplay.value = numberWithCommas(dtpidFundsPreApproved);
		dtpidFundsAvailableDisplay.textContent = numberWithCommas(dtpidFundsPreApproved);
		totalDTPIDFundsDisplay.textContent = numberWithCommas(dtpidFundsPreApproved);
		matchDTPIDFunds2.textContent = numberWithCommas(dtpidFundsPreApproved);
	} else {
		requestedAmountDisplay.value = numberWithCommas(dtpidFundsPreApproved);
		dtpidFundsAvailableDisplay.textContent = numberWithCommas(dtpidFundsPreApproved);
		totalDTPIDFundsDisplay.textContent = numberWithCommas(dtpidFundsPreApproved);
		matchDTPIDFunds2.textContent = numberWithCommas(dtpidFundsPreApproved);
	}
}

function matchTotals(){
	summedDTPIDFundsDisplay.textContent = numberWithCommas(summedDTPIDFunds);
	if (requestedAmount != summedDTPIDFunds){
		summedDTPIDFundsDisplay.classList.add("showcaseRed");
		matchDTPIDFunds1.classList.remove("hide");
	} else {
		summedDTPIDFundsDisplay.classList.remove("showcaseRed");
		matchDTPIDFunds1.classList.add("hide");
	}
}

function overPercentage(){
	if (percentDTPIDTotal > 35){
		percentDTPIDTotalDisplay.classList.add("showcaseRed");
	} else {
		percentDTPIDTotalDisplay.classList.remove("showcaseRed");
	}
}

function showSubmit(){
	if(requestedAmount == summedDTPIDFunds && percentDTPIDTotal <= 35 && hotelRoomNights > 30 && totalRevenue > 5000){
		// submitButton.classList.remove("hide");
		submitButton.removeAttribute("disabled");
	}
	else {
		// submitButton.classList.add("hide");
		submitButton.setAttribute("disabled","true");
	}
}

function showEstimationChoice(){
	estimationChoice0.classList.add("hide");
	estimationResult.classList.remove("hide");
	estimationChoiceFactorDisplay.textContent = estimationChoiceFactor;
}

function resetAllFinalDTPIDAmounts(){
	finalDTPIDAmountDisplay.textContent = numberWithCommas(requestedAmount);
	dtpidFundsAvailableDisplay.textContent = numberWithCommas(requestedAmount);
	totalDTPIDFundsDisplay.textContent = numberWithCommas(requestedAmount);
}
  
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function myFunction() {
	var email = 'maribeth@visitdallas.com';
	var subject = eventOrganization + ', ' + eventName + " - Post Event: Supplemental Documents";
	window.location.href='mailto:'+email+'?subject='+subject;
}

function formatPhoneNumber(phoneNumberString) {
	var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
	var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	}
	return null
}

$(document).ready(function () {
    $("#00N0b000007v1mP").datepicker({
        // minDate: 0,
        onSelect: function () {
            var dt2 = $('#00N0b000007v1qc');
            var startDate = $(this).datepicker('getDate');
            //add 30 days to selected date
            startDate.setDate(startDate.getDate() + 30);
            var minDate = $(this).datepicker('getDate');
            var dt2Date = dt2.datepicker('getDate');
            //difference in days. 86400 seconds in day, 1000 ms in second
            var dateDiff = (dt2Date - minDate)/(86400 * 1000);

            //dt2 not set or dt1 date is greater than dt2 date
            if (dt2Date == null || dateDiff < 0) {
                    dt2.datepicker('setDate', minDate);
            }
            //dt1 date is 30 days under dt2 date
            else if (dateDiff > 30){
                    dt2.datepicker('setDate', startDate);
            }
            //first day which can be selected in dt2 is selected date in dt1
            dt2.datepicker('option', 'minDate', minDate);
        }
    });
    $('#00N0b000007v1qc').datepicker({
        // minDate: 0
    });
});






