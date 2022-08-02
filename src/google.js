import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function Google(){

    const responseSuccessGoogle = (response) =>{
    console.log(response);
    axios({
        method: 'POST',
        url:"http://localhost:9000/api/googlelogin",
        data:{tokenId: response.tokenId}
    }).then(response =>{
        console.log(response);
    })
    }
    const responseErrorGoogle = (response) =>{
        console.log(response)
        }
    
    return(
        <React.Fragment>
            <GoogleLogin
                clientId="540186058279-3gdo04epe63p49499s5n43fs1o72ek2u.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </React.Fragment>
    )
}

export default Google;