import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Form } from "./LoginForm.styled";

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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input type="text" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
            <Input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}

            <Button type="submit">Submit</Button>

        </Form>
    );
}
