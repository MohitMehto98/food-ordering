import React from "react";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";

const initialValues = { email: "", password: "" };

const LoginModalSection = () => {
	const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
		useFormik({
			initialValues,
			onSubmit: (values, action) => {
				console.log(values);
			},
		});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					onClick={handleChange}
					onBlur={handleBlur}
					value={values.email}
				/>
				<label htmlFor="password">Password</label>
				{errors.name && touched ? <p>{errors.email}</p> : null}
				<input
					type="password"
					name="password"
					onClick={handleChange}
					onBlur={handleBlur}
					value={values.password}
				/>
				{errors.name && touched ? <p>{errors.password}</p> : null}
				<button>Submit</button>
			</form>
		</>
	);
};

export default LoginModalSection;
