import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage, ForgotPassword, Form } from "./LoginForm.styled";
import Input from "@/shared/components/Input.styled";
import Button from "@/shared/components/Button.styled";
import Loading from "@/shared/components/Loading";
import useLogin from "@/shared/hooks/useLogin";

// form fields
interface FormValues {
    username: string;
    password: string;
}

// form fields validations
const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

const resolver = yupResolver(schema);

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const { setToken, setUser } = useLogin();

    const onSubmit = (data: FormValues) => {
        if(errors.username || errors.password) return;
        setIsLoading(true);

        // login to reqres.in
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    setError('root', { type: 'manual', message: 'Invalid credentials' });
                }
                return response.json();
            })
            .then((response) => {

                // save token to local storage
                setToken(response.token);
                setUser(data.username);
                setIsLoading(false);
                // go to home page
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <h1>Login</h1>
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            <Input 
                type="text"
                placeholder="Username"
                $error={errors.username}
                {...register("username")}
            />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <Input 
                type="password"
                placeholder="Password"
                {...register("password")}
                autoComplete="new-password"
                $error={errors.password}
            />
                {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}

            <Button type="submit">Submit</Button>

            <ForgotPassword>Forgot your password?</ForgotPassword>

            {isLoading && <Loading />}
        </Form>
    );
}
