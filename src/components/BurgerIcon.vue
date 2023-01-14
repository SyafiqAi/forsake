<template>
    <div class="burger-icon">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25px;
    width: 30px;
    cursor: pointer;
    > div {
        height: 0.8px;
        width: 100%;
        background-color: v-bind('$grey');
        transition: 0.3s;
    }
    &:hover div{
        background-color: v-bind('$lightGreen');
    }
}
</style>