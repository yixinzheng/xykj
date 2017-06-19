<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row>
            <Col span="24">
            <h1>
                <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
            </h1>
            <h2>
                <p>Welcome to your iView app!</p>
                <Button type="ghost" @click="handleStart">Start iView</Button>
            </h2>
            <!--<router-link to="/home">123123</router-link>-->
            </Col>
        </Row>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="用户名" prop="name">
                <Input v-model="formValidate.name" type="password" placeholder="请输入用户名"></Input>
            </Form-item>
            <Form-item label="密码" prop="pwd">
                <Input v-model="formValidate.pwd" type="password" placeholder="请输入密码"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formValidate: {
                    name: '',
                    pwd: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
                        this.$router.push('/home');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>