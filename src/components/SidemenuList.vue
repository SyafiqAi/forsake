<template>
    <div class="sidemenu-list">

        <div class="item-container" v-for="(route, index) in routes" :key='route.name'>
            <div class="item">
                <router-link @click="$emit('linkclicked')" :to="{name: route.name}" class="item-text"> {{ route.menuName || route.name }} </router-link>
                <div v-if="route.children" class="expand-arrow prevent-select" @click="toggleAccordion($event,index)"> &#x25BC; </div>
            </div>

            <div class="subitem-list" ref="routes" style='height: 0;'>
                <div class="sub item" v-for="subRoute in route.children" :key='subRoute.name'>
                    <router-link v-if="subRoute.name !== '-'" @click="$emit('linkclicked')" :to="{name:subRoute.name}" class="item-text"> {{subRoute.name}}</router-link>
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
            arrowActive: [],
        }
    },
    methods: {
        toggleAccordion(e, index) {
            let item = this.$refs.routes[index]
            let itemHeight = item.style.height;
            let scrollHeight = item.scrollHeight + 'px';

            item.style.height = itemHeight === '0px' ? scrollHeight : '0px';
            this.toggleArrow(e,index);

        },
        toggleArrow(e,index) {
            let upArrow = '\&#x25B2;';
            let downArrow = '\&#x25BC;';

            if(this.arrowActive[index] === undefined){
                this.arrowActive[index] = false;
            }

            let active = this.arrowActive[index];

            e.target.innerHTML = active ? downArrow : upArrow;

            this.arrowActive[index] = !active;
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidemenu-list {
        overflow: overlay;
        height: calc(100% - 50px);
        .item-container {
            .item {
                // border: 1px solid v-bind('$darkDarkBlue');
                // margin-top: -1px;
                display: flex;
                justify-content: space-between;
                > .item-text {
                    width: 100%;
                }
                > a {
                    padding: 20px;
                    color: v-bind('$grey');
                    text-decoration: none;
                    &:hover,  &.router-link-active {
                        color: v-bind('$darkBlue');
                        background-color: v-bind('$boldGreen');
                        cursor: pointer;
                    }
                    &.router-link-active:hover{
                        background-color: v-bind('$lightGreen');
                    }
                }
                > div {
                    padding: 20px;
                    &:hover{
                        cursor: pointer;
                        background-color: v-bind('$darkDarkBlue');
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
            }

        }


    }
</style>