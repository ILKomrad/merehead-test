import { Form, Input, Button, useForm } from "antd";
import { useDispatch } from "react-redux";

export default function AddUserForm() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            span: 4,
            offset: 4,
        },
        wrapperCol: {
            span: 14,
            offset: 0,
        },
    };

    const onFinish = values => {
        dispatch({type: "ADD_USER", payload: values});
    }
    
    return (
        <Form form={form} name="userForm" onFinish={onFinish}>
            <Form.Item 
                label="Username" 
                name="userName" 
                rules={[
                {
                    required: true,
                    message: 'Please input your name',
                },
            ]}>
                <Input placeholder="Input your name" />
            </Form.Item>

            <Form.Item 
                label="user email" 
                name="userEmail" 
                rules={[
                {
                    required: true,
                    message: 'Please input your name',
                },
            ]}>
                <Input placeholder="Input your name" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}