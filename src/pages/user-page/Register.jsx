import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/thunk/userThunk';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values) => {
        dispatch(registerThunk(values)).then(() => navigate('/login'))
    };
    const onFinishFailed = (errorInfo) => {
    };
    return (
        <div className="user__pages">
            <h2 className='user__pages-title'>Đăng ký</h2>
            <Form
                name="basic"
                layout='vertical'
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='user__pages-form'
            >
                <Form.Item name='email' className='mb-3' label="Email" rules={[
                    { type: 'email', message: 'Không phải email (►__◄)' },
                    { required: true, message: 'Email trống {{{(>_<)}}}' },]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Mật khẩu" name="passWord" className='mb-3'
                    rules={[{ required: true, message: 'Chưa nhập mật khẩu o(TヘTo)' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item name='name' className='mb-3' label="Họ tên" rules={[
                    { required: true, message: 'Họ tên trống {{{(>_<)}}}' },]}>
                    <Input />
                </Form.Item>

                <Form.Item name='phoneNumber' className='mb-3' label="Số điện thoại" rules={[
                    { required: true, message: 'Số điện thoại trống {{{(>_<)}}}' },
                    { max: 10, message: 'Tối đa 10 chữ số' },
                    { min: 10, message: 'Tối thiểu 10 chữ số' }]}>

                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}>
                    <Link to={'/login'}>
                        Bạn đã có tài khoản? <span className='text-danger'>Quay lại trang đăng nhập</span>
                    </Link>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Register;