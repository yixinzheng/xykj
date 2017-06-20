<template>
    <div>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">编号</Col>
            <Col span="20" class="label-value">10001</Col>
        </Row>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">名称</Col>
            <Col span="20" class="label-value">123123</Col>
        </Row>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">类型</Col>
            <Col span="20" class="label-value">123123</Col>
        </Row>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">手机</Col>
            <Col span="20" class="label-value">123123</Col>
        </Row>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">钱包</Col>
            <Col span="20" class="label-value">123123</Col>
        </Row>
        <Row type="flex" justify="space-between" class="container">
            <Col span="3" class="label-key">姓名</Col>
            <Col span="20" class="label-value">123123</Col>
        </Row>
    </div>
</template>
<style>
    .container{
        padding: 10px 0;
    }
    .label-key{
        text-align: right;
        font-size: 20px;
    }
    .label-value{
        font-size: 20px;
    }
</style>
<script>
    export default {
        data(){
            return {
                id: this.$route.params.id
            }
        },
        created() {

        },
        methods:{

        }
    }
</script>