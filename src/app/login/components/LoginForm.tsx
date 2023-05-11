import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage, ForgotPassword, Form } from "./LoginForm.styled";
import Input from "@/shared/components/Input.styled";
import Button from "@/shared/components/Button.styled";
import Loading from "@/shared/components/Loading";

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
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const onSubmit = (data: FormValues) => {
        if(errors.username || errors.password) return;
        setIsLoading(true);
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

            <Button type="submit">Submit</Button>

            <ForgotPassword>Forgot your password?</ForgotPassword>

            {isLoading && <Loading />}
        </Form>
    );
}
