<template>
    <div class="sidemenu-list">

        <div class="item-container" v-for="(route, index) in routes" :key='route.name'>
            <div class="item">
                <router-link @click="$emit('linkclicked')" :to="{name: route.name}" class="item-text"> {{ route.menuName || route.name }} </router-link>
                <div v-if="route.children" class="expand-arrow" @click="toggleAccordion(index)"> V </div>
            </div>

            <div class="subitem-list" ref="routes" style='height: 0;'>
                <div class="sub item" v-for="subRoute in route.children" :key='subRoute.name'>
                    <router-link @click="$emit('linkclicked')" :to="{name:subRoute.name}" class="item-text"> {{subRoute.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['linkclicked'],
    data() {
        return {
            routes: this.$router.options.routes,
        }
    },
    methods: {
        toggleAccordion(index) {
            let item = this.$refs.routes[index]
            let itemHeight = item.style.height;
            let scrollHeight = item.scrollHeight + 'px';
            console.log("height: ", itemHeight);

            item.style.height = itemHeight === '0px' ? scrollHeight : '0px';
        },
    }
}
</script>

<style lang="scss" scoped>
    .sidemenu-list {
        overflow: overlay;
        height: calc(100% - 50px);
        .item-container {
            .item {
                border: 1px solid v-bind('$darkDarkBlue');
                margin-top: -1px;
                display: flex;
                justify-content: space-between;
                > .item-text {
                    width: 100%;
                }
                > * {
                    padding: 20px;
                    &:hover,  &.router-link-active {
                        color: v-bind('$darkBlue');
                        background-color: v-bind('$boldGreen');
                        cursor: pointer;
                    }
                }
                > a {
                    color: v-bind('$grey');
                    text-decoration: none;

                    &.router-link-active:hover{
                        background-color: v-bind('$lightGreen');
                    }
                }
                
                > .expand-arrow {
                    width: 50px;
                    text-align: center;
                }

                // &:hover {
                //     color: v-bind('$darkBlue');
                //     background-color: v-bind('$boldGreen');
                //     cursor: pointer;
                // }

            }
            
            > .subitem-list {
                overflow: hidden;
                transition: 0.2s;
                // margin: 0 20px;
                margin-left: 40px;
                background-color: v-bind('$darkDarkBlue');
                // margin: 0 20px;
                > .item {
                    border: 1px solid v-bind('$darkBlue');
                }
            }

        }
    }
</style>