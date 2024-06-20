import React from "react";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import { loginValidation } from "./Validations";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/authSlice";
import { auth } from "../../configuration/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const LoginModalSection = () => {
	const dispatch = useDispatch();
	const handleSignIn = async (credentials) => {
		try {
			const signInResponse = await createUserWithEmailAndPassword(
				auth,
				credentials.email,
				credentials.password
			);

			// const userInfo = signInResponse.user;
			// // await
			// console.log(signInResponse.user);
			// dispatch(
			// 	login({
			// 		userId: userInfo.uid,
			// 		userName: credentials.name,
			// 		profileUrl: user.photoURL,
			// 		loginStatus: true,
			// 	})
			// );
		} catch (err) {
			alert(err);
		}
	};

	const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
		useFormik({
			initialValues,
			validationSchema: loginValidation,
			onSubmit: (values, action) => {
				handleSignIn(values);
			},
		});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.name}
					className="border-solid border-4 border-gray-600"
				/>
				{errors.name && touched.name ? <p>{errors.name}</p> : null} <br />
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
					className="border-solid border-4 border-gray-600"
				/>
				{errors.email && touched.email ? <p>{errors.email}</p> : null} <br />
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password}
					className="border-solid border-4 border-gray-600"
				/>
				{errors.password && touched.password ? <p>{errors.password}</p> : null}{" "}
				<br />
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.confirmPassword}
					className="border-solid border-4 border-gray-600"
				/>
				{errors.confirmPassword && touched.confirmPassword ? (
					<p>{errors.confirmPassword}</p>
				) : null}{" "}
				<br />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default LoginModalSection;
