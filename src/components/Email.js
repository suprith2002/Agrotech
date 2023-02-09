import React from 'react'

const Email = () => {


 
    // const emaa = () => {
    //     const config = {
    //         SecureToken: ' 917ad8f2-c2c9-4515-b25a-7ae22b4004c5',
    //         To : 'shreeshhegde07@gmail.com',
    //         From : "shreeshhegde007@gmail.com",
    //         Subject : "This is the subject",
    //         Body : "And this is the body"
    //     }
    //     if(window.Email){
    //         window.Email.send(config)
    //     }
    // }
    const ew = () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "korishettarsuprith4@gmail.com",
        Password : "yikvyyffponeriep",
        To : 'korishettarsuprith@gmail.com',
        From : "korishettarsuprith4@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    }

  return (
    <div>email
        <button onClick={ew}>ho</button>
    </div>
  )
}

export default Email