import { Fragment } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

export default function EditUserForm(user) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        dispatch({type: "EDIT_USER", payload: {...values, ...{id: user.id}}});
    }

    if (!user.id) {
        return <div></div>
    }

    const layout = {
        labelCol: { span: 24 }
    };
    
    return (
        <Fragment>
            <Form {...layout} initialValues={user} form={form} name="userForm" onFinish={onFinish}>
                <h3 className="form-title">Edit user</h3>
                <Form.Item 
                    name="name" 
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}>
                    <Input placeholder="Input your name" />
                </Form.Item>

                <Form.Item 
                    name="surname" 
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}>
                    <Input placeholder="Input your surname" />
                </Form.Item>

                <Form.Item
                    name="desc" 
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}>
                    <Input.TextArea placeholder="Input your desc" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Edit</Button>
                </Form.Item>
            </Form>
            <Link to="/">Back</Link>
        </Fragment>
    )
}