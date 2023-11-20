import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/thunk/userThunk';
const Login = () => {

  // const { messageNoti } = useSelector(state => state.jiraSlice);

  const dispatch = useDispatch();


  const onFinish = (values) => {
    dispatch(loginThunk(values));
  };
  const onFinishFailed = (errorInfo) => {

  };
  return (
    <div className="user__pages">
      <h2 className='user__pages-title'>Đăng nhập</h2>
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

        <Form.Item
          wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 24 }}>
          <Link to={'/register'}>
            Bạn chưa có tài khoản? <span>Đăng ký ngay</span>
          </Link>
        </Form.Item>
      </Form>

    </div>
  );
};



export default Login;