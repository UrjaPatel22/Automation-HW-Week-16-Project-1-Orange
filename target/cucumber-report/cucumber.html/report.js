$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a User I want to Login Successfully",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4040703200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyUserShouldLogOutSuccessFully()",
  "description": "",
  "id": "login-test;verifyusershouldlogoutsuccessfully()",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter user name \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Click on User Profile logo",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Mouse hover on \"Logout\" and click",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text \"Login Panel\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 88125900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "UserSteps.iEnterUserName(String)"
});
formatter.result({
  "duration": 260001100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 162073900,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 963081400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 500581700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iMouseHoverOnAndClick(String)"
});
formatter.result({
  "duration": 1358938300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Panel",
      "offset": 17
    }
  ],
  "location": "LoginSteps.verifyTheTextIsDisplayed(String)"
});
formatter.result({
  "duration": 249492700,
  "status": "passed"
});
formatter.after({
  "duration": 170700,
  "status": "passed"
});
});