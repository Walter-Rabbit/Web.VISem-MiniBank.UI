import supertokensEmailPassword from 'supertokens-node/lib/build/recipe/emailpassword';

export default async function signInClicked() {
  try {
    let email = window.prompt('Enter email: ', 'example@ex.com');
    let password = window.prompt('Enter password: ', 'qweasdzxc');

    let response = await supertokensEmailPassword.signIn({
      formFields: [
        {
          id: 'email',
          value: email,
        },
        {
          id: 'password',
          value: password,
        },
      ],
    });

    if (response.status === 'FIELD_ERROR') {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === 'WRONG_CREDENTIALS_ERROR') {
      window.alert('Email password combination is incorrect.');
    } else {
      // sign in successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = '/';
    }
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert('Oops! Something went wrong.');
    }
  }
}
