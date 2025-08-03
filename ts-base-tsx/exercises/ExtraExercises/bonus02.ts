// Your task:
// 1. Create two callback types:
//    - SuccessCallback: accepts (text: string) => void
//    - IssueCallback: accepts (issue: string) => void
//
// 2. Create function createValidator that:
//    - accepts minLength: number as parameter
//    - returns a validation function
//
// 3. The returned validation function should:
//    - accept: text: string, successCallback: SuccessCallback, issueCallback: IssueCallback
//    - check if text.length >= minLength
//    - if valid: call successCallback with message "Text is valid: [text]"
//    - if invalid: call issueCallback with message "Text too short! Minimum length: [minLength]"
//
// 4. Test your solution:
//    - Create validator for minimum 5 characters
//    - Test with valid text ("Hello World")
//    - Test with invalid text ("Hi")

// Expected output:
// Text is valid: Hello World
// Text too short! Minimum length: 5

// npm run bonus02
//// TODO: Place your solution here


type SuccessCallback = (text: string) => void;
type IssueCallback = (issue: string) => void;

const onSuccess = (msg: string): void => {
  console.log(msg);
};
const onIssue = (msg: string): void => {
  console.log(msg);
};

function createValidator(minLength: number) {
  return function (
    text: string,
    successCallback: SuccessCallback,
    issueCallback: IssueCallback
  ) {
    if (text.length >= minLength) {
      let msgOnSucces = "Text is valid: " + text;
      successCallback(msgOnSucces);
    } else {
      let msgOnIssue = "Text too short! Minimum length: " + minLength;
      issueCallback(msgOnIssue);
    }
  };
}

//// Test your solution:
const validator = createValidator(5);
validator("Hello World", onSuccess, onIssue); // Should call onSuccess
validator("Hi", onSuccess, onIssue); // Should call onIssue
