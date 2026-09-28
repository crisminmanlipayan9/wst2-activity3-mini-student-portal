// Returns an object with an error message for every invalid field.
// An EMPTY object means the form is valid.
export function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Enter the student's full name.";
  }

  if (!values.studentId.trim()) {
    errors.studentId = "Enter the Student ID.";
  } else if (!/^\d{4}-\d{4}$/.test(values.studentId.trim())) {
    errors.studentId = "Use the format ####-#### (e.g. 2024-0123).";
  }

  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address (e.g. name@example.com).";
  }

  if (!values.course) {
    errors.course = "Choose a course.";
  }

  if (!values.yearLevel) {
    errors.yearLevel = "Choose a year level.";
  }

  return errors;
}
