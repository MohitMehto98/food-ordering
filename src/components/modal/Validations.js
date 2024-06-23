import * as Yup from "yup";

export const loginValidation = Yup.object({
	name: Yup.string()
		.min("3", "Please Enter Valid Name")
		.required("Please Provide Valid Name"),
	email: Yup.string()
		.email("Enter Valid Email")
		.required("Please Provide Your Email"),
	password: Yup.string()
		.min(6, "Please Enter Strong Password")
		.required("Please Provide Password"),
	confirmPassword: Yup.string()
		.required("Please Provide Password")
		.oneOf([Yup.ref("password"), null], "Password Not Match"),
});

export const addValidation = Yup.object({
	namfffe: Yup.string()
		.min(3, "Please Enter Valid Name666")
		.required("Please Provide Your Name"),
	email: Yup.string()
		.email("Enter Valid Email")
		.required("Please Provide Your Email"),
});
