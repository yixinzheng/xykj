<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        float: left;
        width: 150px;
        height: 30px;
        background: url("../images/logo.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 3px;
        margin: 15px;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .log-out-btn {
        float: right;
        margin: 15px;
    }
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ivu-modal{
        top: 0;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" active-name="1">
            <div class="layout-logo"></div>
            <Button class="log-out-btn" type="primary" icon="log-out" @click="logOut">退出登录</Button>
        </Menu>
        <div class="layout-content">
            <Row style="height:1000px;">
                <Col span="4">
                <Menu active-name="1-2" width="auto">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            会员管理
                        </template>
                        <router-link to="/home/vip">
                            <Menu-item name="1-1">会员列表</Menu-item>
                        </router-link>
                        <Menu-item name="1-2">费用设置</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <Menu-item name="2-1">选项 1</Menu-item>
                        <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="3-1">选项 1</Menu-item>
                        <Menu-item name="3-2">选项 2</Menu-item>
                    </Submenu>
                </Menu>
                </Col>
                <Col span="20">
                <div class="layout-content">
                    <div class="layout-content-main">
                        <!--内容区域-->
                        <!--<router-link to="/home/page1">111</router-link>-->
                        <!--<router-link to="/home/page2">222</router-link>-->
                        <!--<router-link to="/vip">vip</router-link>-->
                        <router-view></router-view>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            logOut() {
                var _this = this;
                this.$Modal.confirm({
                    title: '退出确认',
                    content: '<p>您确认要退出登录？</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('已退出登录!');
                            _this.$router.push('/');
                        },2000);
                    }
                });
            }
        }
    }
</script>