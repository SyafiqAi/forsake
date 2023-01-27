<template>
    <div class="feedback-main">
        <h1>Send Feedback</h1>
        <p class='desc'>Tell me what you think of the website.</p>

        <div class="form-area">
            <div class="name-input">
                <p>Name</p>
                <input type="text" :placeholder="nameInputPlaceholder" v-model="name"/>
            </div>
            
            <br />
            <br />

            <div class="message-input">
                <p>Message</p>
                <textarea type="text" :placeholder="messageInputPlaceholder" v-model="message" />
            </div>
            
            <br />
            <br />

            <button :disabled='isDisabled' @click="submitClicked">Submit</button>
            
        </div>

    </div>
    <div v-show="showPopup" class="popup-overlay" @click='showPopup=false'>
        <div class="popup-window">
            <div style="font-size: 2em; font-weight: bold"> {{ popupTitle }}</div>
                    <br />
                    <br />
            <div class="popup-content">
                <img v-show="showImage" height='150' :src="imageSrc" alt='loading' />
                <div v-if="popupContent!==''">
                    <br />
                    <br />
                    {{ popupContent }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { sendFeedback } from '@/firebaseConfig.js';
import { computed, ref, watch } from '@vue/runtime-core';
import ripple from '../assets/ripple.svg'
import asleep from '../assets/Error.png'
import thumbsUp from '../assets/thumbsUp.gif'

const nameInputPlaceholder = '(Optional)'
const messageInputPlaceholder = 'Feedback / Suggestions / Requests'

const name = ref('');
const message = ref('');

const isDisabled = computed(() => {
    return message.value === '';
})

const showPopup = ref(false);
const showImage = ref(false);
const imageSrc = ref('');
const popupTitle = ref('');
const popupContent = ref('');

async function submitClicked() {
    showLoading();
    let fb = {
        name: (name.value === '' ? 'Anon' : name.value),
        message: message.value,
        date: new Date()
    }
    sendFeedback(fb).then(
        () => {
            showSuccess();
            name.value = '';
            message.value = '';
        }, 
        () => {
            showFail();
            console.log("Fail");
    })
}
function showLoading() {
    showPopup.value = true;
    popupTitle.value = 'Sending Feedback'
    popupContent.value = ""
    showImage.value = true;
    imageSrc.value = ripple;
    console.log("imgsrc = ", imageSrc.value);
}
function showSuccess() {
    showPopup.value = true;
    popupTitle.value = 'Thanks!'
    popupContent.value = "I'll check it out later."
    showImage.value = true;
    imageSrc.value = thumbsUp;
    console.log("imgsrc = ", imageSrc.value);
}
function showFail() {
    showPopup.value = true;
    popupTitle.value = 'Failed to save.'
    popupContent.value = "Please try again."
    showImage.value = true;
    imageSrc.value = asleep;
}

</script>

<style lang="scss" scoped>

.feedback-main {
    position: relative;
    height: 100%;
    h1, .desc {
        text-align: center;
    }

    > .form-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        > .name-input {
            input {
                // height: 2em;
                width: 40ch;
            }
        }
        > .message-input {
            textarea {
                width: 40ch;
                height: 7em;
                resize: none;
            }
        }

        input, textarea {
            font-family: inherit;
            padding: 10px;
            border: none;
            outline: none;
            background-color: v-bind('$darkBlue');
            color: v-bind('$grey');
            border-radius: 1px;

            &:focus {
                outline: 1px solid v-bind('$boldGreen');
            }
            
        }

        button {
            border: none;
            outline: none;
            background-color: v-bind('$boldGreen');
            color: v-bind('$darkDarkBlue');
            // font-weight: bold;
            border-radius: 2px;
            padding: 10px;
            cursor: pointer;
            &:hover{
                background-color: v-bind('$lightGreen');
            }
            &:disabled{
                background-color: v-bind('$darkBlue');
            }
        }
    }


}
.popup-overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    text-align: center;
    > .popup-window {
        h2{
            margin-top: 0;
        }
        min-width: fit-content;
        padding: 30px;
        background-color: v-bind('$darkDarkBlue');
        // outline: 1px solid red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        
      @media only screen and (max-width: 600px) {
          min-width: 80vw;
        transform: translate(-50%,-70%);
      }
      
    }
}

</style>