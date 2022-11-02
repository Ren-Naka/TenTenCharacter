Vue.createApp({
    data: function(){
        return {
            index: [
                {
                    num: 1,
                    title: "ヒロイン1",
                    link: "img/index1.jpg",
                },
                {
                    num: 2,
                    title: "ヒロイン2",
                    link: "img/index2.jpg",
                },
                {
                    num: 3,
                    title: "ヒロイン3",
                    link: "img/index3.jpg",
                },
                {
                    num: 4,
                    title: "ヒロイン4",
                    link: "img/index4.jpg",
                },
            ],
            slide: [
                {
                    num: 1,
                    title: "ヒロイン1",
                    link: "img/heroine1.jpg",
                },
                {
                    num: 2,
                    title: "ヒロイン2",
                    link: "img/heroine2.jpg",
                },
                {
                    num: 3,
                    title: "ヒロイン3",
                    link: "img/heroine3.jpg",
                },
                {
                    num: 4,
                    title: "ヒロイン4",
                    link: "img/heroine4.jpg",
                },
            ],
            SlideOrder: 0,
        }
    },
    methods: {
        CurrentSlideImage: function(){
            return this.slide[this.SlideOrder].link
        },
        PreviousSlideImage: function(){
            if(this.SlideOrder <= 0){
                this.SlideOrder = this.slide.length - 1
            }else{
                this.SlideOrder = this.SlideOrder - 1
            }
        },
        NextSlideImage: function(){
            if(this.SlideOrder >= this.slide.length - 1){
                this.SlideOrder = 0
            }else{
                this.SlideOrder = this.SlideOrder + 1
            }
        },
        CurrentIndex: function(img){
            this.SlideOrder = img.num - 1
        },
    }
}).mount("#app")