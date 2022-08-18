import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Email } from "../assets/icons/email.svg";
import { ReactComponent as Password } from "../assets/icons/padlock.svg";
import { ReactComponent as LoginSVG } from "../assets/icons/undraw_sign_in_e6hj.svg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Signup = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState();
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    //prevent the default form behaviour: refreshing page
    e.preventDefault();
    //set submitting so button can appear disabled
    setSubmitting(true);
    const form = e.target;
    //send form data to netlify function
    fetch("https://45.119.83.239:8181/api/services/app/Account/Register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        emailAddress,
        password,
      }),
    })
      .then((response) => {
        console.log("response", response);
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => alert(error))
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container row>
      <Container light small>
        <Heading1>
          {success ? `Welcome, ${name}` : "Create an Account"}
        </Heading1>
        <LoginSVG />
      </Container>
      <Container small>
        <FormContainer hidden={success} animateIn={animate}>
          <Heading2>Sign up</Heading2>
          <Form method="POST" onSubmit={handleSubmit}>
            <Field>
              <Icon>
                <User />
              </Icon>
              <Label htmlFor="name" label="name">
                Name
              </Label>
              <Input
                name="name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autocomplete
              />
            </Field>
            <Field>
              <Icon>
                <Email />
              </Icon>
              <Label htmlFor="email" label="email">
                Email
              </Label>
              <Input
                name="Email"
                type="email"
                id="email"
                value={emailAddress}
                onInput={(e) => e.target.setCustomValidity("")}
                onInvalid={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity("Must be a valid email address");
                  }
                }}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                autocomplete
              />
            </Field>
            <Field>
              <Icon>
                <Password />
              </Icon>
              <Label htmlFor="password">Password</Label>

              <Input
                name="password"
                type="password"
                id="password"
                minlength="8"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                onInput={(e) => e.target.setCustomValidity("")}
                onInvalid={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Must contain at least one upper case letter, at least one lower case letter, at least one number, at least one special character, minimum eight in length"
                    );
                  }
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Icon>
                <Password />
              </Icon>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                minlength="8"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (
                    password &&
                    confirmPassword &&
                    password !== confirmPassword
                  ) {
                    e.target.setCustomValidity("Passwords must match");
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
              />
            </Field>
            <br />
            <p>Password Must Contain:</p>
            <List>
              <li>At least 1 uppercase and lowercase letter</li>
              <li>At least 1 number</li>
              <li>At least 1 special character</li>
              <li>At least 8 characters</li>
            </List>
            <Button type="submit" disabled={submitting} content= 'Submit'>
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  )
}

const CenteredContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.light ? "var(--theme-blue)" : "var(--navyviolet)"};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 800px) {
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    width: ${(props) => (props.small ? "50%" : "100%")};
  }
`

const FormContainer = styled(CenteredContainer)`
  display: flex;
  padding: 20px 24px 20px 24px;
  text-align: left;
  width: 85%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 0px 15px -4px #000000;
  border-radius: var(--theme-border-rounded);
  display: ${(props) => (props.hidden ? "none" : "block")};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`
const Form = styled.form`
  width: 100%;
  margin-top: var(--theme-gutter-top);
`
const Field = styled.div`
  width: 100%;
  position: relative;
  margin-top: var(--theme-gutter-top);
`
const Icon = styled.i`
  position: absolute;
  top: 43px;
  left: 9px;
  fill: var(--theme-blue);
`
const Input = styled.input`
  width: 100%;
  color: var(--theme-grey);
  background-color: var(--theme-blue-light);
  border: 0;
  margin-top: var(--theme-gutter-top);
  padding: 15px 10px 15px 42px;
  box-sizing: border-box;
  border-radius: var(--theme-border-rounded);
  &:focus {
    outline: none;
    box-shadow: var(--theme-blue) 0px 0px 2px 2px;
  }
  &:focus:invalid {
    outline: none;
    box-shadow: var(--theme-error) 0px 0px 2px 2px;
  }
`

const Label = styled.label`
  color: var(--theme-grey);
  font-size: 14px;
`

const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  padding-inline-start: 0;
  font-size: 12px;
  color: var(--theme-grey-light);
`
const Heading1 = styled.h1`
  font-family: "Raleway", Sans-serif;
  font-size: 62px;
  letter-spacing: 0.5px;
  color: var(--theme-grey);
  margin-bottom: 6px;
  text-align: center;
  padding: 1rem;
`;

export const Heading2 = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-block-start: 0;
`
export default Signup
