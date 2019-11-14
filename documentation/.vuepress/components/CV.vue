<template>
<div class="custom">
    <div class="cv-header">
    <div class="cv-center-items">
        <div class="photo"><img class="" src="../public/my-photo.png" alt=""></div>
        <div class="my-data">
            <p>Artem Poddybnyy</p>
            <p>Date of birth: 15 October 1986</p>
            <p>e-mail: artpoddybnyy@gmail.com</p>
            <p>skype: artpoddybnyy</p>
            <p>phone: +(380) 93 94 84 195</p>
            <p>city: Kharkov, Ukraine</p>
        </div>
    </div>
    </div>
    <div class="main-info">
       <p>Frontend Developer</p>
       <p>2+ year  web development</p>
    </div>
    <div class="info-skills-wrapper">
       <div class="cv-info-item">
        <p class="sub-info-header">Commercial experience:</p>
        <div class="experience m-left-1">
            <p>Inn4Science (web development, interviewing)</p>
            <p>08.2017 - present time</p>
        </div>
        <p class="sub-info-header">Skills:</p>
        <div class="skills m-left-1">
        <p>JavaScript, TypeScript</p>
        <p>WEB Frameworks: Vue + ecosystem, Nuxt, Angular</p>
        <p>Version control: Git</p>
        <p>Build system: Webpack</p>
        <p>Additional libraries: lodash, axios, cypress, bootstrap</p>
    </div>
        <p class="sub-info-header">Education:</p>
        <div class="education m-left-1">
            <p>&#8226;  Kharkov National Automobile and Highway University got a</p>
            <p>specialist degree on the mechanical faculty (2004 - 2009)</p>
            <p>&#8226;  Simon Kuznets Kharkov National University of Economics got a</p>
            <p>master’s degree qualification of «Master of Public Service» (2013-2015)</p>
            </div>
        <p class="sub-info-header">Languages:</p>
        <p class="m-left-1">English - intermediate</p>
    </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "CV"
    }
</script>

<style scoped>
.custom {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    z-index: 9999;
    background-color: white;
    /*background-image: url("../public/cv-back-ground.png");*/
    /*background-color:rgba(0, 0, 0, 0.5);*/
}
.custom:before{
    z-index:-1;
    position:absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    width: 100vw;
    content: ' ';
    background-image: url("../public/cv-back-ground.png");
    opacity:0.07;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.custom p {
    margin: 0;
    padding: 0;
    white-space: normal;
    font-weight: 600;
}
  .custom:first-child {
      margin: 0;
      padding: 4rem 4rem 0;
  }
    .cv-header {
        display: flex;
        max-height: max-content;
        justify-content: center;
        margin-bottom: 22px;
    }
    .cv-center-items {
        display: flex;
        justify-content: space-between;
        width: 50vw;
    }
    .cv-info-item {
        width: 50vw;
    }
    .photo {
    }
    .photo img {
        border-radius: 15px;
        min-width: 200px;
        max-height: 300px;
        min-height: 300px;
    }
    .info-skills-wrapper {
        display: flex;
        justify-content: center;
    }
    .my-data {

    }
    .main-info {
        margin: 0 auto;
    }
.main-info p {
    text-align: center;
}
.experience {
    display: flex;
    justify-content: space-between;
}
    .sub-info-header {
        color: #0070c0;
    }
    .m-left-1 {
        padding-left: 1rem;
    }
    @media (max-width: 1024px) {
        .cv-center-items {
            width: 100%;
            justify-content: space-around;
        }
        .cv-info-item {
            width: 100%;
        }
    }
    @media (max-width: 768px) {
        .custom:first-child {
            padding: 2rem;
        }
    }
    @media (max-width: 535px) {


        .info-skills-wrapper {

        }
        .cv-center-items {
            flex-direction: column;
            width: 100%;
            justify-content: center;
        }
        .cv-center-items div{
            margin: 0 auto;
        }

    }
</style>
