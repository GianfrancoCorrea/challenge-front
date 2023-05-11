import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage, ForgotPassword, Form } from "./LoginForm.styled";
import Input from "@/shared/components/Input.styled";
import Button from "@/shared/components/Button.styled";

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
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const onSubmit = (data: FormValues) => {
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


        </Form>
    );
}
