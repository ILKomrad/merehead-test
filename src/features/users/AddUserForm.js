import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

export default function AddUserForm() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    
    const onFinish = values => {
        dispatch({type: "ADD_USER", payload: values});
    }
    
    return (
        <Form form={form} name="userForm" onFinish={onFinish}>
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
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}