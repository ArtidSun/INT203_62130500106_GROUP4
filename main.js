const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            tasks: [{ image: 'images/Strike.jpg', article: 'ZGMF-X20A', name: 'Gundam Strike Freedom', done: false },
            { image: 'images/Exia.jpg', article: 'GN-001', name: 'Gundam Exia', done: false },
            { image: 'images/Barbatos.jpg', article: 'ASW-G-08', name: 'Gundam Barbatos Lupus Rex', done: false }
            ],
            searchOn: false
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        opensearch() {
            this.searchOn = !this.searchOn
        },
        hidesearch() {
            this.searchOn = !this.searchOn
        }
    },
    computed: {
        countlikepic() {
            return this.tasks.filter(t => t.done).length
        },
        searchingphoto() {
            this.notFound = false;
            if (this.inputSearch == '') {
                return this.gallery;
            } else {
                let menu = this.gallery.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase()));
                if (menu == '') {
                    this.notFound = true;
                } else {
                    return menu;
                }
            }
        }
    }

}
Vue.createApp(app).mount('#app')