<template>
    <div>
        {{msg}}
        <Table highlight-row :columns="columns" :data="data"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: '状态',
                        key: 'state'
                    },
                    {
                        title: '钱包',
                        key: 'money'
                    },
                    {
                        title: '申请时间',
                        key: 'time'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 300,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push('vip/vipDetail/1');
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '拉黑')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: '王小明',
                        phone: 13806042412,
                        state: '审核通过',
                        money:15100.00,
                        time:'20160206'
                    },
                    {
                        name: '张小刚',
                        phone: 13806042412,
                        state: '待审核',
                        money:15100.00,
                        time:'20160206'
                    },
                    {
                        name: '李小红',
                        phone: 13806042412,
                        state: '未通过',
                        money:15100.00,
                        time:'20160206'
                    },
                    {
                        name: '周小伟',
                        phone: 13806042412,
                        state: '黑名单',
                        money:15100.00,
                        time:'20160206'
                    }
                ]
            }
        },
        props: ['msg'],
        methods: {
            remove (index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>