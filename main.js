const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            tasks: [{ image: 'images/Strike.jpg', article: 'ZGMF-X20A', name: 'Gundam Strike Freedom', done: false},
            { image: 'images/Exia.jpg', article: 'GN-001', name: 'Gundam Exia', done: false},
            { image: 'images/Barbatos.jpg', article: 'ASW-G-08', name: 'Gundam Barbatos Lupus Rex', done: false}
            ],
            searchOn: false,
            searching: '',
            currentIndex: 0,
            show: false
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
            this.tasks.done[index] = !this.tasks.done[index];
        },

        showImg(index) {
            this.show= true;
            // this.currentIndex = index;
            console.log(index);
            console.log(this.show)
        },

        switchsearch() {
            this.searchOn = !this.searchOn;
            this.searching = '';
        }
    },
    computed: {
        countlikepic() {
            return this.tasks.filter(t => t.done).length
        },
        searchingphoto() {
            if (this.searching == '') {
                console.log("test01");
                return this.tasks;
            } else {
                let menu = this.tasks.filter(n => n.name.toLowerCase().includes(this.searching.toLowerCase()));
                console.log("test02");
                if (menu == '') {
                    console.log("test03");
                    return this.tasks;
                }
                return menu;
            }
        }
    }

}
Vue.createApp(app).mount('#app')