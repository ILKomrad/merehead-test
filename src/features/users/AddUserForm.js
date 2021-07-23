import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

export default function AddUserForm() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    
    const onFinish = values => {
        dispatch({type: "ADD_USER", payload: values});
    }

    const layout = {
        labelCol: { span: 24 }
    };
    
    return (
        <Form form={form} {...layout} name="userForm" onFinish={onFinish}>
            <h3 className="form-title">Add user</h3>
            <Form.Item 
                name="name" 
                label="name"
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
                label="surname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your surname',
                    }]
                }>
                <Input placeholder="Input your surname" />
            </Form.Item>

            <Form.Item
                name="desc" 
                label="description">
                <Input.TextArea placeholder="Input your desc" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}