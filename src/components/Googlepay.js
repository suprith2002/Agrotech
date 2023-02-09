import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import  { useRef, useEffect,useState } from 'react'



const Googlepay = (props) => {
    const ref = useRef(null)
    const [inp, setinp] = useState("")
    const onclik = ()=> {
        // window.location.href='https://google.com'
        console.log('gpay li ottiddu' + inp)
      
    }

    
  return (
    <>
    <div className='tw-relative'>
    
<GooglePayButton
  environment="TEST" //PRODUCTION
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: [
            'PAN_ONLY',
            'CRYPTOGRAM_3DS'
          ],
          allowedCardNetworks: [
            'MASTERCARD',
            'VISA',     
          ]
        },
        
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              'gateway': 'example',
              'gatewayMerchantId': 'exampleGatewayMerchantId'        
            }
          },
        }],
        merchantInfo: {
          merchantId: '12345678901234567890', //12345678901234567890 //BCR2DN4TQS733XJD
          merchantName: 'Demo merchant ',   //Demo merchant
        },
        transactionInfo:{
          totalPriceStatus:"FINAL",
          totalPriceLabel:"Total",
          totalPrice:`${props.hour}`,
          currencyCode:"INR",
          countryCode:"IN"
        },
       
        shippingAddressRequired: true,
        callbackIntents:["PAYMENT_AUTHORIZATION"]
    }}
    onLoadPaymentData={paymentRequest=>{
      console.log(paymentRequest)
    }}
    onPaymentAuthorized={paymentData=>{
      console.log('paymentData' +paymentData);
      return{transactionState:'SUCCESS'}
    }}
    existingPaymentMethodRequired='false' 
    buttonColor='Black'
    buttonType='buy'>
     
    </GooglePayButton>
    

    </div>

    </>
  )
}

export default Googlepay