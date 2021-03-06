import { Form, Input, Button } from "antd";

export default function UserForm({ title, btnTitle, onSubmit, initialValues }) {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 24 }
    };

    function onFinish(values) {
        onSubmit(values);
        form.resetFields();
    }

    return (
        <Form 
            form={form} 
            {...layout} 
            onFinish={onFinish}
            name="userForm" 
            initialValues={initialValues}>
            <h3 className="form-title">{title}</h3>
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
                <Button type="primary" htmlType="submit">{btnTitle || "Submit"}</Button>
            </Form.Item>
        </Form>
    )
}