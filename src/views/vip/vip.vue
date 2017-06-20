<template>
    <Tabs value="name1">
        <Tab-pane label="所有会员" name="name1"><viptable msg="1"></viptable></Tab-pane>
        <Tab-pane label="审核通过" name="name2"><viptable msg="2"></viptable></Tab-pane>
        <Tab-pane label="待审核" name="name3"><viptable msg="3"></viptable></Tab-pane>
        <Tab-pane label="未通过" name="name4"><viptable msg="4"></viptable></Tab-pane>
        <Tab-pane label="黑名单" name="name5"><viptable msg="5"></viptable></Tab-pane>
    </Tabs>
</template>
<script>
    import viptable from './vipTable.vue';
    export default {
        components: {
            viptable
        }
    }
</script>