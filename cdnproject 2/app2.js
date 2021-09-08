const app = Vue.createApp({

    // export default: {
    // name: 'navbar',
    data() {
        return {
            titleName: 'Zazz Farm Works',

            services: [{
                    title: 'Web',
                    link: '#'
                },
                {
                    title: 'Design',
                    link: '#'
                },
                {
                    title: 'Videos',
                    link: '#'
                }
            ]
        }
    }

}

})






app.mount('#app')