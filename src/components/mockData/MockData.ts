import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '252118',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Alexa Collins',
      email: 'a**@gmail.com',
      createdOn: '12/19/2025', // m/d/y
      username: 'Lex010',
      password: 'alexacollins@128'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 1652000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'Your account is on Hold. You can’t make transactions right now please contact your bank manager for assistance.',
      thankYouText: 'Thank you',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 13, 2025',
        description: 'Wegmans account Ltd - XXXXXX4475',
        status: 'Success',
        amount_usd: 413000
      },
      {
        dateTime: 'September 20, 2024',
        description: 'Wegmans account Ltd - XXXXXX9634',
        status: 'Success',
        amount_usd: 413000
      },
      {
        dateTime: 'August 10, 2023',
        description: 'Asset Liquidation Co. - XXXXXX7362',
        status: 'Success',
        amount_usd: 123900
      },
      {
        dateTime: 'July 8, 2023',
        description: 'Decedent Refund Group - XXXXXX9145',
        status: 'Success',
        amount_usd: 103250
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Tax Refund Receivables LLC - XXXXXX2567',
        status: 'Success',
        amount_usd: 82600
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Transfer From Williams Peter - XXXXXX2747',
        status: 'Success',
        amount_usd: 61950
      },
      {
        dateTime: 'April 18, 2023',
        description: 'Insurance Claim Services - XXXXXX4921',
        status: 'Success',
        amount_usd: 41300
      },
      {
        dateTime: 'March 10, 2023',
        description: 'Transaction fee - XXXXXX2327',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'March 10, 2023',
        description: 'Kinship Capital Holdings - XXXXXX8012',
        status: 'Success',
        amount_usd: -81600
      },
      {
        dateTime: 'February 5, 2023',
        description: 'Transaction fee - XXXXXX2372',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 20, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Transaction fee - XXXXXX35638',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Kinship Capital Holdings - XXXXXX3763',
        status: 'Success',
        amount_usd: -39000
      },
      {
        dateTime: 'January 5, 2023',
        description: 'Transaction fee - XXXXXX2327',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 5, 2023',
        description: 'Transfer to Olivia Auto Ltd. - XXXXXX9655',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'November 23, 2022',
        description: 'Succession Planning Group - XXXXXX3345',
        status: 'Success',
        amount_usd: 165200
      },
      {
        dateTime: 'October 18, 2022',
        description: 'Transfer from Federal Deposit Insurance Corp - XXXXXX8429',
        status: 'Success',
        amount_usd: 123900
      },
      {
        dateTime: 'September 15, 2022',
        description: 'Transfer from Patrick Miller - XXXXXX0045',
        status: 'Success',
        amount_usd: 82600
      },
      {
        dateTime: 'August 30, 2022',
        description: 'Transfer from NovaTech Solutions - XXXXXX6542',
        status: 'Success',
        amount_usd: 24780
      },
      {
        dateTime: 'July 25, 2022',
        description: 'Estate Settlement Services - XXXXXX1254',
        status: 'Success',
        amount_usd: 16520
      },
      {
        dateTime: 'July 10, 2022',
        description: 'Maintenance fee - XXXXXX1070',
        status: 'Success',
        amount_usd: -125
      },
      {
        dateTime: 'June 20, 2022',
        description: 'Transaction fee - XXXXXX6433',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'June 20, 2022',
        description: 'Transfer to Kelvin Kane - XXXXXX3707',
        status: 'Success',
        amount_usd: -3500
      },
      {
        dateTime: 'May 25, 2022',
        description: 'Maintenance fee - XXXXXX3663',
        status: 'Success',
        amount_usd: -125
      },
      {
        dateTime: 'April 10, 2022',
        description: 'Transfer fee - XXXXXX5668',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'April 10, 2022',
        description: 'Transfer to Summit Corp - XXXXXX1384',
        status: 'Success',
        amount_usd: -8000
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Bernice James',
      email: 'b**@gmail.com',
      createdOn: '12/21/2025', // m/d/y
      username: 'bernice6227',
      password: 'bernicejames6227'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 35000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '25217',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'Your account is on Hold. You can’t make transactions right now please contact your bank manager for assistance.',
      thankYouText: 'Thank you',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 13, 2025',
        description: 'Wegmans account Ltd - XXXXXX4475',
        status: 'Success',
        amount_usd: 8754
      },
      {
        dateTime: 'September 20, 2024',
        description: 'Wegmans account Ltd - XXXXXX9634',
        status: 'Success',
        amount_usd: 8754
      },
      {
        dateTime: 'August 10, 2023',
        description: 'Asset Liquidation Co. - XXXXXX7362',
        status: 'Success',
        amount_usd: 2626
      },
      {
        dateTime: 'July 8, 2023',
        description: 'Decedent Refund Group - XXXXXX9145',
        status: 'Success',
        amount_usd: 2188
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Tax Refund Receivables LLC - XXXXXX2567',
        status: 'Success',
        amount_usd: 1749
      },
      {
        dateTime: 'May 20, 2023',
        description: 'Transfer From Williams Peter - XXXXXX2747',
        status: 'Success',
        amount_usd: 1313
      },
      {
        dateTime: 'April 18, 2023',
        description: 'Insurance Claim Services - XXXXXX4921',
        status: 'Success',
        amount_usd: 875
      },
      {
        dateTime: 'March 10, 2023',
        description: 'Transaction fee - XXXXXX2327',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'March 10, 2023',
        description: 'Kinship Capital Holdings - XXXXXX8012',
        status: 'Success',
        amount_usd: -81600
      },
      {
        dateTime: 'February 5, 2023',
        description: 'Transaction fee - XXXXXX2372',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 20, 2023',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Transaction fee - XXXXXX35638',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Kinship Capital Holdings - XXXXXX3763',
        status: 'Success',
        amount_usd: -39000
      },
      {
        dateTime: 'January 5, 2023',
        description: 'Transaction fee - XXXXXX2327',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 5, 2023',
        description: 'Transfer to Olivia Auto Ltd. - XXXXXX9655',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'November 23, 2022',
        description: 'Succession Planning Group - XXXXXX3345',
        status: 'Success',
        amount_usd: 3500
      },
      {
        dateTime: 'October 18, 2022',
        description: 'Transfer from Federal Deposit Insurance Corp - XXXXXX8429',
        status: 'Success',
        amount_usd: 2626
      },
      {
        dateTime: 'September 15, 2022',
        description: 'Transfer from Patrick Miller - XXXXXX0045',
        status: 'Success',
        amount_usd: 1749
      },
      {
        dateTime: 'August 30, 2022',
        description: 'Transfer from NovaTech Solutions - XXXXXX6542',
        status: 'Success',
        amount_usd: 525
      },
      {
        dateTime: 'July 25, 2022',
        description: 'Estate Settlement Services - XXXXXX1254',
        status: 'Success',
        amount_usd: 341
      },
      {
        dateTime: 'July 10, 2022',
        description: 'Maintenance fee - XXXXXX1070',
        status: 'Success',
        amount_usd: -125
      },
      {
        dateTime: 'June 20, 2022',
        description: 'Transaction fee - XXXXXX6433',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'June 20, 2022',
        description: 'Transfer to Kelvin Kane - XXXXXX3707',
        status: 'Success',
        amount_usd: -3500
      },
      {
        dateTime: 'May 25, 2022',
        description: 'Maintenance fee - XXXXXX3663',
        status: 'Success',
        amount_usd: -125
      },
      {
        dateTime: 'April 10, 2022',
        description: 'Transfer fee - XXXXXX5668',
        status: 'Success',
        amount_usd: -80
      },
      {
        dateTime: 'April 10, 2022',
        description: 'Transfer to Summit Corp - XXXXXX1384',
        status: 'Success',
        amount_usd: -8000
      }
    ]
  }
];
