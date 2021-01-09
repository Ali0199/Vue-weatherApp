<template>
    <div class="nav">
        <div class="logo">
            <h3>
                <svg aria-hidden="true" width="25px" focusable="false" data-prefix="fas" data-icon="cloud-sun" class="svg-inline--fa fa-cloud-sun fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="yellow" d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"></path>
                </svg>
                Weather
            </h3>
        </div>
        <div class="linkes">
            <button class="nav-button">
                <svg aria-hidden="true" height="25px" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#fff" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
            </button>
            <button class="nav-button">
                <img height="25px" :src="require(`@/assets/uzb.jpg`)" alt="AA">
            </button>
        </div>
    </div>
</template>

<style>
.logo h3 {
    color: #fff;
}

.nav {
    width: 100%;
    background: rgb(5, 97, 150);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    position: relative;
    z-index: 1;
}

.nav-button {
    padding: 5px 15px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
}

@media screen and (max-width:500px) {
    .nav {
        padding: 0px 10px;
    }
}
</style>
