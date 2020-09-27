let loanInterestRate = 5

        let principal = document.getElementById('loanamount').value

        let userCurrency = document.getElementById('currency').value

        let loanPeriod = document.getElementById('period').value

        let interestTotal = ((loanInterestRate / 100) * loanPeriod) + 1

        let loanAmountPayable = principal * interestTotal

        let loanPeriodInWeeks = loanPeriod * 52

        let weeklyInstalment = ( loanAmountPayable / loanPeriodInWeeks)

        let instalmentPaidTotal = 0

        let payButton = document.getElementById('paybtn')

        function loanForm(){
            principal = document.getElementById('loanamount').value

            userCurrency = document.getElementById('currency').value

            loanPeriod = document.getElementById('period').value

            interestTotal = ((loanInterestRate / 100) * loanPeriod) + 1

            loanAmountPayable = principal * interestTotal

            loanPeriodInWeeks = loanPeriod * 52

            weeklyInstalment = ( loanAmountPayable / loanPeriodInWeeks)

            document.getElementById('payableloan').value = userCurrency + " " + loanAmountPayable.toFixed(2)

            document.getElementById('weeklyloan').value = userCurrency + " " +  weeklyInstalment.toFixed(2)

            document.getElementById('numberInstalment').value = loanPeriodInWeeks + ' weeks'

            document.getElementById('repayamount').value = userCurrency + " " + loanAmountPayable.toFixed(2)

            document.getElementById('due').value = userCurrency + ' ' +  weeklyInstalment.toFixed(2)
        }    
        
        function payNow(){
           
            instalmentPaidTotal = weeklyInstalment + instalmentPaidTotal

            let loanBalancePayable = loanAmountPayable - instalmentPaidTotal
            
                if(loanBalancePayable >  0){
                    document.getElementById('amountPaid').value = userCurrency + ' ' +instalmentPaidTotal.toFixed(2)
                    document.getElementById('currentBalance').value = userCurrency + ' ' + loanBalancePayable.toFixed(2) 
                } else{
                    alert('You have fully repaid your personal loan. Thank you.')
                    // document.getElementById('amountPaid').value = ''
                    // document.getElementById('currentBalance').value = ''
                    location.reload();
                    return false
                }

        }